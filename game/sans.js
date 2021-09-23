var San = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function San ()
    {
        Phaser.Scene.call(this, { key: 'san' });
    },

    preload: function ()
    {
      this.load.image('back', 'assets/backgrounds/star1.jpg');
      this.load.audio('click', [
      "assets/Audio/mouseclick.wav"
      ]);

    },

    create: function ()
    {
      this.add.image(512, 320, 'back');
      var sto = this.add.dom(512, 320).createFromHTML('<iframe width="560" height="315" src="https://www.youtube.com/embed/h3uIYEYpw7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      sto.setScale(3/2);
      var hr = this.add.text(16, 16, 'Back', { fontSize: '32px', fill: '#fff' });
      hr.setInteractive({ useHandCursor: true  } );
      hr.on('pointerdown', () => {
        this.game.sound.stopAll();
        //this.scene.start('titles');
        window.location.href = "game.html";
      });
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
    dom: {
        createContainer: true
    },
    backgroundColor: '#000000',
    scene: [ San ]
};
var game = new Phaser.Game(config);