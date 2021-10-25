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
      /*if(z == 1){
        back = this.add.image(512, 320, 'back1');
      }
      else if (z == 2) {
        back = this.add.image(512, 320, 'back2');
      }
      else if (z == 3) {
        back = this.add.image(512, 320, 'back3');
      }
      else if (z == 4) {
        back = this.add.image(512, 320, 'back4');
      }*/
      //back.setScale(3/2);
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
