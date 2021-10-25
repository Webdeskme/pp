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
      healthGroup = this.physics.add.staticGroup({
              key: 'health',
              frameQuantity: 35
          });
          var children = healthGroup.getChildren();
          for (var i = 0; i < children.length; i++)
          {
              var x = Phaser.Math.Between(0, 1024);
              var y = Phaser.Math.Between(0, -100);
              var yx = Phaser.Math.Between(1, 50);
              var yy = Phaser.Math.Between(1, 50);

              children[i].setPosition(x, y);
              children[i].setVelocityX = yx;
              children[i].setVelocityY = yy;
              //children[i].setScale(1/5);
          }

          healthGroup.refresh();
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
            function spriteHitHealth (bullets, health)
            {
                //  Hide the sprite
                healthGroup.killAndHide(health);

                //  And disable the body
                health.body.enable = false;
                he += 1;
                aText.setText('Astroids: ' + he);
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
    scene: [ P1 ]
};
var game = new Phaser.Game(config);
