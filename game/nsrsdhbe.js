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
        this.load.image('back1', 'assets/backgrounds/parallax-forest-back-trees.png');
        this.load.image('back2', 'assets/backgrounds/parallax-forest-lights.png');
        this.load.image('back3', 'assets/backgrounds/parallax-forest-middle-trees.png');
        this.load.image('back4', 'assets/backgrounds/parallax-forest-front-trees.png');
        this.load.image('back1', 'assets/backgrounds/parallax-forest-back-trees.png');
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
      text.setText('Sorry, but the SANS institute is on a different planet!')
      console.log('here');
      setTimeout(() => {
          window.location.href = "game.html";
      }, 5000);
  }
  left = "no";
      mu = this.sound.add('music');
        mu.loop = true;
        mu.play();
      back1 = this.add.image(512, 320, 'back1');
      back1.setScale(4);
      back1.setTint(0xFF9900);
      back2 = this.add.image(512, 320, 'back2');
      back2.setScale(4);
      back3 = this.add.image(512, 320, 'back3');
      back3.setScale(4);
      back4 = this.add.image(512, 320, 'back4');
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
      var text = this.add.bitmapText(100, 525, 'topaz', 'Did I finally find the SANS Institute?', 48);
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
            gravity: { y: 300 },
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
