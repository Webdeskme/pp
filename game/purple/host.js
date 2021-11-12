var P1 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function P1 ()
    {
        Phaser.Scene.call(this, { key: 'p1' });
    },
    preload: function ()
    {
        var cards = {c1:"b", c2:"b", c3:"b", c4:"b", c5:"b", c6:"b", cn1:"b", cn2:"b", cn3:"b", cn4:"b", cn5:"b", cn6:"b"};
        this.load.bitmapFont('topaz', 'assets/fonts/lato.png', 'assets/fonts/lato.xml');
        this.load.image('back', 'assets/back/Background.jpg');
        this.load.image('musicOff', 'assets/icons/sound-off.png');
        this.load.image('musicOn', 'assets/icons/sound-on.png');
        this.load.image('full', 'assets/icons/expand.png');
        this.load.image('shock', 'assets/icons/surprised-skull.png');
        this.load.image('happy', 'assets/icons/pirate-skull.png');
        this.load.image('anger', 'assets/icons/blade-bite.png');
        this.load.video('rules', 'assets/Video/walkthrough.mp4', 'loadeddata', false, false);
        for (var key in cards) {
          console.log(key);
          console.log(cards[key]);
          this.load.image(cards[key], 'assets/cards/' + cards[key] + '.png');
          this.load.image(key, 'assets/cards/' + key + '.png');
        }
        /*var i;
        for (i = 0; i < cards.length; i++) {
          this.load.image(cards[i], 'assets/cards/' + cards[i] + '.png');
        }
        var i;
        for (i = 0; i < cards.length; i++) {
          var zzz = cards[i] + 'big';
          this.load.image(zzz, 'assets/out/' + cards[i] + '.png');
        }*/
        this.load.audio('click', [
        "assets/Audio/mouseclick.wav"
        ]);
        this.load.audio('mend', [
        "assets/Audio/explosion.wav"
        ]);
        this.load.audio('aq', [
        "assets/Audio/gmae.wav"
        ]);
        this.load.audio('mwin', [
        "assets/Audio/WinSaw.wav"
        ]);
        this.load.audio('sc', [
        "assets/Audio/completetask_0.mp3"
        ]);
        this.load.audio('mlose', [
        "assets/Audio/MachinePowerOff.mp3"
        ]);
        this.load.audio('comp', [
        "assets/Audio/explosion5.mp3"
        ]);
        this.load.audio('music', [
        "assets/Audio/MyVeryOwnDeadShip.mp3"
        ]);
    },
    create: function ()
    {
      th = this;
      this.socket = io('https://on.piratesport.net');
      this.socket.emit('host');
      this.socket.on('strin', function (strinn) {
        rtext.setText(strinn);
      });
      this.socket.on('player', function (si1) {
        aww = "No";
        serv.setText('You are Player ' + si1);
        he = th.add.image(250, 150, "happy").setInteractive({ useHandCursor: true  } );
        he.setScale(1/8);
        heb = th.add.image(650, 250, "happy").setInteractive({ useHandCursor: true  } );
        heb.setScale(1/3);
        heb.visible = false;
        emo(he, heb, "happy");
        ae = th.add.image(375, 150, "anger").setInteractive({ useHandCursor: true  } );
        ae.setScale(1/8);
        aeb = th.add.image(650, 250, "anger").setInteractive({ useHandCursor: true  } );
        aeb.setScale(1/3);
        aeb.visible = false;
        emo(ae, aeb, "angry");
        se = th.add.image(500, 150, "shock").setInteractive({ useHandCursor: true  } );
        se.setScale(1/8);
        seb = th.add.image(650, 250, "shock").setInteractive({ useHandCursor: true  } );
        seb.setScale(1/3);
        seb.visible = false;
        emo(se, seb, "shock");
        if(si1 == 1){

        }
      });
      this.socket.on('emo', function (emo) {
        if(emo == "happy"){
          heb.visible = true;
        }
        else if(emo == "angry"){
          aeb.visible = true;
        }
        else{
          seb.visible = true;
        }
        setTimeout(() => {
            if(emo == "happy"){
              heb.visible = false;
            }
            else if(emo == "angry"){
              aeb.visible = false;
            }
            else{
              seb.visible = false;
            }
        }, 3000);
      });
      back = this.add.image(512, 320, 'back');
      var serv = this.add.bitmapText(700, 40, 'topaz', 'Awaiting Player', 48);
      var playerText = this.add.bitmapText(700, 90, 'topaz', 'Player: 1', 48);
      var r = this.add.bitmapText(800, 15, 'topaz', 'Rules', 32);
      this.socket.on('host', function (mid) {
        serv.setText('ID: ' + mid);
        console.log(mid);
      });
      mf = this.add.image(700, 25, 'musicOff').setInteractive({ useHandCursor: true  } );
      mo = this.add.image(750, 25, 'musicOn').setInteractive({ useHandCursor: true  } );
      fu = this.add.image(1000, 25, 'full').setInteractive({ useHandCursor: true  } );
      mu = this.sound.add('music');
      mu.loop = true;
      mu.play();
      mf.setScale(1/8);
      mo.setScale(1/8);
      fu.setScale(1/8);
      fu.on('pointerdown', () => {
        if (this.scale.isFullscreen)
          {
              this.scale.stopFullscreen();
          }
          else
          {
              this.scale.startFullscreen();
          }
      });
      mo.on('pointerdown', () => {
        mu.loop = true;
        mu.play();
      });
      mf.on('pointerdown', () => {
        this.game.sound.stopAll();
      });
      r.setInteractive();
      r.on('pointerdown', () => {
        this.sound.add('click').play();
        var rule = this.add.image(512, 320, 'back');
        var vid = this.add.video(512, 320, 'rules').setInteractive({ useHandCursor: true  } );
        vid.setScale(1/2);
       vid.play(true);
       vid.setPaused(false);
        var hr = this.add.bitmapText(16, 16, 'topaz', 'Back', 32);
        hr.setInteractive({ useHandCursor: true  } );
        hr.on('pointerdown', () => {
          vid.destroy();
          vid = null;
          rule.destroy();
          rule = null;
          hr.destroy();
          hr = null;
        });
      });
      var h = this.add.bitmapText(15, 15, 'topaz', 'Home', 32).setInteractive({ useHandCursor: true  } );
      h.setInteractive();
      h.on('pointerdown', () => {
        this.sound.add('click').play();
        this.game.sound.stopAll();
        window.location.href = "../game.html";
      });

      ///// keyboard /////

      var stext = this.add.text(575, 150, 'Type + return to chat.', { fontSize: '24px', fill: '#fff', wordWrap: { width: 400 } });
      var rtext = this.add.text(575, 225, 'Read other players chat here.', { fontSize: '24px', fill: '#4AF626', wordWrap: { width: 400 } });
      strin = '';
      this.input.keyboard.on('keyup', function (event) {
        if(event.keyCode === 65){
          if(strin.length < 90){
            strin += "A";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 66) {
          if(strin.length < 90){
            strin += "B";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 67) {
          if(strin.length < 90){
            strin += "C";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 68) {
          if(strin.length < 90){
            strin += "D";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 69) {
          if(strin.length < 90){
            strin += "E";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 70) {
          if(strin.length < 90){
            strin += "F";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 71) {
          if(strin.length < 90){
            strin += "G";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 72) {
          if(strin.length < 90){
            strin += "H";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 73) {
          if(strin.length < 90){
            strin += "I";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 74) {
          if(strin.length < 90){
            strin += "J";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 75) {
          if(strin.length < 90){
            strin += "K";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 76) {
          if(strin.length < 90){
            strin += "L";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 77) {
          if(strin.length < 90){
            strin += "M";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 78) {
          if(strin.length < 90){
            strin += "N";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 79) {
          if(strin.length < 90){
            strin += "O";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 80) {
          if(strin.length < 90){
            strin += "P";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 81) {
          if(strin.length < 90){
            strin += "Q";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 82) {
          if(strin.length < 90){
            strin += "R";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 83) {
          if(strin.length < 90){
            strin += "S";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 84) {
          if(strin.length < 90){
            strin += "T";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 85) {
          if(strin.length < 90){
            strin += "U";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 86) {
          if(strin.length < 90){
            strin += "V";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 87) {
          if(strin.length < 90){
            strin += "W";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 88) {
          if(strin.length < 90){
            strin += "X";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 89) {
          if(strin.length < 90){
            strin += "Y";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 90) {
          if(strin.length < 90){
            strin += "Z";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 49) {
          if(strin.length < 90){
            strin += "1";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 50) {
          if(strin.length < 90){
            strin += "2";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 51) {
          if(strin.length < 90){
            strin += "3";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 52) {
          if(strin.length < 90){
            strin += "4";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 53) {
          if(strin.length < 90){
            strin += "5";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 54) {
          if(strin.length < 90){
            strin += "6";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 55) {
          if(strin.length < 90){
            strin += "7";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 56) {
          if(strin.length < 90){
            strin += "8";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 57) {
          if(strin.length < 90){
            strin += "9";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 48) {
          if(strin.length < 90){
            strin += "0";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 189) {
          if(strin.length < 90){
            strin += "-";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 187) {
          if(strin.length < 90){
            strin += "=";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 188) {
          if(strin.length < 90){
            strin += ",";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 190) {
          if(strin.length < 90){
            strin += ".";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 191) {
          if(strin.length < 90){
            strin += "?";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 32) {
          if(strin.length < 90){
            strin += " ";
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 8) {
          if(strin.length > 0){
            strin = strin.slice(0, -1);
            stext.setText(strin);
          }
        }
        else if (event.keyCode === 13) {
          stext.setText(strin);
          th.socket.emit('strin', strin);
          strin = '';
        }
      });
  },
  update() {}
});
var config = {
    type: Phaser.WEBGL,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: "app",
      width: 1024,
      height: 640,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    render: {
      clearBeforeRender: false
    },
     enableDebug: false,
    backgroundColor: '#000000',
    scene: [ P1 ]
};
var game = new Phaser.Game(config);
