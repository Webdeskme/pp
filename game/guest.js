var Guest = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function Guest ()
    {
        Phaser.Scene.call(this, { key: 'guest' });
    },
    preload: function ()
    {
      this.load.bitmapFont('topaz', 'assets/fonts/lato.png', 'assets/fonts/lato.xml');
      this.load.image('back1', 'assets/backgrounds/black.png');
      this.load.audio('click', [
      "assets/Audio/mouseclick.wav"
      ]);
    },
    create: function ()
    {
      function tin(c){
        c.on('pointerover',function(pointer){
          c.setTint(0x00ff00);
        });
        c.on('pointerout',function(pointer){
          c.clearTint();
        });
      }
      function down(th, c){
        c.on('pointerdown',function(pointer){
          console.log(c["_text"]);
          wr(th, c["_text"]);
        });
      }
      function wr(th, st){
        if(st == 'DELETE'){
          if(wri.length > 0){
            wri = wri.slice(0, -1);
            text.setText('ID: ' + wri);
          }
        }
        else{
          wri += st;
          text.setText('ID: ' + wri);
        }
        if(wri.length == 8){
          th.scene.start('p1');
        }
      }
      var back1 = this.add.image(512, 320, 'back1');
      var bac = this.add.bitmapText(10, 10, 'topaz', 'Back', 48);
      bac.on('pointerdown',function(pointer){
        window.location.href = "game.html";
      });
      wri = '';
      var fonts = 100;
      var fonty1 = 250;
      var fonty2 = 350;
      var fonty3 = 450;
      var fonty4 = 550
      var fontx1 = 25;
      var fontx2 = 150;
      var fontx3 = 275;
      var fontx4 = 400;
      var fontx5 = 525;
      var fontx6 = 650;
      var fontx7 = 775;
      var fontx8 = 900;
      text = this.add.bitmapText(50, 100, 'topaz', 'ID: ', fonts).setInteractive({ useHandCursor: true  } );
      var a = this.add.bitmapText(fontx1, fonty1, 'topaz', 'A', fonts).setInteractive({ useHandCursor: true  } );
      tin(a);
      down(this, a);
      var b = this.add.bitmapText(fontx2, fonty1, 'topaz', 'B', fonts).setInteractive({ useHandCursor: true  } );
      tin(b);
      down(this, b);
      var c = this.add.bitmapText(fontx3, fonty1, 'topaz', 'C', fonts).setInteractive({ useHandCursor: true  } );
      tin(c);
      down(this, c);
      var d = this.add.bitmapText(fontx4, fonty1, 'topaz', 'D', fonts).setInteractive({ useHandCursor: true  } );
      tin(d);
      down(this, d);
      var e = this.add.bitmapText(fontx5, fonty1, 'topaz', 'E', fonts).setInteractive({ useHandCursor: true  } );
      tin(e);
      down(this, e);
      var f = this.add.bitmapText(fontx6, fonty1, 'topaz', 'F', fonts).setInteractive({ useHandCursor: true  } );
      tin(f);
      down(this, f);
      var g = this.add.bitmapText(fontx7, fonty1, 'topaz', 'G', fonts).setInteractive({ useHandCursor: true  } );
      tin(g);
      down(this, g);
      var h = this.add.bitmapText(fontx8, fonty1, 'topaz', 'H', fonts).setInteractive({ useHandCursor: true  } );
      tin(h);
      down(this, h);
      var i = this.add.bitmapText(fontx1, fonty2, 'topaz', 'I', fonts).setInteractive({ useHandCursor: true  } );
      tin(i);
      down(this, i);
      var j = this.add.bitmapText(fontx2, fonty2, 'topaz', 'J', fonts).setInteractive({ useHandCursor: true  } );
      tin(j);
      down(this, j);
      var k = this.add.bitmapText(fontx3, fonty2, 'topaz', 'K', fonts).setInteractive({ useHandCursor: true  } );
      tin(k);
      down(this, k);
      var l = this.add.bitmapText(fontx4, fonty2, 'topaz', 'L', fonts).setInteractive({ useHandCursor: true  } );
      tin(l);
      down(this, l);
      var m = this.add.bitmapText(fontx5, fonty2, 'topaz', 'M', fonts).setInteractive({ useHandCursor: true  } );
      tin(m);
      down(this, m);
      var n = this.add.bitmapText(fontx6, fonty2, 'topaz', 'N', fonts).setInteractive({ useHandCursor: true  } );
      tin(n);
      down(this, n);
      var o = this.add.bitmapText(fontx7, fonty2, 'topaz', 'O', fonts).setInteractive({ useHandCursor: true  } );
      tin(o);
      down(this, o);
      var p = this.add.bitmapText(fontx8, fonty2, 'topaz', 'P', fonts).setInteractive({ useHandCursor: true  } );
      tin(p);
      down(this, p);
      var q = this.add.bitmapText(fontx1, fonty3, 'topaz', 'Q', fonts).setInteractive({ useHandCursor: true  } );
      tin(q);
      down(this, q);
      var r = this.add.bitmapText(fontx2, fonty3, 'topaz', 'R', fonts).setInteractive({ useHandCursor: true  } );
      tin(r);
      down(this, r);
      var s = this.add.bitmapText(fontx3, fonty3, 'topaz', 'S', fonts).setInteractive({ useHandCursor: true  } );
      tin(s);
      down(this, s);
      var t = this.add.bitmapText(fontx4, fonty3, 'topaz', 'T', fonts).setInteractive({ useHandCursor: true  } );
      tin(t);
      down(this, t);
      var u = this.add.bitmapText(fontx5, fonty3, 'topaz', 'U', fonts).setInteractive({ useHandCursor: true  } );
      tin(u);
      down(this, u);
      var v = this.add.bitmapText(fontx6, fonty3, 'topaz', 'V', fonts).setInteractive({ useHandCursor: true  } );
      tin(v);
      down(this, v);
      var w = this.add.bitmapText(fontx7, fonty3, 'topaz', 'W', fonts).setInteractive({ useHandCursor: true  } );
      tin(w);
      down(this, w);
      var x = this.add.bitmapText(fontx8, fonty3, 'topaz', 'X', fonts).setInteractive({ useHandCursor: true  } );
      tin(x);
      down(this, x);
      var y = this.add.bitmapText(fontx1, fonty4, 'topaz', 'Y', fonts).setInteractive({ useHandCursor: true  } );
      tin(y);
      down(this, y);
      var z = this.add.bitmapText(fontx2, fonty4, 'topaz', 'Z', fonts).setInteractive({ useHandCursor: true  } );
      tin(z);
      down(this, z);
      var ldelete = this.add.bitmapText(fontx3, fonty4, 'topaz', 'DELETE', fonts).setInteractive({ useHandCursor: true  } );
      tin(ldelete);
      down(this, ldelete);
      th = this;
      this.input.keyboard.on('keyup', function (event) {
        if(event.keyCode === 65){
          console.log("A");
          wr(th, "A");
        }
        else if (event.keyCode === 66) {
          console.log("B");
          wr(th, "B");
        }
        else if (event.keyCode === 67) {
          console.log("C");
          wr(th, "C");
        }
        else if (event.keyCode === 68) {
          console.log("D");
          wr(th, "D");
        }
        else if (event.keyCode === 69) {
          console.log("E");
          wr(th, "E");
        }
        else if (event.keyCode === 70) {
          console.log("F");
          wr(th, "F");
        }
        else if (event.keyCode === 71) {
          console.log("G");
          wr(th, "G");
        }
        else if (event.keyCode === 72) {
          console.log("H");
          wr(this, "H");
        }
        else if (event.keyCode === 73) {
          console.log("I");
          wr(th, "I");
        }
        else if (event.keyCode === 74) {
          console.log("J");
          wr(th, "J");
        }
        else if (event.keyCode === 75) {
          console.log("K");
          wr(th, "K");
        }
        else if (event.keyCode === 76) {
          console.log("L");
          wr(th, "L");
        }
        else if (event.keyCode === 77) {
          console.log("M");
          wr(th, "M");
        }
        else if (event.keyCode === 78) {
          console.log("N");
          wr(th, "N");
        }
        else if (event.keyCode === 79) {
          console.log("O");
          wr(th, "O");
        }
        else if (event.keyCode === 80) {
          console.log("P");
          wr(th, "P");
        }
        else if (event.keyCode === 81) {
          console.log("Q");
          wr(th, "Q");
        }
        else if (event.keyCode === 82) {
          console.log("R");
          wr(th, "R");
        }
        else if (event.keyCode === 83) {
          console.log("S");
          wr(th, "S");
        }
        else if (event.keyCode === 84) {
          console.log("T");
          wr(th, "T");
        }
        else if (event.keyCode === 85) {
          console.log("U");
          wr(th, "U");
        }
        else if (event.keyCode === 86) {
          console.log("V");
          wr(th, "V");
        }
        else if (event.keyCode === 87) {
          console.log("W");
          wr(th, "W");
        }
        else if (event.keyCode === 88) {
          console.log("X");
          wr(th, "X");
        }
        else if (event.keyCode === 89) {
          console.log("Y");
          wr(th, "Y");
        }
        else if (event.keyCode === 90) {
          console.log("Z");
          wr(th, "Z");
        }
        else if (event.keyCode === 8) {
          console.log("DELETE");
          wr(th, "DELETE");
        }
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
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB", "EMP", "P1S", "P1C", "P2S", "P2C"];
        this.load.bitmapFont('topaz', 'assets/fonts/lato.png', 'assets/fonts/lato.xml');
        this.load.image('back', 'assets/backgrounds/star1.jpg');
        this.load.image('cb', 'assets/cards/back.png');
        this.load.image('COM', 'assets/cards/COM.png');
        this.load.image('COM2', 'assets/cards/COM2.png');
        this.load.image('ENGINES', 'assets/cards/ENGINES.png');
        this.load.image('ENGINES2', 'assets/cards/ENGINES2.png');
        this.load.image('PORT', 'assets/cards/PORT.png');
        this.load.image('PORT2', 'assets/cards/PORT2.png');
        this.load.image('Guns', 'assets/cards/Guns.png');
        this.load.image('COMbig', 'assets/out/COM.png');
        this.load.image('COM2big', 'assets/out/COM2.png');
        this.load.image('ENGINESbig', 'assets/out/ENGINES.png');
        this.load.image('ENGINES2big', 'assets/out/ENGINES2.png');
        this.load.image('PORTbig', 'assets/out/PORT.png');
        this.load.image('PORT2big', 'assets/out/PORT2.png');
        this.load.image('Gunsbig', 'assets/out/Guns.png');
        this.load.image('END', 'assets/text/end.png');
        this.load.image('SCORE', 'assets/text/SCORE2.png');
        this.load.image('musicOff', 'assets/icons/sound-off.png');
        this.load.image('musicOn', 'assets/icons/sound-on.png');
        this.load.image('full', 'assets/icons/expand.png');
        this.load.image('shock', 'assets/icons/surprised-skull.png');
        this.load.image('happy', 'assets/icons/pirate-skull.png');
        this.load.image('anger', 'assets/icons/blade-bite.png');
        this.load.video('rules', 'assets/Video/walkthrough.mp4', 'loadeddata', false, false);
        var i;
        for (i = 0; i < cards.length; i++) {
          this.load.image(cards[i], 'assets/cards/' + cards[i] + '.png');
        }
        var i;
        for (i = 0; i < cards.length; i++) {
          var zzz = cards[i] + 'big';
          this.load.image(zzz, 'assets/out/' + cards[i] + '.png');
        }
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
        for (i = 0; i < cards.length; i++) {
          this.load.audio(cards[i], [
          "assets/Audio/cards/" + cards[i] + ".mp3"
          ]);
        }
    },
    create: function ()
    {
      this.socket = io('https://on.piratesport.net');
      /*setTimeout(() => {
        if(aww == "Yes"){
          this.socket.emit('timed');
          this.game.sound.stopAll();
          window.location.href = "vscomph.html";
        }
      }, 30000);*/
      this.socket.emit('guest', wri);
      this.socket.on('bad', function () {
        th.scene.start('guest');
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
      this.socket.on('end', function (type) {
        if(type == 'win'){
          window.location.href = "win.html";
        }
        else{
          window.location.href = "lose.html";
        }
      });
      this.socket.on('next', function (cards, p, health, mis) {
        console.log('step4');
        console.log(cards);
        healthText.setText('Health: ' + health);
        playerText.setText('Player: ' + player);
        if(player == 1){
          mis1 = mis;
        }
        else{
          mis2 = mis;
        }
        start(th, cards, p);
      });
      this.socket.on('dis', function (dis) {
        serv.setText('Other Player Left');
        window.location.reload(false);
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
          pl = 1;
          shuffle(cards);
          shuffle(p);
          th.socket.emit("cards", cards, health);
          th.socket.emit("p", p);
          healthText.setText('Health: ' + health);
          start(th, cards, p);
        }
        else{
          pl = 2;
          th.socket.on('cards', function (si3, heal) {
            cards = si3;
            th.socket.on('p', function (si4) {
              p = si4;
              healthText.setText('Health:' + heal);
              start(th, cards, p);
            });
          });
        }
        th.socket.on('tend', function (cardss, diss) {
          console.log('tend2');
          console.log(cardss);
          player = pl;
          if(player == 1){
            game = game1;
            p = player1;
            pdis = pdis1;
            health = health1;
          }
          else{
            game = game2;
            p = player2;
            pdis = pdis2
            health = health2;
          }
          game = game2;
          dis = diss;
          cards = cardss;
          console.log('step2');
          console.log(cards);
          hand = 4;
          if(player == pl){
            if(typeof cc != 'undefined'){
              cc.destroy();
            }
            if(typeof ce != 'undefined'){
              ce.destroy();
            }
            if(typeof cp != 'undefined'){
              cp.destroy();
            }
      if(player == 1){
        if(mis1[0] == 'yes'){
          cc = th.add.image(250, 250, "COM").setInteractive({ useHandCursor: true  } );
          hove(cc, th, "COM" + 'big');
          select(cc, th, "COM");
        }
        if(mis1[1] == 'yes'){
          ce = th.add.image(375, 250, "ENGINES").setInteractive({ useHandCursor: true  } );
          hove(ce, th, "ENGINES" + 'big');
          select(ce, th, "ENGINES");
        }
          por = "PORT";
        if(mis1[2] == 'yes'){
          cp = th.add.image(500, 250, "PORT").setInteractive({ useHandCursor: true  } );
          hove(cp, th, "PORT" + 'big');
          select(cp, th, "PORT");
        }
        }
        else{
          if(mis2[0] == 'yes'){
            cc = th.add.image(250, 250, "COM").setInteractive({ useHandCursor: true  } );
            hove(cc, th, "COM" + 'big');
            select(cc, th, "COM");
          }
          if(mis2[1] == 'yes'){
            ce = th.add.image(375, 250, "ENGINES").setInteractive({ useHandCursor: true  } );
            hove(ce, th, "ENGINES" + 'big');
            select(ce, th, "ENGINES");
          }
            por = "PORT";
          if(mis2[2] == 'yes'){
            cp = th.add.image(500, 250, "PORT").setInteractive({ useHandCursor: true  } );
            hove(cp, th, "PORT" + 'big');
            select(cp, th, "PORT");
          }
        }
          healthText.setText('Health: ' + health);
          playerText.setText('Player: ' + player);
          c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
          hove(c5, th, cards[5] + 'big');
          select(c5, th, cards[5]);
          c4 = th.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
          hove(c4, th, cards[4] + 'big');
          select(c4, th, cards[4]);
          c3 = th.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
          hove(c3, th, cards[3] + 'big');
          select(c3, th, cards[3]);
          c2 = th.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
          hove(c2, th, cards[2] + 'big');
          select(c2, th, cards[2]);
          c1 = th.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
          hove(c1, th, cards[1] + 'big');
          select(c1, th, cards[1]);
          c0 = th.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
          hove(c0, th, cards[0] + 'big');
          select(c0, th, cards[0]);
          var z = hand - 1;
          if (typeof p[z] == 'undefined') {
            shuffle(pdis);
            p = p.concat(pdis);
            pdis = [];
          }
          function draw(start, num){
            var y = 0;
            for (var i = start; i < num; i++) {
              if(typeof p[i] == "undefined"){
                shuffle(pdis);
                p = p.concat(pdis);
                pdis = [];
              }
              if(p[i] == "Browser" || p[i] == "Driver" || p[i] == "CloudStorage" || p[i] == "IMDS" || p[i] == "User" || p[i] == "FakeInstaller" || p[i] == "OfficeMacro" || p[i] == "Sysmon" || p[i] == "DPAT" || p[i] == "Endpoint" || p[i] == "Sinkhole" || p[i] == "IAM" || p[i] == "MFAB"){
                hand += 1;
                y += 1;
              }
            }
            if(y > 0){
              draw(num, hand);
            }
          }
          draw(0,4);
          z = hand - 1;
          if (typeof p[z] == 'undefined') {
            shuffle(pdis);
            p = p.concat(pdis);
            pdis = [];
          }
          if (typeof p0 !== 'undefined') {
            p0.destroy();
          }
          if (typeof p1 !== 'undefined') {
            p1.destroy();
          }
          if (typeof p2 !== 'undefined') {
            p2.destroy();
          }
          if (typeof p3 !== 'undefined') {
            p3.destroy();
          }
          if (typeof p4 !== 'undefined') {
            p4.destroy();
          }
          if (typeof p5 !== 'undefined') {
            p5.destroy();
          }
          if (typeof p6 !== 'undefined') {
            p6.destroy();
          }
          if (typeof p7 !== 'undefined') {
            p7.destroy();
          }
          if (typeof p7 !== 'undefined') {
            p7.destroy();
          }
          if (typeof p8 !== 'undefined') {
            p8.destroy();
          }
          if (typeof p9 !== 'undefined') {
            p9.destroy();
          }
          if (typeof p10 !== 'undefined') {
            p10.destroy();
          }
          if (typeof p11 !== 'undefined') {
            p11.destroy();
          }
          if (typeof p12 !== 'undefined') {
            p12.destroy();
          }
          if (typeof p13 !== 'undefined') {
            p13.destroy();
          }
          if (typeof p14 !== 'undefined') {
            p14.destroy();
          }
          if (typeof p15 !== 'undefined') {
            p15.destroy();
          }
          if (typeof p16 !== 'undefined') {
            p16.destroy();
          }
          if(hand > 15 && typeof p[15] != 'undefined'){
            p15 = th.add.image(63, 550, p[15]).setInteractive({ useHandCursor: true  } );
            hove(p15, th, p[15] + 'big');
            bselect(p15, th, p[15]);
          }
          if(hand > 7 && typeof p[7] != 'undefined'){
            p7 = th.add.image(125, 550, p[7]).setInteractive({ useHandCursor: true  } );
            hove(p7, th, p[7] + 'big');
            bselect(p7, th, p[7]);
          }
          if(hand > 8 && typeof p[8] != 'undefined'){
            p8 = th.add.image(187, 550, p[8]).setInteractive({ useHandCursor: true  } );
            hove(p8, th, p[8] + 'big');
            bselect(p8, th, p[8]);
          }
          if(hand > 0 && typeof p[0] != 'undefined'){
            p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
            hove(p0, th, p[0] + 'big');
            bselect(p0, th, p[0]);
          }
          if(hand > 9 && typeof p[9] != 'undefined'){
            p9 = th.add.image(312, 550, p[9]).setInteractive({ useHandCursor: true  } );
            hove(p9, th, p[9] + 'big');
            bselect(p9, th, p[9]);
          }
          if(hand > 1 && typeof p[1] != 'undefined'){
            p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
            hove(p1, th, p[1] + 'big');
            bselect(p1, th, p[1]);
          }
          if(hand > 10 && typeof p[10] != 'undefined'){
            p10 = th.add.image(437, 550, p[10]).setInteractive({ useHandCursor: true  } );
            hove(p10, th, p[10] + 'big');
            bselect(p10, th, p[10]);
          }
          if(hand > 2 && typeof p[2] != 'undefined'){
            p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
            hove(p2, th, p[2] + 'big');
            bselect(p2, th, p[2]);
          }
          if(hand > 11 && typeof p[11] != 'undefined'){
            p11 = th.add.image(562, 550, p[11]).setInteractive({ useHandCursor: true  } );
            hove(p11, th, p[11] + 'big');
            bselect(p11, th, p[11]);
          }
          if(hand > 3 && typeof p[3] != 'undefined'){
            p3 = th.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
            hove(p3, th, p[3] + 'big');
            bselect(p3, th, p[3]);
          }
          if(hand > 12 && typeof p[12] != 'undefined'){
            p12 = th.add.image(687, 550, p[12]).setInteractive({ useHandCursor: true  } );
            hove(p12, th, p[12] + 'big');
            bselect(p12, th, p[12]);
          }
          if(hand > 4 && typeof p[4] != 'undefined'){
            p4 = th.add.image(750, 550, p[4]).setInteractive({ useHandCursor: true  } );
            hove(p4, th, p[4] + 'big');
            bselect(p4, th, p[4]);
          }
          if(hand > 13 && typeof p[13] != 'undefined'){
            p13 = th.add.image(812, 550, p[13]).setInteractive({ useHandCursor: true  } );
            hove(p13, th, p[13] + 'big');
            bselect(p13, th, p[13]);
          }
          if(hand > 16 && typeof p[16] != 'undefined'){
            p16 = th.add.image(850, 550, p[16]).setInteractive({ useHandCursor: true  } );
            hove(p16, th, p[16] + 'big');
            bselect(p16, th, p[16]);
          }
          if(hand > 5 && typeof p[5] != 'undefined'){
            p5 = th.add.image(875, 550, p[5]).setInteractive({ useHandCursor: true  } );
            hove(p5, th, p[5] + 'big');
            bselect(p5, th, p[5]);
          }
          if(hand > 14 && typeof p[14] != 'undefined'){
            p14 = th.add.image(937, 550, p[14]).setInteractive({ useHandCursor: true  } );
            hove(p14, th, p[14] + 'big');
            bselect(p14, th, p[14]);
          }
          if(hand > 6 && typeof p[6] != 'undefined'){
            p6 = th.add.image(1000, 550, p[6]).setInteractive({ useHandCursor: true  } );
            hove(p6, th, p[6] + 'big');
            bselect(p6, th, p[6]);
          }
          console.log('step3');
          console.log(cards);
          if(player == 1){
            th.socket.emit('next', cards, p, health, mis1);
          }
          else{
            th.socket.emit('next', cards, p, health, mis2);
          }
        }
        });
        th.socket.on('aq', function (cards, p, mis, l) {
          if (typeof big != "undefined" && big != null) {
            big.destroy();
            big = null;
          }
          if(mis[0] != "yes"){
            cc.destroy();
          }
          if(mis[1] != "yes"){
            ce.destroy();
          }
          if(mis[2] != "yes"){
            cp.destroy();
          }
          c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
          hove(c5, th, cards[5] + 'big');
          select(c5, th, cards[5]);
          c4 = th.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
          hove(c4, th, cards[4] + 'big');
          select(c4, th, cards[4]);
          c3 = th.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
          hove(c3, th, cards[3] + 'big');
          select(c3, th, cards[3]);
          c2 = th.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
          hove(c2, th, cards[2] + 'big');
          select(c2, th, cards[2]);
          c1 = th.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
          hove(c1, th, cards[1] + 'big');
          select(c1, th, cards[1]);
          c0 = th.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
          hove(c0, th, cards[0] + 'big');
          select(c0, th, cards[0]);
          if (typeof p0 !== 'undefined') {
            p0.destroy();
          }
          if (typeof p1 !== 'undefined') {
            p1.destroy();
          }
          if (typeof p2 !== 'undefined') {
            p2.destroy();
          }
          if (typeof p3 !== 'undefined') {
            p3.destroy();
          }
          if (typeof p4 !== 'undefined') {
            p4.destroy();
          }
          if (typeof p5 !== 'undefined') {
            p5.destroy();
          }
          if (typeof p6 !== 'undefined') {
            p6.destroy();
          }
          if (typeof p7 !== 'undefined') {
            p7.destroy();
          }
          if (typeof p7 !== 'undefined') {
            p7.destroy();
          }
          if (typeof p8 !== 'undefined') {
            p8.destroy();
          }
          if (typeof p9 !== 'undefined') {
            p9.destroy();
          }
          if (typeof p10 !== 'undefined') {
            p10.destroy();
          }
          if (typeof p11 !== 'undefined') {
            p11.destroy();
          }
          if (typeof p12 !== 'undefined') {
            p12.destroy();
          }
          if (typeof p13 !== 'undefined') {
            p13.destroy();
          }
          if (typeof p14 !== 'undefined') {
            p14.destroy();
          }
          if (typeof p15 !== 'undefined') {
            p15.destroy();
          }
          if (typeof p16 !== 'undefined') {
            p16.destroy();
          }
      if(l > 15){
        p15 = th.add.image(63, 550, p[15]).setInteractive({ useHandCursor: true  } );
        hove(p15, th, p[15] + 'big');
        bselect(p15, th, p[15] + 'big');
      }
      if(l > 7){
        p7 = th.add.image(125, 550, p[7]).setInteractive({ useHandCursor: true  } );
        hove(p7, th, p[7] + 'big');
        bselect(p7, th, p[7]);
      }
      if(l > 8){
        p8 = th.add.image(187, 550, p[8]).setInteractive({ useHandCursor: true  } );
        hove(p8, th, p[8] + 'big');
        bselect(p8, th, p[8]);
      }
      if(l > 0){
        p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
        hove(p0, th, p[0] + 'big');
        bselect(p0, th, p[0]);
      }
      if(l > 9){
        p9 = th.add.image(312, 550, p[9]).setInteractive({ useHandCursor: true  } );
        hove(p9, th, p[9] + 'big');
        bselect(p9, th, p[9]);
      }
      if(l > 1){
        p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
        hove(p1, th, p[1] + 'big');
        bselect(p1, th, p[1]);
      }
      if(l > 10){
        p10 = th.add.image(437, 550, p[10]).setInteractive({ useHandCursor: true  } );
        hove(p10, th, p[10] + 'big');
        bselect(p10, th, p[10]);
      }
      if(l > 2){
        p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
        hove(p2, th, p[2] + 'big');
        bselect(p2, th, p[2]);
      }
      if(l > 11){
        p11 = th.add.image(562, 550, p[11]).setInteractive({ useHandCursor: true  } );
        hove(p11, th, p[11] + 'big');
        bselect(p11, th, p[11]);
      }
      if(l > 3){
        p3 = th.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
        hove(p3, th, p[3] + 'big');
        bselect(p3, th, p[3]);
      }
      if(l > 12){
        p12 = th.add.image(687, 550, p[12]).setInteractive({ useHandCursor: true  } );
        hove(p12, th, p[12] + 'big');
        bselect(p12, th, p[12]);
      }
      if(l > 4){
        p4 = th.add.image(750, 550, p[4]).setInteractive({ useHandCursor: true  } );
        hove(p4, th, p[4] + 'big');
        bselect(p4, th, p[4]);
      }
      if(l > 13){
        p13 = th.add.image(812, 550, p[13]).setInteractive({ useHandCursor: true  } );
        hove(p13, th, p[13] + 'big');
        bselect(p13, th, p[13]);
      }
      if(l > 16){
        p16 = th.add.image(850, 550, p[16]).setInteractive({ useHandCursor: true  } );
        hove(p16, th, p[16] + 'big');
        bselect(p16, th, p[16]);
      }
      if(l > 5){
        p5 = th.add.image(875, 550, p[5]).setInteractive({ useHandCursor: true  } );
        hove(p5, th, p[5] + 'big');
        bselect(p5, th, p[5]);
      }
      if(l > 14){
        p14 = th.add.image(937, 550, p[14]).setInteractive({ useHandCursor: true  } );
        hove(p14, th, p[14] + 'big');
        bselect(p14, th, p[14]);
      }
      if(l > 6){
        p6 = th.add.image(1000, 550, p[6]).setInteractive({ useHandCursor: true  } );
        hove(p6, th, p[6] + 'big');
        bselect(p6, th, p[6]);
      }
        });
        th.socket.on('bsel', function (si6) {
          if(typeof p0 !== 'undefined' && p0['x'] == si6){
            p0.setTint(0x00ff00);
          }
          else if(typeof p1 !== 'undefined' && p1['x'] == si6){
            p1.setTint(0x00ff00);
          }
          else if(typeof p2 !== 'undefined' && p2['x'] == si6){
            p2.setTint(0x00ff00);
          }
          else if(typeof p3 !== 'undefined' && p3['x'] == si6){
              p3.setTint(0x00ff00);
          }
          else if(typeof p4 !== 'undefined' && p4['x'] == si6){
            p4.setTint(0x00ff00);
          }
          else if(typeof p5 !== 'undefined' && p5['x'] == si6){
            p5.setTint(0x00ff00);
          }
          else if(typeof p6 !== 'undefined' && p6['x'] == si6){
            p6.setTint(0x00ff00);
          }
          else if(typeof p7 !== 'undefined' && p7['x'] == si6){
            p7.setTint(0x00ff00);
          }
          else if(typeof p8 !== 'undefined' && p8['x'] == si6){
            p8.setTint(0x00ff00);
          }
          else if(typeof p9 !== 'undefined' && p9['x'] == si6){
            p9.setTint(0x00ff00);
          }
          else if(typeof p10 !== 'undefined' && p10['x'] == si6){
            p10.setTint(0x00ff00);
          }
          else if(typeof p11 !== 'undefined' && p11['x'] == si6){
            p11.setTint(0x00ff00);
          }
          else if(typeof p12 !== 'undefined' && p12['x'] == si6){
            p12.setTint(0x00ff00);
          }
          else if(typeof p13 !== 'undefined' && p13['x'] == si6){
            p13.setTint(0x00ff00);
          }
          else if(typeof p14 !== 'undefined' && p14['x'] == si6){
            p14.setTint(0x00ff00);
          }
          else if(typeof p15 !== 'undefined' && p15['x'] == si6){
            p15.setTint(0x00ff00);
          }
          else if(typeof p16 !== 'undefined' && p16['x'] == si6){
            p16.setTint(0x00ff00);
          }
        });
        th.socket.on('sel', function (si5) {
          if(reds == si5){
            if (typeof c !== 'undefined') {
            c.clearTint();
          }
            reds = "";
            red = "no";
          }
          else if(si5 != "EMP"){
            red = "yes";
            reds = si5;
            if (typeof cc !== 'undefined') {
              cc.clearTint();
            }
            if (typeof ce !== 'undefined') {
              ce.clearTint();
            }
            if (typeof cp !== 'undefined') {
              cp.clearTint();
            }
            if (typeof cg !== 'undefined') {
              cg.clearTint();
            }
            if (typeof c0 !== 'undefined') {
              c0.clearTint();
            }
            if (typeof c1 !== 'undefined') {
              c1.clearTint();
            }
            if (typeof c2 !== 'undefined') {
              c2.clearTint();
            }
            if (typeof c3 !== 'undefined') {
              c3.clearTint();
            }
            if (typeof c4 !== 'undefined') {
              c4.clearTint();
            }
            if (typeof c5 !== 'undefined') {
              c5.clearTint();
            }
            if (typeof p0 !== 'undefined') {
              p0.clearTint();
            }
            if (typeof p1 !== 'undefined') {
              p1.clearTint();
            }
            if (typeof p2 !== 'undefined') {
              p2.clearTint();
            }
            if (typeof p3 !== 'undefined') {
              p3.clearTint();
            }
            if (typeof p4 !== 'undefined') {
              p4.clearTint();
            }
            if (typeof p5 !== 'undefined') {
              p5.clearTint();
            }
            if (typeof p6 !== 'undefined') {
              p6.clearTint();
            }
            if (typeof p7 !== 'undefined') {
              p7.clearTint();
            }
            if (typeof p8 !== 'undefined') {
              p8.clearTint();
            }
            if (typeof p9 !== 'undefined') {
              p9.clearTint();
            }
            if (typeof p10 !== 'undefined') {
              p10.clearTint();
            }
            if (typeof p11 !== 'undefined') {
              p11.clearTint();
            }
            if (typeof p12 !== 'undefined') {
              p12.clearTint();
            }
            if (typeof p13 !== 'undefined') {
              p13.clearTint();
            }
            if (typeof p14 !== 'undefined') {
              p14.clearTint();
            }
            if (typeof p15 !== 'undefined') {
              p15.clearTint();
            }
            if (typeof p16 !== 'undefined') {
              p16.clearTint();
            }
            if(cc["texture"]["key"] == si5){
              cc.setTint(0xff0000);
            }
            else if(ce["texture"]["key"] == si5){
              ce.setTint(0xff0000);
            }
            else if(cp["texture"]["key"] == si5){
              cp.setTint(0xff0000);
            }
            else if(c0["texture"]["key"] == si5){
              c0.setTint(0xff0000);
            }
            else if(c1["texture"]["key"] == si5){
              c1.setTint(0xff0000);
            }
            else if(c2["texture"]["key"] == si5){
              c2.setTint(0xff0000);
            }
            else if(c3["texture"]["key"] == si5){
              c3.setTint(0xff0000);
            }
            else if(c4["texture"]["key"] == si5){
              c4.setTint(0xff0000);
            }
            else if(c5["texture"]["key"] == si5){
              c5.setTint(0xff0000);
            }
          }
        });
      });
      function bselect(c, th, im){
        if(player == pl){
          c.on('pointerdown',function(pointer){
            var aquire = "no";
            th.sound.add('click').play();
            if(red == "yes"){
              th.socket.emit('bsel', c['x']);
              if(c.tintTopLeft !== 0x00ff00){
                c.setTint(0x00ff00);
                if(c["texture"]["key"] == "P1C"){
                  coin += 1;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "P1S") {
                  skill += 1;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if(c["texture"]["key"] == "P2C"){
                  coin += 1;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "P2S") {
                  skill += 1;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Browser") {
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Malware") {
                  skill += 5;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "PrivilegeEsc") {
                  skill += 5;
                  scard += 1;
                  coin += 6;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Driver") {
                  skill += 1;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Service") {
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "CloudStorage") {
                  skill += 2;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "IMDS") {
                  skill += 6;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "MFA") {
                  coin += 5;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "User") {
                  skill += 1;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "CloudAccount") {
                  coin += 5;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "CredStuffing") {
                  coin += 3;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Kubelet") {
                  coin += 1;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "WateringHole") {
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "WebShell") {
                  coin += 2;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "FakeInstaller") {
                  skill += 3;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "OfficeMacro") {
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "ShadowCopy") {
                  coin += 4;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Sysmon") {
                  skill += 2;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Behavior") {
                  skill += 4;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "DPAT") {
                  coin += 1;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Endpoint") {
                  coin += 2;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "SIEM") {
                  skill += 2;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "Sinkhole") {
                  skill += 1;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "ZeroTrust") {
                  skill += 5;
                  scard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "IAM") {
                  coin += 2;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "SRUM") {
                  coin += 2;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
                else if (c["texture"]["key"] == "MFAB") {
                  coin += 6;
                  ccard += 1;
                  card += 1;
                  temp.push(c["texture"]["key"]);
                }
              }
              else{
                c.clearTint();
                if(c["texture"]["key"] == "P1C"){
                  coin -= 1;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "P1S") {
                  skill -= 1;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if(c["texture"]["key"] == "P2C"){
                  coin -= 1;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "P2S") {
                  skill -= 1;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Browser") {
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Malware") {
                  skill -= 5;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "PrivilegeEsc") {
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Driver") {
                  skill -= 1;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Service") {
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "CloudStorage") {
                  skill -= 2;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "IMDS") {
                  skill -= 6;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "MFA") {
                  coin -= 5;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "User") {
                  skill -= 1;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "CloudAccount") {
                  coin -= 5;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "CredStuffing") {
                  coin -= 3;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Kubelet") {
                  coin -= 1;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "WateringHole") {
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "WebShell") {
                  coin -= 2;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "FakeInstaller") {
                  skill -= 3;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "OfficeMacro") {
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "ShadowCopy") {
                  coin -= 4;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Sysmon") {
                  skill -= 2;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Behavior") {
                  skill -= 4;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "DPAT") {
                  coin -= 1;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Endpoint") {
                  coin -= 2;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "SIEM") {
                  skill -= 2;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "Sinkhole") {
                  skill -= 1;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "ZeroTrust") {
                  skill -= 5;
                  scard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "IAM") {
                  coin -= 2;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "SRUM") {
                  coin -= 2;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
                else if (c["texture"]["key"] == "MFAB") {
                  coin -= 6;
                  ccard -= 1;
                  card -= 1;
                  var t = temp.indexOf(c["texture"]["key"]);
                  temp.splice(t, 1);
                }
              }
              skillText.setText('Skill: ' + skill);
              coinText.setText('Coins: ' + coin);
              total = skill + coin;
              totalText.setText('Total: ' + total);
              cardText.setText('Cards: ' + card);
              if(type == "skill"){
                if(skill >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "coin") {
                if(coin >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "total") {
                if(total >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "card") {
                if(card >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "ccard") {
                if(ccard >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "scard") {
                if(scard >= cost){
                  aquire = "yes";
                }
              }
              else if (type == "aq") {
                if(aq >= cost){
                  aquire = "yes";
                }
              }
              if( aquire == "yes"){
                aq += 1;
                if(por == "PORT2"){
                  if(aq > 2){
                    th.sound.add('comp').play();
                    cp.destroy();
                    game += 1;
                    por = "no";
                    if(game > 2){
                      th.sound.add('mwin').play();
                    }
                  }
                }
                if (typeof big != "undefined" && big != null) {
                  big.destroy();
                  big = null;
                }
                if(checkScore == "yes"){
                  th.sound.add('sc').play();
                }
                else{
                  th.sound.add('aq').play();
                }
                if(checkScore == "yes"){
                  cscore += 1;
                  var t = cards.indexOf(temp2);
                  cards.splice(t, 1);
                  cards.filter(val => val);
                  score -= 10;
                  if(cscore > 2){
                    tscore.destroy();
                  }
                  if(temp2 == "Browser"){
                    score += 5;
                  }
                  else if (temp2 == "Malware") {
                    score += 2;
                  }
                  else if (temp2 == "PrivilegeEsc") {
                    score += 2;
                  }
                  else if (temp2 == "Driver") {
                    score += 3;
                  }
                  else if (temp2 == "Service") {
                    score += 4;
                  }
                  else if (temp2 == "CloudStorage") {
                    score += 4;
                  }
                  else if (temp2 == "IMDS") {
                    score += 1;
                  }
                  else if (temp2 == "MFA") {
                    score += 2;
                  }
                  else if (temp2 == "User") {
                    score += 4;
                  }
                  else if (temp2 == "CloudAccount") {
                    score += 2;
                  }
                  else if (temp2 == "CredStuffing") {
                    score += 4;
                  }
                  else if (temp2 == "Kubelet") {
                    score += 5;
                  }
                  else if (temp2 == "WateringHole") {
                    score += 3;
                  }
                  else if (temp2 == "WebShell") {
                    score += 5;
                  }
                  else if (temp2 == "FakeInstaller") {
                    score += 4;
                  }
                  else if (temp2 == "OfficeMacro") {
                    score += 6;
                  }
                  else if (temp2 == "ShadowCopy") {
                    score += 3;
                  }
                  else if (temp2 == "Sysmon") {
                    score += 3;
                  }
                  else if (temp2 == "Behavior") {
                    score += 3;
                  }
                  else if (temp2 == "DPAT") {
                    score += 3;
                  }
                  else if (temp2 == "Endpoint") {
                    score += 4;
                  }
                  else if (temp2 == "SIEM") {
                    score += 5;
                  }
                  else if (temp2 == "Sinkhole") {
                    score += 5;
                  }
                  else if (temp2 == "ZeroTrust") {
                    score += 2;
                  }
                  else if (temp2 == "IAM") {
                    score += 3;
                  }
                  else if (temp2 == "SRUM") {
                    score += 5;
                  }
                  else if (temp2 == "MFAB") {
                    score += 1;
                  }
                  scoreText.setText('Score:' + score);
                }
                  if(temp2 == "COM" || temp2 == "ENGINES" || temp2 == "PORT" || temp2 == "Guns" || temp2 == "COM2" || temp2 == "ENGINES2" || temp2 == "PORT2"){
                  game += 1;
                  if(game > 2){
                      th.sound.add('mwin').play();
                  }
                  if(temp2 == "COM"){
                    th.sound.add('comp').play();
                    //cc.visible = false;
                    cc.destroy();
                    if(player == 1){
                      mis1[0] = "NO";
                    }
                    else{
                      mis2[0] = "NO";
                    }
                  }
                  else if (temp2 == "ENGINES") {
                    th.sound.add('comp').play();
                    //ce.visible = false;
                    ce.destroy();
                    if(player == 1){
                      mis1[1] = "NO";
                    }
                    else{
                      mis2[1] = "NO";
                    }
                  }
                  else if (temp2 == "PORT") {
                    th.sound.add('comp').play();
                    //cp.visible = false;
                    cp.destroy();
                    if(player == 1){
                      mis1[2] = "NO";
                    }
                    else{
                      mis2[2] = "NO";
                    }
                  }
                  else if (temp2 == "Guns") {
                    th.sound.add('comp').play();
                    cg.destroy();
                  }
                  else if (temp2 == "COM2") {
                    th.sound.add('comp').play();
                    cc.destroy();
                  }
                  else if (temp2 == "ENGINES2") {
                    th.sound.add('comp').play();
                    ce.destroy();
                  }
                  else if (temp2 == "PORT2") {
                    th.sound.add('comp').play();
                    cp.destroy();
                  }
                  if(player == 1){
                    if(mis1[0] == "NO" && mis1[1] == "NO" && mis1[2] == "NO"){
                      th.sound.add('mwin').play();
                      th.socket.emit('end', 'lose');
                      window.location.href = "win.html";
                    }
                  }
                  else{
                    if(mis2[0] == "No" && mis2[1] == "No" && mis2[2] == "No"){
                      th.sound.add('mwin').play();
                      th.socket.emit('end', 'lose');
                      window.location.href = "win.html";
                    }
                  }
                  temp2 = "";
                }
                else{
                  var t = cards.indexOf(temp2);
                  cards.splice(t, 1);
                  cards.filter(val => val);
                  if(checkScore != "yes"){
                    pdis.push(temp2);
                  }
                  if (typeof cards[5] !== 'undefined') {
                    c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                    hove(c5, th, cards[5] + 'big');
                    select(c5, th, cards[5]);
                  }
                  else {
                    shuffle(dis);
                    cards = cards.concat(dis);
                    dis = [];
                    c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                    hove(c5, th, cards[5] + 'big');
                    select(c5, th, cards[5]);
                  }
                  c4 = th.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
                  hove(c4, th, cards[4] + 'big');
                  select(c4, th, cards[4]);
                  c3 = th.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
                  hove(c3, th, cards[3] + 'big');
                  select(c3, th, cards[3]);
                  c2 = th.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
                  hove(c2, th, cards[2] + 'big');
                  select(c2, th, cards[2]);
                  c1 = th.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
                  hove(c1, th, cards[1] + 'big');
                  select(c1, th, cards[1]);
                  c0 = th.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
                  hove(c0, th, cards[0] + 'big');
                  select(c0, th, cards[0]);
                }
                  var l = hand - card;
                  hand = l;
                  for (i = 0; i < temp.length; i++) {
                    var t = p.indexOf(temp[i]);
                    p.splice(t, 1);
                    p.filter(val => val);
                    pdis.push(temp[i]);
                  }
                    if (typeof p0 !== 'undefined') {
                      p0.destroy();
                    }
                    if (typeof p1 !== 'undefined') {
                      p1.destroy();
                    }
                    if (typeof p2 !== 'undefined') {
                      p2.destroy();
                    }
                    if (typeof p3 !== 'undefined') {
                      p3.destroy();
                    }
                    if (typeof p4 !== 'undefined') {
                      p4.destroy();
                    }
                    if (typeof p5 !== 'undefined') {
                      p5.destroy();
                    }
                    if (typeof p6 !== 'undefined') {
                      p6.destroy();
                    }
                    if (typeof p7 !== 'undefined') {
                      p7.destroy();
                    }
                    if (typeof p7 !== 'undefined') {
                      p7.destroy();
                    }
                    if (typeof p8 !== 'undefined') {
                      p8.destroy();
                    }
                    if (typeof p9 !== 'undefined') {
                      p9.destroy();
                    }
                    if (typeof p10 !== 'undefined') {
                      p10.destroy();
                    }
                    if (typeof p11 !== 'undefined') {
                      p11.destroy();
                    }
                    if (typeof p12 !== 'undefined') {
                      p12.destroy();
                    }
                    if (typeof p13 !== 'undefined') {
                      p13.destroy();
                    }
                    if (typeof p14 !== 'undefined') {
                      p14.destroy();
                    }
                    if (typeof p15 !== 'undefined') {
                      p15.destroy();
                    }
                    if (typeof p16 !== 'undefined') {
                      p16.destroy();
                    }
                if(l > 15){
                  p15 = th.add.image(63, 550, p[15]).setInteractive({ useHandCursor: true  } );
                  hove(p15, th, p[15] + 'big');
                  bselect(p15, th, p[15] + 'big');
                }
                if(l > 7){
                  p7 = th.add.image(125, 550, p[7]).setInteractive({ useHandCursor: true  } );
                  hove(p7, th, p[7] + 'big');
                  bselect(p7, th, p[7]);
                }
                if(l > 8){
                  p8 = th.add.image(187, 550, p[8]).setInteractive({ useHandCursor: true  } );
                  hove(p8, th, p[8] + 'big');
                  bselect(p8, th, p[8]);
                }
                if(l > 0){
                  p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                  hove(p0, th, p[0] + 'big');
                  bselect(p0, th, p[0]);
                }
                if(l > 9){
                  p9 = th.add.image(312, 550, p[9]).setInteractive({ useHandCursor: true  } );
                  hove(p9, th, p[9] + 'big');
                  bselect(p9, th, p[9]);
                }
                if(l > 1){
                  p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                  hove(p1, th, p[1] + 'big');
                  bselect(p1, th, p[1]);
                }
                if(l > 10){
                  p10 = th.add.image(437, 550, p[10]).setInteractive({ useHandCursor: true  } );
                  hove(p10, th, p[10] + 'big');
                  bselect(p10, th, p[10]);
                }
                if(l > 2){
                  p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
                  hove(p2, th, p[2] + 'big');
                  bselect(p2, th, p[2]);
                }
                if(l > 11){
                  p11 = th.add.image(562, 550, p[11]).setInteractive({ useHandCursor: true  } );
                  hove(p11, th, p[11] + 'big');
                  bselect(p11, th, p[11]);
                }
                if(l > 3){
                  p3 = th.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
                  hove(p3, th, p[3] + 'big');
                  bselect(p3, th, p[3]);
                }
                if(l > 12){
                  p12 = th.add.image(687, 550, p[12]).setInteractive({ useHandCursor: true  } );
                  hove(p12, th, p[12] + 'big');
                  bselect(p12, th, p[12]);
                }
                if(l > 4){
                  p4 = th.add.image(750, 550, p[4]).setInteractive({ useHandCursor: true  } );
                  hove(p4, th, p[4] + 'big');
                  bselect(p4, th, p[4]);
                }
                if(l > 13){
                  p13 = th.add.image(812, 550, p[13]).setInteractive({ useHandCursor: true  } );
                  hove(p13, th, p[13] + 'big');
                  bselect(p13, th, p[13]);
                }
                if(l > 16){
                  p16 = th.add.image(850, 550, p[16]).setInteractive({ useHandCursor: true  } );
                  hove(p16, th, p[16] + 'big');
                  bselect(p16, th, p[16]);
                }
                if(l > 5){
                  p5 = th.add.image(875, 550, p[5]).setInteractive({ useHandCursor: true  } );
                  hove(p5, th, p[5] + 'big');
                  bselect(p5, th, p[5]);
                }
                if(l > 14){
                  p14 = th.add.image(937, 550, p[14]).setInteractive({ useHandCursor: true  } );
                  hove(p14, th, p[14] + 'big');
                  bselect(p14, th, p[14]);
                }
                if(l > 6){
                  p6 = th.add.image(1000, 550, p[6]).setInteractive({ useHandCursor: true  } );
                  hove(p6, th, p[6] + 'big');
                  bselect(p6, th, p[6]);
                }
              coin = 0;
              skill = 0;
              total = 0;
              card = 0;
              ccard = 0;
              scard = 0;
              temp2 = "";
              red = "no";
              checkScore = "no";
              skillText.setText('Skill: ' + skill);
              coinText.setText('Coins: ' + coin);
              totalText.setText('Total: ' + total);
              cardText.setText('Cards: ' + card);
              if(player == 1){
                th.socket.emit('aq', cards, p, mis1, l);
              }
              else{
                th.socket.emit('aq', cards, p, mis2, l);
              }
              }
            }
            else{
              setTimeout(function()
              {
                  th.sound.add(c["texture"]["key"]).play();

              }, 1000);
            }
          });
        }
      }
      var red = "no";
      var reds = "";
      function select(c, th, im){
        if(player == pl){
          c.on('pointerdown',function(pointer){
            th.sound.add('click').play();
            th.socket.emit('sel', c["texture"]["key"]);
            if(reds == c["texture"]["key"]){
              c.clearTint();
              reds = "";
              red = "no";
            }
            else if(c["texture"]["key"] != "EMP"){
              red = "yes";
              reds = c["texture"]["key"];
              if (typeof cc !== 'undefined') {
                cc.clearTint();
              }
              if (typeof ce !== 'undefined') {
                ce.clearTint();
              }
              if (typeof cp !== 'undefined') {
                cp.clearTint();
              }
              if (typeof cg !== 'undefined') {
                cg.clearTint();
              }
              if (typeof c0 !== 'undefined') {
                c0.clearTint();
              }
              if (typeof c1 !== 'undefined') {
                c1.clearTint();
              }
              if (typeof c2 !== 'undefined') {
                c2.clearTint();
              }
              if (typeof c3 !== 'undefined') {
                c3.clearTint();
              }
              if (typeof c4 !== 'undefined') {
                c4.clearTint();
              }
              if (typeof c5 !== 'undefined') {
                c5.clearTint();
              }
              if (typeof p0 !== 'undefined') {
                p0.clearTint();
              }
              if (typeof p1 !== 'undefined') {
                p1.clearTint();
              }
              if (typeof p2 !== 'undefined') {
                p2.clearTint();
              }
              if (typeof p3 !== 'undefined') {
                p3.clearTint();
              }
              if (typeof p4 !== 'undefined') {
                p4.clearTint();
              }
              if (typeof p5 !== 'undefined') {
                p5.clearTint();
              }
              if (typeof p6 !== 'undefined') {
                p6.clearTint();
              }
              if (typeof p7 !== 'undefined') {
                p7.clearTint();
              }
              if (typeof p8 !== 'undefined') {
                p8.clearTint();
              }
              if (typeof p9 !== 'undefined') {
                p9.clearTint();
              }
              if (typeof p10 !== 'undefined') {
                p10.clearTint();
              }
              if (typeof p11 !== 'undefined') {
                p11.clearTint();
              }
              if (typeof p12 !== 'undefined') {
                p12.clearTint();
              }
              if (typeof p13 !== 'undefined') {
                p13.clearTint();
              }
              if (typeof p14 !== 'undefined') {
                p14.clearTint();
              }
              if (typeof p15 !== 'undefined') {
                p15.clearTint();
              }
              if (typeof p16 !== 'undefined') {
                p16.clearTint();
              }
              if(c["texture"]["key"] == "COM" || c["texture"]["key"] == "ENGINES" || c["texture"]["key"] == "PORT" || c["texture"]["key"] == "Guns" || c["texture"]["key"] == "COM2" || c["texture"]["key"] == "ENGINES2" || c["texture"]["key"] == "PORT2"){
                c.setTint(0xff0000);
              }
              else{
                if(checkScore == "yes"){
                  c.setTint(0x0000ff);
                }
                else{
                  c.setTint(0xff0000);
                }
              }
              skill = 0;
              coin = 0;
              total = 0;
              card = 0
              scard = 0;
              ccard = 0;
              temp = [];
              skillText.setText('Skill: ' + skill);
              coinText.setText('Coins: ' + coin);
              totalText.setText('Total: ' + total);
              cardText.setText('Cards: ' + card);
                temp2 = c["texture"]["key"];
              if(c["texture"]["key"] == "IAM"){
                cost = 4;
                type = "coin";
              }
              else if (c["texture"]["key"] == "SRUM") {
                cost = 1;
                type = "skill";
              }
              else if (c["texture"]["key"] == "Browser") {
                cost = 2;
                type = "total";
              }
              else if (c["texture"]["key"] == "Malware") {
                cost = 8;
                type = "total";
              }
              else if (c["texture"]["key"] == "PrivilegeEsc") {
                cost = 10;
                type = "total";
              }
              else if (c["texture"]["key"] == "Driver") {
                cost = 4;
                type = "total";
              }
              else if (c["texture"]["key"] == "Service") {
                cost = 5;
                type = "total";
              }
              else if (c["texture"]["key"] == "CloudStorage") {
                cost = 3;
                type = "total";
              }
              else if (c["texture"]["key"] == "IMDS") {
                cost = 10;
                type = "total";
              }
              else if (c["texture"]["key"] == "MFA") {
                cost = 6;
                type = "coin";
              }
              else if (c["texture"]["key"] == "User") {
                cost = 4;
                type = "total";
              }
              else if (c["texture"]["key"] == "CloudAccount") {
                cost = 8;
                type = "total";
              }
              else if (c["texture"]["key"] == "CredStuffing") {
                cost = 4;
                type = "total";
              }
              else if (c["texture"]["key"] == "Kubelet") {
                cost = 2;
                type = "skill";
              }
              else if (c["texture"]["key"] == "WateringHole") {
                cost = 8;
                type = "total";
              }
              else if (c["texture"]["key"] == "WebShell") {
                cost = 1;
                type = "skill";
              }
              else if (c["texture"]["key"] == "FakeInstaller") {
                cost = 4;
                type = "skill";
              }
              else if (c["texture"]["key"] == "OfficeMacro") {
                cost = 1;
                type = "skill";
              }
              else if (c["texture"]["key"] == "ShadowCopy") {
                cost = 5;
                type = "skill";
              }
              else if (c["texture"]["key"] == "Sysmon") {
                cost = 4;
                type = "skill";
              }
              else if (c["texture"]["key"] == "Behavior") {
                cost = 5;
                type = "coin";
              }
              else if (c["texture"]["key"] == "DPAT") {
                cost = 4;
                type = "skill";
              }
              else if (c["texture"]["key"] == "Endpoint") {
                cost = 3;
                type = "coin";
              }
              else if (c["texture"]["key"] == "SIEM") {
                cost = 1;
                type = "coin";
              }
              else if (c["texture"]["key"] == "Sinkhole") {
                cost = 2;
                type = "coin";
              }
              else if (c["texture"]["key"] == "ZeroTrust") {
                cost = 6;
                type = "coin";
              }
              else if (c["texture"]["key"] == "MFAB") {
                cost = 10;
                type = "total";
              }
              else if (c["texture"]["key"] == "COM") {
                cost = 6;
                type = "skill";
              }
              else if (c["texture"]["key"] == "ENGINES") {
                cost = 6;
                type = "coin";
              }
              else if (c["texture"]["key"] == "PORT") {
                cost = 7;
                type = "card";
              }
              else if (c["texture"]["key"] == "Guns") {
                cost = 12;
                type = "total";
              }
              else if (c["texture"]["key"] == "COM2") {
                cost = 5;
                type = "scard";
              }
              else if (c["texture"]["key"] == "ENGINES2") {
                cost = 4;
                type = "ccard";
              }
              else if (c["texture"]["key"] == "PORT2") {
                cost = 3;
                type = "aq";
              }
            }
          });
        }
      }
      function start(th, cards, p){
        console.log('step5');
        console.log(cards);
        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
        hove(c5, th, cards[5] + 'big');
        select(c5, th, cards[5]);
        c4 = th.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
        hove(c4, th, cards[4] + 'big');
        select(c4, th, cards[4]);
        c3 = th.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
        hove(c3, th, cards[3] + 'big');
        select(c3, th, cards[3]);
        c2 = th.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
        hove(c2, th, cards[2] + 'big');
        select(c2, th, cards[2]);
        c1 = th.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
        hove(c1, th, cards[1] + 'big');
        select(c1, th, cards[1]);
        c0 = th.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
        hove(c0, th, cards[0] + 'big');
        select(c0, th, cards[0]);
          if(typeof cc != 'undefined'){
            cc.destroy();
          }
          if(typeof ce != 'undefined'){
            ce.destroy();
          }
          if(typeof cp != 'undefined'){
            cp.destroy();
          }
    if(player == 1){
      if(mis1[0] == 'yes'){
        cc = th.add.image(250, 250, "COM").setInteractive({ useHandCursor: true  } );
        hove(cc, th, "COM" + 'big');
        select(cc, th, "COM");
      }
      if(mis1[1] == 'yes'){
        ce = th.add.image(375, 250, "ENGINES").setInteractive({ useHandCursor: true  } );
        hove(ce, th, "ENGINES" + 'big');
        select(ce, th, "ENGINES");
      }
        por = "PORT";
      if(mis1[2] == 'yes'){
        cp = th.add.image(500, 250, "PORT").setInteractive({ useHandCursor: true  } );
        hove(cp, th, "PORT" + 'big');
        select(cp, th, "PORT");
      }
      }
      else{
        if(mis2[0] == 'yes'){
          cc = th.add.image(250, 250, "COM").setInteractive({ useHandCursor: true  } );
          hove(cc, th, "COM" + 'big');
          select(cc, th, "COM");
        }
        if(mis2[1] == 'yes'){
          ce = th.add.image(375, 250, "ENGINES").setInteractive({ useHandCursor: true  } );
          hove(ce, th, "ENGINES" + 'big');
          select(ce, th, "ENGINES");
        }
          por = "PORT";
        if(mis2[2] == 'yes'){
          cp = th.add.image(500, 250, "PORT").setInteractive({ useHandCursor: true  } );
          hove(cp, th, "PORT" + 'big');
          select(cp, th, "PORT");
        }
      }
        hand = 4;
        var z = hand - 1;
        function draw(start, num){
          var y = 0;
          for (var i = start; i < num; i++) {
            if(p[i] == "Browser" || p[i] == "Driver" || p[i] == "CloudStorage" || p[i] == "IMDS" || p[i] == "User" || p[i] == "FakeInstaller" || p[i] == "OfficeMacro" || p[i] == "Sysmon" || p[i] == "DPAT" || p[i] == "Endpoint" || p[i] == "Sinkhole" || p[i] == "IAM" || p[i] == "MFAB"){
              hand += 1;
              y += 1;
            }
          }
          if(y > 0){
            draw(num, hand);
          }
        }
        draw(0,4);
        z = hand - 1;
        if (typeof p[z] == 'undefined') {
          shuffle(pdis);
          p = p.concat(pdis);
          pdis = [];
        }
        if (typeof p0 !== 'undefined') {
          p0.destroy();
        }
        if (typeof p1 !== 'undefined') {
          p1.destroy();
        }
        if (typeof p2 !== 'undefined') {
          p2.destroy();
        }
        if (typeof p3 !== 'undefined') {
          p3.destroy();
        }
        if (typeof p4 !== 'undefined') {
          p4.destroy();
        }
        if (typeof p5 !== 'undefined') {
          p5.destroy();
        }
        if (typeof p6 !== 'undefined') {
          p6.destroy();
        }
        if (typeof p7 !== 'undefined') {
          p7.destroy();
        }
        if (typeof p7 !== 'undefined') {
          p7.destroy();
        }
        if (typeof p8 !== 'undefined') {
          p8.destroy();
        }
        if (typeof p9 !== 'undefined') {
          p9.destroy();
        }
        if (typeof p10 !== 'undefined') {
          p10.destroy();
        }
        if (typeof p11 !== 'undefined') {
          p11.destroy();
        }
        if (typeof p12 !== 'undefined') {
          p12.destroy();
        }
        if (typeof p13 !== 'undefined') {
          p13.destroy();
        }
        if (typeof p14 !== 'undefined') {
          p14.destroy();
        }
        if (typeof p15 !== 'undefined') {
          p15.destroy();
        }
        if (typeof p16 !== 'undefined') {
          p16.destroy();
        }
        if(hand > 15 && typeof p[15] != 'undefined'){
          p15 = th.add.image(63, 550, p[15]).setInteractive({ useHandCursor: true  } );
          hove(p15, th, p[15] + 'big');
          bselect(p15, th, p[15]);
        }
        if(hand > 7 && typeof p[7] != 'undefined'){
          p7 = th.add.image(125, 550, p[7]).setInteractive({ useHandCursor: true  } );
          hove(p7, th, p[7] + 'big');
          bselect(p7, th, p[7]);
        }
        if(hand > 8 && typeof p[8] != 'undefined'){
          p8 = th.add.image(187, 550, p[8]).setInteractive({ useHandCursor: true  } );
          hove(p8, th, p[8] + 'big');
          bselect(p8, th, p[8]);
        }
        if(hand > 0 && typeof p[0] != 'undefined'){
          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
          hove(p0, th, p[0] + 'big');
          bselect(p0, th, p[0]);
        }
        if(hand > 9 && typeof p[9] != 'undefined'){
          p9 = th.add.image(312, 550, p[9]).setInteractive({ useHandCursor: true  } );
          hove(p9, th, p[9] + 'big');
          bselect(p9, th, p[9]);
        }
        if(hand > 1 && typeof p[1] != 'undefined'){
          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
          hove(p1, th, p[1] + 'big');
          bselect(p1, th, p[1]);
        }
        if(hand > 10 && typeof p[10] != 'undefined'){
          p10 = th.add.image(437, 550, p[10]).setInteractive({ useHandCursor: true  } );
          hove(p10, th, p[10] + 'big');
          bselect(p10, th, p[10]);
        }
        if(hand > 2 && typeof p[2] != 'undefined'){
          p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
          hove(p2, th, p[2] + 'big');
          bselect(p2, th, p[2]);
        }
        if(hand > 11 && typeof p[11] != 'undefined'){
          p11 = th.add.image(562, 550, p[11]).setInteractive({ useHandCursor: true  } );
          hove(p11, th, p[11] + 'big');
          bselect(p11, th, p[11]);
        }
        if(hand > 3 && typeof p[3] != 'undefined'){
          p3 = th.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
          hove(p3, th, p[3] + 'big');
          bselect(p3, th, p[3]);
        }
        if(hand > 12 && typeof p[12] != 'undefined'){
          p12 = th.add.image(687, 550, p[12]).setInteractive({ useHandCursor: true  } );
          hove(p12, th, p[12] + 'big');
          bselect(p12, th, p[12]);
        }
        if(hand > 4 && typeof p[4] != 'undefined'){
          p4 = th.add.image(750, 550, p[4]).setInteractive({ useHandCursor: true  } );
          hove(p4, th, p[4] + 'big');
          bselect(p4, th, p[4]);
        }
        if(hand > 13 && typeof p[13] != 'undefined'){
          p13 = th.add.image(812, 550, p[13]).setInteractive({ useHandCursor: true  } );
          hove(p13, th, p[13] + 'big');
          bselect(p13, th, p[13]);
        }
        if(hand > 16 && typeof p[16] != 'undefined'){
          p16 = th.add.image(850, 550, p[16]).setInteractive({ useHandCursor: true  } );
          hove(p16, th, p[16] + 'big');
          bselect(p16, th, p[16]);
        }
        if(hand > 5 && typeof p[5] != 'undefined'){
          p5 = th.add.image(875, 550, p[5]).setInteractive({ useHandCursor: true  } );
          hove(p5, th, p[5] + 'big');
          bselect(p5, th, p[5]);
        }
        if(hand > 14 && typeof p[14] != 'undefined'){
          p14 = th.add.image(937, 550, p[14]).setInteractive({ useHandCursor: true  } );
          hove(p14, th, p[14] + 'big');
          bselect(p14, th, p[14]);
        }
        if(hand > 6 && typeof p[6] != 'undefined'){
          p6 = th.add.image(1000, 550, p[6]).setInteractive({ useHandCursor: true  } );
          hove(p6, th, p[6] + 'big');
          bselect(p6, th, p[6]);
        }
      }
      // functions //
      function emo(cemo, emo, type){
        cemo.on('pointerdown',function(pointer){
          th.sound.add('click').play();
          cemo.setTint(0x00ff00);
          th.socket.emit('emo', type);
          setTimeout(() => {
              cemo.clearTint();
          }, 3000);
        });
      }
      function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;
          while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
          return array;
          }
      function hove(c, th, im){
        c.on('pointerover',function(pointer){
          big = th.add.image(865, 160, im).setInteractive();
        });
        c.on('pointerout',function(pointer){
          if (typeof big != "undefined") {
            big.destroy();
          }
          big = null;
        });
        back.on('pointerover',function(pointer){
          if (typeof big != "undefined") {
            big.destroy();
          }
          big = null;
        });
      }

      //starting//
      this.game.sound.stopAll();
      var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB", "EMP"];
      var p = ["P1S", "P1S", "P1S", "P1S", "P1C", "P1C"];
      var player1 = ["P1S", "P1S", "P1S", "P1S", "P1C", "P1C"];
      var player2 = ["P2S", "P2S", "P2S", "P2S", "P2C", "P2C"];
      back = this.add.image(512, 320, 'back');
      skill = 0;
      th = this;
      coin = 0;
      total = 0;
      card = 0;
      scard = 0;
      ccard = 0;
      aq = 0;
      cost = 0;
      type = 0;
      health = 40;
      health1 = 40;
      health2 = 40;
      aww = "Yes";
      inn = 1;
      mis1 = ["yes","yes","yes"];
      mis2 = ["yes","yes","yes"];
      temp = [];
      temp2 = "";
      hand = 4;
      pdis = [];
      pdis1 = [];
      pdis2 = [];
      dis = [];
      red = "No";
      game = 0;
      game1 = 0;
      game2 = 0;
      score = 30;
      cscore = 0;
      checkScore = "no";
      player = 1;
      vs = "";
      pl = 1;
      var localStorageName = "piratesPort";
      var localStorageTemp = "piratesPort_temp";
      var localStoragePlayer = "piratesPort_player";
      var highScore;
      var healthText = this.add.bitmapText(250, 30, 'topaz', 'Health: 40', 48);
      //var scoreText = this.add.bitmapText(250, 90, 'topaz', 'Score: 30', 48);
      var serv = this.add.bitmapText(700, 40, 'topaz', 'Awaiting Player', 48);
      var playerText = this.add.bitmapText(700, 90, 'topaz', 'Player: 1', 48);
      var skillText = this.add.bitmapText(15, 65, 'topaz', 'Skill: 0', 32);
      var coinText = this.add.bitmapText(15, 90, 'topaz', 'Coins: 0', 32);
      var totalText = this.add.bitmapText(15, 115, 'topaz', 'Total: 0', 32);
      var cardText = this.add.bitmapText(15, 140, 'topaz', 'Cards: 0', 32);
      var r = this.add.bitmapText(800, 15, 'topaz', 'Rules', 32);
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
        window.location.href = "game.html";
      });
      cb = this.add.image(125, 400, 'cb').setInteractive({ useHandCursor: true  } );
      hove(cb, this, 'cb');
      var tend = this.add.image(90, 200, 'END').setInteractive({ useHandCursor: true  } );
      tend.setScale(1/3);
      tend.on('pointerdown', () => {
        if(pl == player){
        this.sound.add('mend').play();
        var zz = c0["texture"]["key"];
        setTimeout(() => {
            this.sound.add(zz).play();
        }, 2000);
        pdis = pdis.filter(function( element ) {
           return element !== undefined;
        });
        for (i = 1; i < 18; i++) {
          if(hand == i){
            for (x = 0; x < i; x++) {
              pdis.push(p[0]);
              p.shift();
              p.filter(val => val);
            }
          }
        }
        skill = 0;
        coin = 0;
        total = 0;
        card = 0;
        scard = 0;
        ccard = 0;
        cost = 0;
        type = 0;
        temp = [];
        temp2 = "";
        hand = 4;
        red = "No";
        aq = 0;
        if (typeof p0 !== 'undefined') {
          p0.destroy();
        }
        if (typeof p1 !== 'undefined') {
          p1.destroy();
        }
        if (typeof p2 !== 'undefined') {
          p2.destroy();
        }
        if (typeof p3 !== 'undefined') {
          p3.destroy();
        }
        if (typeof p4 !== 'undefined') {
          p4.destroy();
        }
        if (typeof p5 !== 'undefined') {
          p5.destroy();
        }
        if (typeof p6 !== 'undefined') {
          p6.destroy();
        }
        if (typeof p7 !== 'undefined') {
          p7.destroy();
        }
        if (typeof p8 !== 'undefined') {
          p8.destroy();
        }
        if (typeof p9 !== 'undefined') {
          p9.destroy();
        }
        if (typeof p10 !== 'undefined') {
          p10.destroy();
        }
        if (typeof p11 !== 'undefined') {
          p11.destroy();
        }
        if (typeof p12 !== 'undefined') {
          p12.destroy();
        }
        if (typeof p13 !== 'undefined') {
          p13.destroy();
        }
        if (typeof p14 !== 'undefined') {
          p14.destroy();
        }
        if (typeof p15 !== 'undefined') {
          p15.destroy();
        }
        if (typeof p16 !== 'undefined') {
          p16.destroy();
        }
        if (typeof p17 !== 'undefined') {
          p17.destroy();
        }
        skillText.setText('Skill: ' + skill);
        coinText.setText('Coins: ' + coin);
        totalText.setText('Total: ' + total);
        cardText.setText('Cards: ' + card);
        if(c0["texture"]["key"] == "Browser"){
          health -= 5;
        }
        else if (c0["texture"]["key"] == "Malware") {
          health -= 2;
        }
        else if (c0["texture"]["key"] == "PrivilegeEsc") {
          health -= 2;
        }
        else if (c0["texture"]["key"] == "Driver") {
          health -= 3;
        }
        else if (c0["texture"]["key"] == "Service") {
          health -= 4;
        }
        else if (c0["texture"]["key"] == "CloudStorage") {
          health -= 4;
        }
        else if (c0["texture"]["key"] == "IMDS") {
          health -= 1;
        }
        else if (c0["texture"]["key"] == "MFA") {
          health -= 2;
        }
        else if (c0["texture"]["key"] == "User") {
          health -= 4;
        }
        else if (c0["texture"]["key"] == "CloudAccount") {
          health -= 2;
        }
        else if (c0["texture"]["key"] == "CredStuffing") {
          health -= 4;
        }
        else if (c0["texture"]["key"] == "Kubelet") {
          health -= 5;
        }
        else if (c0["texture"]["key"] == "WateringHole") {
          health -= 3;
        }
        else if (c0["texture"]["key"] == "WebShell") {
          health -= 5;
        }
        else if (c0["texture"]["key"] == "FakeInstaller") {
          health -= 4;
        }
        else if (c0["texture"]["key"] == "OfficeMacro") {
          health -= 6;
        }
        else if (c0["texture"]["key"] == "ShadowCopy") {
          health -= 3;
        }
        else if (c0["texture"]["key"] == "Sysmon") {
          health -= 3;
        }
        else if (c0["texture"]["key"] == "Behavior") {
          health -= 3;
        }
        else if (c0["texture"]["key"] == "DPAT") {
          health -= 3;
        }
        else if (c0["texture"]["key"] == "Endpoint") {
          health -= 4;
        }
        else if (c0["texture"]["key"] == "SIEM") {
          health -= 5;
        }
        else if (c0["texture"]["key"] == "Sinkhole") {
          health -= 5;
        }
        else if (c0["texture"]["key"] == "ZeroTrust") {
          health -= 2;
        }
        else if (c0["texture"]["key"] == "EMP") {
          health -= 10;
        }
        else if (c0["texture"]["key"] == "IAM") {
          health -= 3;
        }
        else if (c0["texture"]["key"] == "SRUM") {
          health -= 5;
        }
        else if (c0["texture"]["key"] == "MFAB") {
          health -= 1;
        }
        if(health < 1){
            this.sound.add('mlose').play();
            this.game.sound.stopAll();
            th.socket.emit('end', 'win');
            window.location.href = "lose.html";
        }
        if(player == 1){
          player1 = p;
          p = player2;
          pdis1 = pdis;
          pdis = pdis2;
          health1 = health;
          health = health2
          game1 = game;
          game = game2;
          player = 2;
          playerText.setText('Player: 2');
        }
        else {
          player2 = p;
          p = player1;
          pdis2 = pdis;
          pdis = pdis1;
          health2 = health;
          health = health1
          game2 = game;
          game = game1;
          player = 1;
          playerText.setText('Player: 1');
        }
        healthText.setText('Health:' + health);
        var t = cards.indexOf(c0["texture"]["key"]);
        cards.splice(t, 1);
        cards.filter(val => val);
        dis.push(c0["texture"]["key"]);
        if (typeof cards[5] !== 'undefined') {
          c5 = this.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
          hove(c5, this, cards[5] + 'big');
          select(c5, this, cards[5]);
        }
        else {
          shuffle(dis);
          cards = cards.concat(dis);
          dis = [];
          c5 = this.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
          hove(c5, this, cards[5] + 'big');
          select(c5, this, cards[5]);
        }
        c4 = this.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
        hove(c4, this, cards[4] + 'big');
        select(c4, this, cards[4]);
        c3 = this.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
        hove(c3, this, cards[3] + 'big');
        select(c3, this, cards[3]);
        c2 = this.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
        hove(c2, this, cards[2] + 'big');
        select(c2, this, cards[2]);
        c1 = this.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
        hove(c1, this, cards[1] + 'big');
        select(c1, this, cards[1]);
        c0 = this.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
        hove(c0, this, cards[0] + 'big');
        select(c0, this, cards[0]);
        var z = hand - 1;
        if (typeof p[z] == 'undefined') {
          shuffle(pdis);
          p = p.concat(pdis);
          pdis = [];
        }
        function draw(start, num){
          var y = 0;
          for (var i = start; i < num; i++) {
            if(typeof p[i] == "undefined"){
              shuffle(pdis);
              p = p.concat(pdis);
              pdis = [];
            }
            if(p[i] == "Browser" || p[i] == "Driver" || p[i] == "CloudStorage" || p[i] == "IMDS" || p[i] == "User" || p[i] == "FakeInstaller" || p[i] == "OfficeMacro" || p[i] == "Sysmon" || p[i] == "DPAT" || p[i] == "Endpoint" || p[i] == "Sinkhole" || p[i] == "IAM" || p[i] == "MFAB"){
              hand += 1;
              y += 1;
            }
          }
          if(y > 0){
            draw(num, hand);
          }
        }
        draw(0,4);
        z = hand - 1;
        if (typeof p[z] == 'undefined') {
          shuffle(pdis);
          p = p.concat(pdis);
          pdis = [];
        }
        if(hand > 15 && typeof p[15] != 'undefined'){
          p15 = this.add.image(63, 550, p[15]).setInteractive({ useHandCursor: true  } );
          hove(p15, this, p[15] + 'big');
          bselect(p15, this, p[15]);
        }
        if(hand > 7 && typeof p[7] != 'undefined'){
          p7 = this.add.image(125, 550, p[7]).setInteractive({ useHandCursor: true  } );
          hove(p7, this, p[7] + 'big');
          bselect(p7, this, p[7]);
        }
        if(hand > 8 && typeof p[8] != 'undefined'){
          p8 = this.add.image(187, 550, p[8]).setInteractive({ useHandCursor: true  } );
          hove(p8, this, p[8] + 'big');
          bselect(p8, this, p[8]);
        }
        if(hand > 0 && typeof p[0] != 'undefined'){
          p0 = this.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
          hove(p0, this, p[0] + 'big');
          bselect(p0, this, p[0]);
        }
        if(hand > 9 && typeof p[9] != 'undefined'){
          p9 = this.add.image(312, 550, p[9]).setInteractive({ useHandCursor: true  } );
          hove(p9, this, p[9] + 'big');
          bselect(p9, this, p[9]);
        }
        if(hand > 1 && typeof p[1] != 'undefined'){
          p1 = this.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
          hove(p1, this, p[1] + 'big');
          bselect(p1, this, p[1]);
        }
        if(hand > 10 && typeof p[10] != 'undefined'){
          p10 = this.add.image(437, 550, p[10]).setInteractive({ useHandCursor: true  } );
          hove(p10, this, p[10] + 'big');
          bselect(p10, this, p[10]);
        }
        if(hand > 2 && typeof p[2] != 'undefined'){
          p2 = this.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
          hove(p2, this, p[2] + 'big');
          bselect(p2, this, p[2]);
        }
        if(hand > 11 && typeof p[11] != 'undefined'){
          p11 = this.add.image(562, 550, p[11]).setInteractive({ useHandCursor: true  } );
          hove(p11, this, p[11] + 'big');
          bselect(p11, this, p[11]);
        }
        if(hand > 3 && typeof p[3] != 'undefined'){
          p3 = this.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
          hove(p3, this, p[3] + 'big');
          bselect(p3, this, p[3]);
        }
        if(hand > 12 && typeof p[12] != 'undefined'){
          p12 = this.add.image(687, 550, p[12]).setInteractive({ useHandCursor: true  } );
          hove(p12, this, p[12] + 'big');
          bselect(p12, this, p[12]);
        }
        if(hand > 4 && typeof p[4] != 'undefined'){
          p4 = this.add.image(750, 550, p[4]).setInteractive({ useHandCursor: true  } );
          hove(p4, this, p[4] + 'big');
          bselect(p4, this, p[4]);
        }
        if(hand > 13 && typeof p[13] != 'undefined'){
          p13 = this.add.image(812, 550, p[13]).setInteractive({ useHandCursor: true  } );
          hove(p13, this, p[13] + 'big');
          bselect(p13, this, p[13]);
        }
        if(hand > 16 && typeof p[16] != 'undefined'){
          p16 = this.add.image(850, 550, p[16]).setInteractive({ useHandCursor: true  } );
          hove(p16, this, p[16] + 'big');
          bselect(p16, this, p[16]);
        }
        if(hand > 5 && typeof p[5] != 'undefined'){
          p5 = this.add.image(875, 550, p[5]).setInteractive({ useHandCursor: true  } );
          hove(p5, this, p[5] + 'big');
          bselect(p5, this, p[5]);
        }
        if(hand > 14 && typeof p[14] != 'undefined'){
          p14 = this.add.image(937, 550, p[14]).setInteractive({ useHandCursor: true  } );
          hove(p14, this, p[14] + 'big');
          bselect(p14, this, p[14]);
        }
        if(hand > 6 && typeof p[6] != 'undefined'){
          p6 = this.add.image(1000, 550, p[6]).setInteractive({ useHandCursor: true  } );
          hove(p6, this, p[6] + 'big');
          bselect(p6, this, p[6]);
        }
        console.log('tend1');
        console.log(cards);
        th.socket.emit('tend', cards, dis);
      }
      });

      ///// keyboard /////

      var stext = this.add.text(575, 150, 'Type + return to chat.', { fontSize: '24px', fill: '#fff', wordWrap: { width: 400 } });
      var rtext = this.add.text(575, 225, 'Type + return to chat.', { fontSize: '24px', fill: '#fff', wordWrap: { width: 400 } });
      strin = '';
      this.input.keyboard.on('keydown_shiftKey', function (event) {
        if (event.keyCode === 69) {
          strin += "E";
          stext.setText(strin);
        }
      });
      this.input.keyboard.on('keyup', function (event) {
        /*if(event.shiftKey === 65){
          strin += "A";
          stext.setText(strin);
        }
        else if (event.shiftKey === 66) {
          strin += "B";
          stext.setText(strin);
        }
        else if (event.shiftKey === 67) {
          strin += "C";
          stext.setText(strin);
        }
        else if (event.shiftKey === 68) {
          strin += "D";
          stext.setText(strin);
        }
        else if (event.shiftKey === 69) {
          strin += "E";
          stext.setText(strin);
        }
        else if (event.shiftKey === 70) {
          strin += "F";
          stext.setText(strin);
        }
        else if (event.shiftKey === 71) {
          strin += "G";
          stext.setText(strin);
        }
        else if (event.shiftKey === 72) {
          strin += "H";
          stext.setText(strin);
        }
        else if (event.shiftKey === 73) {
          strin += "I";
          stext.setText(strin);
        }
        else if (event.shiftKey === 74) {
          strin += "J";
          stext.setText(strin);
        }
        else if (event.shiftKey === 75) {
          strin += "K";
          stext.setText(strin);
        }
        else if (event.shiftKey === 76) {
          strin += "L";
          stext.setText(strin);
        }
        else if (event.shiftKey === 77) {
          strin += "M";
          stext.setText(strin);
        }
        else if (event.shiftKey=== 78) {
          strin += "N";
          stext.setText(strin);
        }
        else if (event.shiftKey === 79) {
          strin += "O";
          stext.setText(strin);
        }
        else if (event.shiftKey === 80) {
          strin += "P";
          stext.setText(strin);
        }
        else if (event.shiftKey === 81) {
          strin += "Q";
          stext.setText(strin);
        }
        else if (event.shiftKey === 82) {
          strin += "R";
          stext.setText(strin);
        }
        else if (event.shiftKey === 83) {
          strin += "S";
          stext.setText(strin);
        }
        else if (event.shiftKey === 84) {
          strin += "T";
          stext.setText(strin);
        }
        else if (event.shiftKey === 85) {
          strin += "U";
          stext.setText(strin);
        }
        else if (event.shiftKey === 86) {
          strin += "V";
          stext.setText(strin);
        }
        else if (event.shiftKey === 87) {
          strin += "W";
          stext.setText(strin);
        }
        else if (event.shiftKey === 88) {
          strin += "X";
          stext.setText(strin);
        }
        else if (event.shiftKey === 89) {
          strin += "Y";
          stext.setText(strin);
        }
        else if (event.shiftKey === 90) {
          strin += "Z";
          stext.setText(strin);
        }
        else if (event.shiftKey === 49) {
          strin += "!";
          stext.setText(strin);
        }
        else if (event.shiftKey === 50) {
          strin += "@";
          stext.setText(strin);
        }
        else if (event.shiftKey === 51) {
          strin += "#";
          stext.setText(strin);
        }
        else if (event.shiftKey === 52) {
          strin += "$";
          stext.setText(strin);
        }
        else if (event.shiftKey === 53) {
          strin += "%";
          stext.setText(strin);
        }
        else if (event.shiftKey === 54) {
          strin += "^";
          stext.setText(strin);
        }
        else if (event.shiftKey === 55) {
          strin += "&";
          stext.setText(strin);
        }
        else if (event.shiftKey === 56) {
          strin += "*";
          stext.setText(strin);
        }
        else if (event.shiftKey === 189) {
          strin += "_";
          stext.setText(strin);
        }
        else if (event.shiftKey === 187) {
          strin += "+";
          stext.setText(strin);
        }*/
        if(event.keyCode === 65){
          strin += "a";
          stext.setText(strin);
        }
        else if (event.keyCode === 66) {
          strin += "b";
          stext.setText(strin);
        }
        else if (event.keyCode === 67) {
          strin += "c";
          stext.setText(strin);
        }
        else if (event.keyCode === 68) {
          strin += "d";
          stext.setText(strin);
        }
        else if (event.keyCode === 69) {
          strin += "e";
          stext.setText(strin);
        }
        else if (event.keyCode === 70) {
          strin += "f";
          stext.setText(strin);
        }
        else if (event.keyCode === 71) {
          strin += "g";
          stext.setText(strin);
        }
        else if (event.keyCode === 72) {
          strin += "h";
          stext.setText(strin);
        }
        else if (event.keyCode === 73) {
          strin += "i";
          stext.setText(strin);
        }
        else if (event.keyCode === 74) {
          strin += "j";
          stext.setText(strin);
        }
        else if (event.keyCode === 75) {
          strin += "k";
          stext.setText(strin);
        }
        else if (event.keyCode === 76) {
          strin += "l";
          stext.setText(strin);
        }
        else if (event.keyCode === 77) {
          strin += "m";
          stext.setText(strin);
        }
        else if (event.keyCode === 78) {
          strin += "n";
          stext.setText(strin);
        }
        else if (event.keyCode === 79) {
          strin += "o";
          stext.setText(strin);
        }
        else if (event.keyCode === 80) {
          strin += "p";
          stext.setText(strin);
        }
        else if (event.keyCode === 81) {
          strin += "q";
          stext.setText(strin);
        }
        else if (event.keyCode === 82) {
          strin += "r";
          stext.setText(strin);
        }
        else if (event.keyCode === 83) {
          strin += "s";
          stext.setText(strin);
        }
        else if (event.keyCode === 84) {
          strin += "t";
          stext.setText(strin);
        }
        else if (event.keyCode === 85) {
          strin += "u";
          stext.setText(strin);
        }
        else if (event.keyCode === 86) {
          strin += "v";
          stext.setText(strin);
        }
        else if (event.keyCode === 87) {
          strin += "w";
          stext.setText(strin);
        }
        else if (event.keyCode === 88) {
          strin += "x";
          stext.setText(strin);
        }
        else if (event.keyCode === 89) {
          strin += "y";
          stext.setText(strin);
        }
        else if (event.keyCode === 90) {
          strin += "z";
          stext.setText(strin);
        }
        else if (event.keyCode === 49) {
          strin += "1";
          stext.setText(strin);
        }
        else if (event.keyCode === 50) {
          strin += "2";
          stext.setText(strin);
        }
        else if (event.keyCode === 51) {
          strin += "3";
          stext.setText(strin);
        }
        else if (event.keyCode === 52) {
          strin += "4";
          stext.setText(strin);
        }
        else if (event.keyCode === 53) {
          strin += "5";
          stext.setText(strin);
        }
        else if (event.keyCode === 54) {
          strin += "6";
          stext.setText(strin);
        }
        else if (event.keyCode === 55) {
          strin += "7";
          stext.setText(strin);
        }
        else if (event.keyCode === 56) {
          strin += "8";
          stext.setText(strin);
        }
        else if (event.keyCode === 57) {
          strin += "9";
          stext.setText(strin);
        }
        else if (event.keyCode === 48) {
          strin += "0";
          stext.setText(strin);
        }
        else if (event.keyCode === 189) {
          strin += "-";
          stext.setText(strin);
        }
        else if (event.keyCode === 187) {
          strin += "=";
          stext.setText(strin);
        }
        else if (event.keyCode === 188) {
          strin += ",";
          stext.setText(strin);
        }
        else if (event.keyCode === 190) {
          strin += ".";
          stext.setText(strin);
        }
        else if (event.keyCode === 191) {
          strin += "/";
          stext.setText(strin);
        }
        else if (event.keyCode === 32) {
          strin += " ";
          stext.setText(strin);
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
        //bill
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
    scene: [ Guest, P1 ]
};
var game = new Phaser.Game(config);
