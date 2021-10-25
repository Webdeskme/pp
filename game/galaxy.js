var P1 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function P1 ()
    {
        Phaser.Scene.call(this, { key: 'p1' });
    },
    preload: function ()
    {
        this.load.bitmapFont('topaz', 'assets/fonts/lato.png', 'assets/fonts/lato.xml');
        this.load.image('back1', 'assets/backgrounds/Background-1.png');
        this.load.image('back2', 'assets/backgrounds/Background-2.png');
        this.load.image('back3', 'assets/backgrounds/Background-3.png');
        this.load.image('back4', 'assets/backgrounds/Background-4.png');
        this.load.atlas('space', 'assets/space/space.png', 'assets/space/space.json');
        this.load.image('health', 'assets/icons/astroid.png');
        this.load.audio('music', [
        "assets/Audio/MyVeryOwnDeadShip.mp3"
        ]);
    },
    create: function ()
    {
      function getRandomArbitrary(min, max) {
          return Math.random() * (max - min) + min;
      }
      var z = getRandomArbitrary(0, 4);
      z = Math.ceil(z);
      console.log(z);
      back = this.add.image(512, 320, 'back' + z);
      aText = this.add.bitmapText(25, 25, 'topaz', 'Astroids: 0', 64);
      //ship;
      //bullets;
      lastFired = 0;
      //cursors;
      //fire;
      ship = this.physics.add.image(512, 320, 'space', 'ship').setDepth(2);
      ship.enableBody = true;
      ship.setScale(1/2);
      ship.setBounce(0.2);
      ship.setCollideWorldBounds(true);
      healthGroup = this.physics.add.group({
        // Initial angular speed of 60 degrees per second.
        // Drag reduces it by 5 degrees/s per second, thus to zero after 12 seconds.
        angularDrag: 0,
        angularVelocity: 60,
        bounceX: 1,
        bounceY: 1,
        collideWorldBounds: true,
        dragX: 0,
        dragY: 0
    });

    for (let i = 0; i < 10; i++) {
      var yx = Phaser.Math.Between(-100, 100);
      var yy = Phaser.Math.Between(-100, 100);
      var xx = Phaser.Math.Between(0, 1024);
      var xy = Phaser.Math.Between(0, 220);
      healthGroup.create(xx, xy, 'health').setVelocity(yx, yy);
    }
    for (let i = 0; i < 10; i++) {
      var yx = Phaser.Math.Between(-100, 100);
      var yy = Phaser.Math.Between(-100, 100);
      var xx = Phaser.Math.Between(0, 1024);
      var xy = Phaser.Math.Between(420, 640);
      healthGroup.create(xx, xy, 'health').setVelocity(yx, yy);
    }

      var Bullet = new Phaser.Class({

        Extends: Phaser.Physics.Arcade.Image,

        initialize:

        function Bullet (scene)
        {
            Phaser.Physics.Arcade.Image.call(this, scene, 0, 0, 'space', 'blaster');

            this.setBlendMode(1);
            this.setDepth(1);

            this.speed = 1000;
            this.lifespan = 1000;

            this._temp = new Phaser.Math.Vector2();
        },

        fire: function (ship)
        {
            this.lifespan = 1000;

            this.setActive(true);
            this.setVisible(true);
            this.setAngle(ship.body.rotation);
            this.setPosition(ship.x, ship.y);
            this.body.reset(ship.x, ship.y);
                var angle = Phaser.Math.DegToRad(ship.body.rotation);
            this.scene.physics.velocityFromRotation(angle, this.speed, this.body.velocity);

            this.body.velocity.x *= 2;
            this.body.velocity.y *= 2;
          },

     update: function (time, delta)
     {
         this.lifespan -= delta;

         if (this.lifespan <= 0)
         {
             this.setActive(false);
             this.setVisible(false);
             this.body.stop();
         }
     }

 });


 var particles = this.add.particles('space');

    var emitter = particles.createEmitter({
        frame: 'blue',
        speed: 100,
        lifespan: {
            onEmit: function (particle, key, t, value)
            {
                return Phaser.Math.Percent(ship.body.speed, 0, 300) * 2000;
            }
        },
        alpha: {
            onEmit: function (particle, key, t, value)
            {
                return Phaser.Math.Percent(ship.body.speed, 0, 300);
            }
        },
        angle: {
            onEmit: function (particle, key, t, value)
            {
                var v = Phaser.Math.Between(-10, 10);
                return (ship.angle - 180) + v;
            }
        },
        scale: { start: 0.6, end: 0 },
        blendMode: 'ADD'
    });

    bullets = this.physics.add.group({
        classType: Bullet,
        maxSize: 15,
        runChildUpdate: true
    });

    ship.setDrag(300);
    ship.setAngularDrag(400);
    ship.setMaxVelocity(100);

    emitter.startFollow(ship);

    cursors = this.input.keyboard.createCursorKeys();
    fire = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    },
    update: function (time, delta)
    {

      if (cursors.left.isDown)
          {
              ship.setAngularVelocity(-150);
          }
          else if (cursors.right.isDown)
          {
              ship.setAngularVelocity(150);
          }
          else
          {
              ship.setAngularVelocity(0);
          }

          if (cursors.up.isDown)
          {
              this.physics.velocityFromRotation(ship.rotation, 50, ship.body.acceleration);
          }
          else
          {
              ship.setAcceleration(0);
          }

          if (fire.isDown && time > lastFired)
          {
              var bullet = bullets.get();

              if (bullet)
              {
                  bullet.fire(ship);

                  lastFired = time + 100;
              }
            }

            var he = 0;
            this.physics.add.overlap(bullets, healthGroup, spriteHitHealth);
            this.physics.add.overlap(ship, healthGroup, out);
            th = this;
            function spriteHitHealth (bullets, health)
            {
                //  Hide the sprite
                healthGroup.killAndHide(health);

                //  And disable the body
                health.body.enable = false;
                he += 1;
                aText.setText('Astroids: ' + he);
                if(he > 19){
                  th.scene.start('forest');
                }
            }
            function out(){
              window.location.href = "game.html";
            }
    }
});
var Forest = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function Forest ()
    {
        Phaser.Scene.call(this, { key: 'forest' });
    },
    preload: function ()
    {
        this.load.bitmapFont('topaz', 'assets/fonts/lato.png', 'assets/fonts/lato.xml');
        this.load.image('back11', 'assets/backgrounds/parallax-forest-back-trees.png');
        this.load.image('back21', 'assets/backgrounds/parallax-forest-lights.png');
        this.load.image('back31', 'assets/backgrounds/parallax-forest-middle-trees.png');
        this.load.image('back41', 'assets/backgrounds/parallax-forest-front-trees.png');
        this.load.image('sans', 'assets/player/bldg.png');
        this.load.spritesheet('walk', 'assets/player/shq_trooper_run_strip6.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('idle', 'assets/player/shq_trooper_idle_strip2.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('jump', 'assets/player/shq_trooper_jump_strip4.png', { frameWidth: 64, frameHeight: 64 });
        this.load.audio('music', [
        "assets/Audio/MyVeryOwnDeadShip.mp3"
        ]);
    },
    create: function ()
    {
      function collectStar (player, sans)
  {
      text.setText('Come Back soon! TO BE CONTINUED!')
      console.log('here');
      setTimeout(() => {
          window.location.href = "game.html";
      }, 5000);
  }
  left = "no";
      mu = this.sound.add('music');
        mu.loop = true;
        mu.play();
      back1 = this.add.image(512, 320, 'back11');
      back1.setScale(4);
      back2 = this.add.image(512, 320, 'back21');
      back2.setScale(4);
      back3 = this.add.image(512, 320, 'back31');
      back3.setScale(4);
      back4 = this.add.image(512, 320, 'back41');
      back4.setScale(4);
      //sans  = this.add.image(950, 500, 'sans');
      sans = this.physics.add.sprite(950, 475, 'sans');
      sans.setScale(1/2);
      sans.enableBody = true;
      sans.body.immovable = true;
      sans.setCollideWorldBounds(true);
      player = this.physics.add.sprite(25, 550, 'idle');
      player.enableBody = true;
      player.setBounce(0.2);
      player.setCollideWorldBounds(true);
      var text = this.add.bitmapText(100, 525, 'topaz', "You found the pirates' secret base!", 48);
      this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('walk', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('idle', { start: 0, end: 1 }),
        frameRate: 20
    });

    this.anims.create({
        key: 'jump',
        frames: this.anims.generateFrameNumbers('jump', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(player, sans, collectStar, null, this);
    },
    update: function ()
    {
      if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('walk', true);
        if(left == "no"){
          player.flipX = true;
          left = "yes";
          //console.log(left);
        }
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('walk', true);
        if(left == "yes"){
          player.flipX = false;
          left = "no";
          //console.log(left);
        }
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('idle');
        if(left == "yes"){
          player.flipX = false;
          left = "no";
          //console.log(left);
        }
    }

    //if (cursors.up.isDown && player.body.touching.down)
    if (cursors.up.isDown && player.body.blocked.down)
    {
        player.setVelocityY(-330);

        player.anims.play('jump');
    }
    }
});
var config = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: "app",
      width: 1024,
      height: 640,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    render: {
      clearBeforeRender: false
    },
     enableDebug: false,
    backgroundColor: '#000000',
    scene: [ P1, Forest ]
};
var game = new Phaser.Game(config);
