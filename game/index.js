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
      //console.log('Title');
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
        this.add.image(512, 320, 'back');
        var i;
        var c = this.add.image(250, 300, 'cb');
        c.setScale(1/2);
        for (i = 0; i < cards.length; i++) {
          var c = this.add.image(250, 300, cards[i]).setInteractive({ useHandCursor: true  } );
          c.setScale(1/2);
          //this.input.setDraggable(c);
          this.input.on('gameobjectdown', function (pointer, gameObject) {
              //this.sound.add('click').play();
              gameObject.destroy();

          });
        }
        var d = this.add.image(700, 100, 'title');
        d.setInteractive({ useHandCursor: true  } );
        d.setScale(1/4);
        d.on('pointerover',function(pointer){
          //console.log('hover');
          d.setScale(1/3);
        });
        d.on('pointerout',function(pointer){
          //console.log('out');
          d.setScale(1/4);
        });
        d.on('pointerdown', () => {
          this.sound.add('click').play();
          //console.log('Video');
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
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB", "EMP", "P1S", "P1C"];
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
          function hove(c, th, im){
            c.on('pointerover',function(pointer){
              //console.log('hover');
              big = th.add.image(865, 160, im).setInteractive();
              big.setScale(1/3);
            });
            c.on('pointerout',function(pointer){
              //console.log('out');
              big.destroy();
              big = null;
            });
          }
          var red = "no";
          function select(c, th, im){
            c.on('pointerdown',function(pointer){
              if(c["texture"]["key"] != "EMP"){
                red = "yes";
              console.log(c);
                //console.log('down');
                cc.clearTint();
                ce.clearTint();
                cp.clearTint();
                cg.clearTint();
                c0.clearTint();
                c1.clearTint();
                c2.clearTint();
                c3.clearTint();
                c4.clearTint();
                c5.clearTint();
                p0.clearTint();
                p1.clearTint();
                p2.clearTint();
                p3.clearTint();
                c.setTint(0xff0000);
                skill = 0;
                coin = 0;
                total = 0;
                card = 0;
                skillText.setText('Skill:' + skill);
                coinText.setText('Coins:' + coin);
                totalText.setText('Total:' + total);
                cardText.setText('Cards:' + card);
                if(c["texture"]["key"] == "COM" || c["texture"]["key"] == "ENGINES" || c["texture"]["key"] == "PORT" || c["texture"]["key"] == "Guns"){
                  temp2 = "";
                }
                else{
                  temp2 = c["texture"]["key"];
                }
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
              }
            });
            //console.log("cost: " + cost);
            //console.log("type: " + type);
          }
          function bselect(c, th, im){
            c.on('pointerdown',function(pointer){
              if(red == "yes"){
                if(c.tintTopLeft !== 0x00ff00){
                  console.log(c);
                  c.setTint(0x00ff00);
                  if(c["texture"]["key"] == "P1C"){
                    coin += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    console.log(temp);
                  }
                  else if (c["texture"]["key"] == "P1S") {
                    skill += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    console.log(temp);
                  }
                }
                else{
                  c.clearTint();
                  if(c["texture"]["key"] == "P1C"){
                    coin -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    console.log(temp);
                    console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "P1S") {
                    skill -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    console.log(temp);
                    console.log("t: " + t);
                  }
                }
                skillText.setText('Skill:' + skill);
                coinText.setText('Coins:' + coin);
                total = skill + coin;
                totalText.setText('Total:' + total);
                cardText.setText('Cards:' + card);
                if(type == "skill"){
                  if(skill >= cost){
                    console.log("Aquire");
                    if(c["texture"]["key"] == "COM" || c["texture"]["key"] == "ENGINES" || c["texture"]["key"] == "PORT" || c["texture"]["key"] == "Guns"){

                    }
                    else{
                      var t = cards.indexOf(temp2);
                      cards.splice(t, 1);
                      console.log("cards");
                      console.log(cards);
                    }

                  }
                }
                else if (type == "coin") {
                  if(coin >= cost){
                    console.log("Aquire");
                    if(c["texture"]["key"] == "COM" || c["texture"]["key"] == "ENGINES" || c["texture"]["key"] == "PORT" || c["texture"]["key"] == "Guns"){

                    }
                    else{
                      var t = cards.indexOf(temp2);
                      cards.splice(t, 1);
                      console.log("cards");
                      console.log(cards);
                    }
                  }
                }
                else if (type == "total") {
                  if(total >= cost){
                    console.log("Aquire");
                    if(c["texture"]["key"] == "COM" || c["texture"]["key"] == "ENGINES" || c["texture"]["key"] == "PORT" || c["texture"]["key"] == "Guns"){

                    }
                    else{
                      var t = cards.indexOf(temp2);
                      cards.splice(t, 1);
                      console.log("cards");
                      console.log(cards);
                    }
                  }
                }
                else if (type == "card") {
                  if(total >= cost){
                    console.log("Aquire");
                    if(c["texture"]["key"] == "COM" || c["texture"]["key"] == "ENGINES" || c["texture"]["key"] == "PORT" || c["texture"]["key"] == "Guns"){

                    }
                    else{
                      var t = cards.indexOf(temp2);
                      cards.splice(t, 1);
                      console.log("cards");
                      console.log(cards);
                    }
                  }
                }
              }
            });
            return skill;
            return coin;
          }
            //c.on('pointerdown',function(pointer){
        //var cards = ["s10", "s11", "s12", "s13", "s14", "s15", "s16","s17","s18", "s20", "s21", "s22", "s23", "s24", "s25", "s26","s27","s28","s30", "s31", "s32", "s33", "s34", "s35", "s36","s37","s38", "s40", "s41", "s42", "s43", "s44", "s45", "s46","s47","s48","s50", "s51", "s52", "s53", "s54", "s55", "s56","s57","s58","s60", "s61", "s62", "s63", "s64", "s65", "s66","s67","s68"];
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB", "EMP"];
        var p = ["P1S", "P1S", "P1S", "P1S", "P1C", "P1C"];
        shuffle(cards);
        shuffle(p);
        this.add.image(512, 320, 'back');
        var i;
        for (i = 6; i < cards.length; i++) {
          var c = this.add.image(125, 400, cards[i]).setInteractive({ useHandCursor: true  } );
          c.setScale(1/8);
          //this.input.setDraggable(c);
          this.input.on('gameobjectdown', function (pointer, gameObject) {

              //gameObject.destroy();

          });
        }
        skill = 0;
        coin = 0;
        total = 0;
        card = 0;
        cost = 0;
        type = 0;
        health = 50;
        temp = [];
        temp2 = "";
        var healthText = this.add.text(250, 65, 'Health: 50', { fontSize: '64px', fill: '#fff' });
        var skillText = this.add.text(15, 65, 'Skill: 0', { fontSize: '32px', fill: '#fff' });
        var coinText = this.add.text(15, 90, 'Coins: 0', { fontSize: '32px', fill: '#fff' });
        var totalText = this.add.text(15, 115, 'Total: 0', { fontSize: '32px', fill: '#fff' });
        var cardText = this.add.text(15, 140, 'Cards: 0', { fontSize: '32px', fill: '#fff' });
        var r = this.add.text(800, 15, 'Rules', { fontSize: '32px', fill: '#fff' });
        var h = this.add.text(15, 15, 'Home', { fontSize: '32px', fill: '#fff' });
        h.setInteractive();
        h.on('pointerdown', () => {
          this.sound.add('click').play();
          this.scene.start('titles');
          //music.destroy();
        });
        var cb = this.add.image(125, 400, 'cb').setInteractive({ useHandCursor: true  } );
        cb.setScale(1/8);
        hove(cb, this, 'cb');
        var c0 = this.add.image(250, 400, cards[0]).setInteractive({ useHandCursor: true  } );
        c0.setScale(1/8);
        hove(c0, this, cards[0]);
        select(c0, this, cards[0]);
        var c1 = this.add.image(375, 400, cards[1]).setInteractive({ useHandCursor: true  } );
        c1.setScale(1/8);
        hove(c1, this, cards[1]);
        select(c1, this, cards[1]);
        var c2 = this.add.image(500, 400, cards[2]).setInteractive({ useHandCursor: true  } );
        c2.setScale(1/8);
        hove(c2, this, cards[2]);
        select(c2, this, cards[2]);
        var c3 = this.add.image(625, 400, cards[3]).setInteractive({ useHandCursor: true  } );
        c3.setScale(1/8);
        hove(c3, this, cards[3]);
        select(c3, this, cards[3]);
        var c4 = this.add.image(750, 400, cards[4]).setInteractive({ useHandCursor: true  } );
        c4.setScale(1/8);
        hove(c4, this, cards[4]);
        select(c4, this, cards[4]);
        var c5 = this.add.image(875, 400, cards[5]).setInteractive({ useHandCursor: true  } );
        c5.setScale(1/8);
        hove(c5, this, cards[5]);
        select(c5, this, cards[5]);
        var cc = this.add.image(250, 250, "COM").setInteractive({ useHandCursor: true  } );
        cc.setScale(1/8);
        hove(cc, this, 'COM');
        select(cc, this, 'COM');
        var ce = this.add.image(375, 250, "ENGINES").setInteractive({ useHandCursor: true  } );
        ce.setScale(1/8);
        hove(ce, this, 'ENGINES');
        select(ce, this, 'ENGINES');
        var cp = this.add.image(500, 250, "PORT").setInteractive({ useHandCursor: true  } );
        cp.setScale(1/8);
        hove(cp, this, 'PORT');
        select(cp, this, 'PORT');
        var cg = this.add.image(625, 250, "Guns").setInteractive({ useHandCursor: true  } );
        cg.setScale(1/8);
        hove(cg, this, 'Guns');
        select(cg, this, 'Guns');
        var p0 = this.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
        p0.setScale(1/8);
        hove(p0, this, p[0]);
        bselect(p0, this, p[0]);
        var p1 = this.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
        p1.setScale(1/8);
        hove(p1, this, p[1]);
        bselect(p1, this, p[1]);
        var p2 = this.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
        p2.setScale(1/8);
        hove(p2, this, p[2]);
        bselect(p2, this, p[2]);
        var p3 = this.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
        p3.setScale(1/8);
        hove(p3, this, p[3]);
        bselect(p3, this, p[3]);
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
/*
scale: {
  mode: Phaser.Scale.FIT,
  parent: "app",
  width: 1024,
  height: 640
},
*/
var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 640,
    backgroundColor: '#000000',
    scene: [ Vide, TitleS, P1 ]
};

var game = new Phaser.Game(config);
