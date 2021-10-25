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
      var ship;
      ship = this.physics.add.image(512, 320, 'space', 'ship').setDepth(2);
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
    update: function ()
    {

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
