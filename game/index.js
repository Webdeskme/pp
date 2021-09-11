var Vide = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Vide ()
    {
        Phaser.Scene.call(this, { key: 'vide' });
    },

    preload: function ()
    {
      this.load.video('intro', 'assets/Video/SenaryAdd.mp4', 'loadeddata', false, true);
      this.load.audio('click', [
      "assets/Audio/mouseclick.wav"
      ]);

    },

    create: function ()
    {
     var vid = this.add.video(400, 300, 'intro').setInteractive({ useHandCursor: true  } );
     vid.setScale(1/2);

    vid.play(true);

    vid.on('pointerdown', () => {
      this.sound.add('click').play();
      console.log('Title');
      this.scene.start('titles');
    });

    // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser)
    vid.setPaused(false);
    setTimeout(() => {
      this.scene.start('titles');
    }, 41000);
  }
});
var TitleS = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function TitleS ()
    {
        Phaser.Scene.call(this, { key: 'titles' });
    },

    preload: function ()
    {
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB"];
        //this.load.image('back', 'assets/backgrounds/back1.jpg');
        this.load.image('back', 'assets/backgrounds/star1.jpg');
        this.load.image('title', 'assets/Text/text.png');
        this.load.image('cb', 'assets/out/back.png');
        var i;
        for (i = 0; i < cards.length; i++) {
          this.load.image(cards[i], 'assets/out/' + cards[i] + '.png');
        }
        this.load.audio('click', [
        "assets/Audio/mouseclick.wav"
        ]);
    },

    create: function ()
    {
      //this.scale.startFullscreen();
      function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
          }
        //var cards = ["s10", "s11", "s12", "s13", "s14", "s15", "s16","s17","s18", "s20", "s21", "s22", "s23", "s24", "s25", "s26","s27","s28","s30", "s31", "s32", "s33", "s34", "s35", "s36","s37","s38", "s40", "s41", "s42", "s43", "s44", "s45", "s46","s47","s48","s50", "s51", "s52", "s53", "s54", "s55", "s56","s57","s58","s60", "s61", "s62", "s63", "s64", "s65", "s66","s67","s68"];
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB"];
        shuffle(cards);
        this.add.image(400, 300, 'back');
        var i;
        var c = this.add.image(250, 300, 'cb');
        c.setScale(1/2);
        for (i = 0; i < cards.length; i++) {
          var c = this.add.image(250, 300, cards[i]).setInteractive({ useHandCursor: true  } );
          c.setScale(1/2);
          //this.input.setDraggable(c);
          this.input.on('gameobjectdown', function (pointer, gameObject) {
              this.sound.add('click').play();
              gameObject.destroy();

          });
        }
        var d = this.add.image(700, 100, 'title');
        d.setInteractive({ useHandCursor: true  } );
        d.setScale(1/4);
        d.on('pointerover',function(pointer){
          console.log('hover');
          d.setScale(1/3);
        });
        d.on('pointerout',function(pointer){
          console.log('out');
          d.setScale(1/4);
        });
        d.on('pointerdown', () => {
          this.sound.add('click').play();
          console.log('Video');
          this.scene.start('p1');
        });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;

    });
    }
});
var P1 = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function P1 ()
    {
        Phaser.Scene.call(this, { key: 'p1' });
    },

    preload: function ()
    {
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB", "EMP"];
        //this.load.image('back', 'assets/backgrounds/back1.jpg');
        this.load.image('back', 'assets/backgrounds/star1.jpg');
        //this.load.image('title', 'assets/Text/text.png');
        this.load.image('cb', 'assets/out/back.png');
        this.load.image('COM', 'assets/out/COM.png');
        this.load.image('ENGINES', 'assets/out/ENGINES.png');
        this.load.image('PORT', 'assets/out/PORT.png');
        this.load.image('Guns', 'assets/out/Guns.png');
        var i;
        for (i = 0; i < cards.length; i++) {
          this.load.image(cards[i], 'assets/out/' + cards[i] + '.png');
        }
        this.load.audio('click', [
        "assets/Audio/mouseclick.wav"
        ]);
    },

    create: function ()
    {
      //this.scale.startFullscreen();
      function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
          }
        //var cards = ["s10", "s11", "s12", "s13", "s14", "s15", "s16","s17","s18", "s20", "s21", "s22", "s23", "s24", "s25", "s26","s27","s28","s30", "s31", "s32", "s33", "s34", "s35", "s36","s37","s38", "s40", "s41", "s42", "s43", "s44", "s45", "s46","s47","s48","s50", "s51", "s52", "s53", "s54", "s55", "s56","s57","s58","s60", "s61", "s62", "s63", "s64", "s65", "s66","s67","s68"];
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB", "EMP"];
        shuffle(cards);
        this.add.image(400, 300, 'back');
        var i;
        for (i = 6; i < cards.length; i++) {
          var c = this.add.image(100, 300, cards[i]).setInteractive({ useHandCursor: true  } );
          c.setScale(1/8);
          //this.input.setDraggable(c);
          this.input.on('gameobjectdown', function (pointer, gameObject) {

              gameObject.destroy();

          });
        }
        var c = this.add.image(25, 300, 'cb');
        c.setScale(1/8);
        var c = this.add.image(150, 300, cards[0]);
        c.setScale(1/8);
        var c = this.add.image(275, 300, cards[1]);
        c.setScale(1/8);
        var c = this.add.image(400, 300, cards[2]);
        c.setScale(1/8);
        var c = this.add.image(525, 300, cards[3]);
        c.setScale(1/8);
        var c = this.add.image(650, 300, cards[4]);
        c.setScale(1/8);
        var c = this.add.image(775, 300, cards[5]);
        c.setScale(1/8);
        var c = this.add.image(150, 150, "COM");
        c.setScale(1/8);
        var c = this.add.image(275, 150, "ENGINES");
        c.setScale(1/8);
        var c = this.add.image(400, 150, "PORT");
        c.setScale(1/8);
        var c = this.add.image(525, 150, "Guns");
        c.setScale(1/8);
        /*var d = this.add.image(700, 100, 'title');
        d.setInteractive({ useHandCursor: true  } );
        d.setScale(1/4);
        d.on('pointerover',function(pointer){
          console.log('hover');
          d.setScale(1/3);
        });
        d.on('pointerout',function(pointer){
          console.log('out');
          d.setScale(1/4);
        });
        d.on('pointerdown', () => {
          this.sound.add('click').play();
          console.log('Video');
          this.scene.start('vide');
        });*/

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;

    });
    }
});
var config = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: "app",
      width: 1024,
      height: 640
    },
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: [ Vide, TitleS, P1 ]
};

var game = new Phaser.Game(config);
