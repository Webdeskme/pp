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
        this.load.image('END', 'assets/text/end.png');
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
              //console.log(c);
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
                card = 0
                temp = [];
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
          function bselect(c, th, im,){
            c.on('pointerdown',function(pointer){
              if(red == "yes"){
                if(c.tintTopLeft !== 0x00ff00){
                  //console.log(c);
                  c.setTint(0x00ff00);
                  if(c["texture"]["key"] == "P1C"){
                    coin += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "P1S") {
                    skill += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "Browser") {
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "Malware") {
                    skill += 5;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "PrivilegeEsc") {
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "Driver") {
                    skill += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "Service") {
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "CloudStorage") {
                    skill += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "IMDS") {
                    skill += 6;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "MFA") {
                    coin += 5;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "User") {
                    skill += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "CloudAccount") {
                    coin += 5;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "CredStuffing") {
                    coin += 3;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "Kubelet") {
                    coin += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "WateringHole") {
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "WebShell") {
                    coin += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "FakeInstaller") {
                    skill += 3;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "OfficeMacro") {
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "ShadowCopy") {
                    coin += 4;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "Sysmon") {
                    skill += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "Behavior") {
                    skill += 4;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "DPAT") {
                    coin += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "Endpoint") {
                    coin += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "SIEM") {
                    skill += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "Sinkhole") {
                    skill += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "ZeroTrust") {
                    skill += 5;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "IAM") {
                    coin += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "SRUM") {
                    coin += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                  else if (c["texture"]["key"] == "MFAB") {
                    coin += 6;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                    //console.log(temp);
                  }
                }
                else{
                  c.clearTint();
                  if(c["texture"]["key"] == "P1C"){
                    coin -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "P1S") {
                    skill -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "Browser") {
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "Malware") {
                    skill -= 5;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "PrivilegeEsc") {
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "Driver") {
                    skill -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "Service") {
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "CloudStorage") {
                    skill -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "IMDS") {
                    skill -= 6;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "MFA") {
                    coin -= 5;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "User") {
                    skill -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "CloudAccount") {
                    coin -= 5;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "CredStuffing") {
                    coin -= 3;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "Kubelet") {
                    coin -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "WateringHole") {
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "WebShell") {
                    coin -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "FakeInstaller") {
                    skill -= 3;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "OfficeMacro") {
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "ShadowCopy") {
                    coin -= 4;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "Sysmon") {
                    skill -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "Behavior") {
                    skill -= 4;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "DPAT") {
                    coin -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "Endpoint") {
                    coin -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "SIEM") {
                    skill -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "Sinkhole") {
                    skill -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "ZeroTrust") {
                    skill -= 5;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "IAM") {
                    coin -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "SRUM") {
                    coin -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
                  }
                  else if (c["texture"]["key"] == "MFAB") {
                    coin -= 6;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                    //console.log(temp);
                    //console.log("t: " + t);
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
                      cards.filter(val => val);
                      pdis.push(temp2);
                      //console.log("cards");
                      //console.log(cards);
                      if (typeof cards[5] !== 'undefined') {
                        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                        c5.setScale(1/8);
                        hove(c5, th, cards[5]);
                        select(c5, th, cards[5]);
                      }
                      else {
                        shuffle(dis);
                        cards = cards.concat(dis);
                        dis = []
                        console.log("shuffle");
                        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                        c5.setScale(1/8);
                        hove(c5, th, cards[5]);
                        select(c5, th, cards[5]);
                      }
                      c4 = th.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
                      c4.setScale(1/8);
                      hove(c4, th, cards[4]);
                      select(c4, th, cards[4]);
                      c3 = th.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
                      c3.setScale(1/8);
                      hove(c3, th, cards[3]);
                      select(c3, th, cards[3]);
                      c2 = th.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
                      c2.setScale(1/8);
                      hove(c2, th, cards[2]);
                      select(c2, th, cards[2]);
                      c1 = th.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
                      c1.setScale(1/8);
                      hove(c1, th, cards[1]);
                      select(c1, th, cards[1]);
                      c0 = th.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
                      c0.setScale(1/8);
                      hove(c0, th, cards[0]);
                      select(c0, th, cards[0]);
                      var l = hand - card;
                      hand = l;
                      console.log("Hand: " + hand);
                      for (i = 0; i < temp.length; i++) {
                        var t = p.indexOf(temp[i]);
                        p.splice(t, 1);
                        p.filter(val => val);
                        pdis.push(temp[i]);
                        //console.log(pdis);
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
                        if(l == 0){

                        }
                        else if (l == 1) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                        }
                        else if (l == 2) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                        }
                        else if (l == 3) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                          p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
                          p2.setScale(1/8);
                          hove(p2, th, p[2]);
                          bselect(p2, th, p[2]);
                        }
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
                      cards.filter(val => val);
                      pdis.push(temp2);
                      //console.log("pdis");
                      //console.log(pdis);
                      if (typeof cards[5] !== 'undefined') {
                        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                        c5.setScale(1/8);
                        hove(c5, th, cards[5]);
                        select(c5, th, cards[5]);
                      }
                      else {
                        shuffle(dis);
                        cards = cards.concat(dis);
                        dis = []
                        console.log("shuffle");
                        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                        c5.setScale(1/8);
                        hove(c5, th, cards[5]);
                        select(c5, th, cards[5]);
                      }
                      c4 = th.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
                      c4.setScale(1/8);
                      hove(c4, th, cards[4]);
                      select(c4, th, cards[4]);
                      c3 = th.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
                      c3.setScale(1/8);
                      hove(c3, th, cards[3]);
                      select(c3, th, cards[3]);
                      c2 = th.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
                      c2.setScale(1/8);
                      hove(c2, th, cards[2]);
                      select(c2, th, cards[2]);
                      c1 = th.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
                      c1.setScale(1/8);
                      hove(c1, th, cards[1]);
                      select(c1, th, cards[1]);
                      c0 = th.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
                      c0.setScale(1/8);
                      hove(c0, th, cards[0]);
                      select(c0, th, cards[0]);
                      var l = hand - card;
                      hand = l;
                      console.log("Hand: " + hand);
                      for (i = 0; i < temp.length; i++) {
                        var t = p.indexOf(temp[i]);
                        p.splice(t, 1);
                        p.filter(val => val);
                        pdis.push(temp[i]);
                        //console.log(pdis);
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
                        if(l == 0){

                        }
                        else if (l == 1) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                        }
                        else if (l == 2) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                        }
                        else if (l == 3) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                          p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
                          p2.setScale(1/8);
                          hove(p2, th, p[2]);
                          bselect(p2, th, p[2]);
                        }
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
                      cards.filter(val => val);
                      pdis.push(temp2);
                      //console.log("cards");
                      //console.log(cards);
                      if (typeof cards[5] !== 'undefined') {
                        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                        c5.setScale(1/8);
                        hove(c5, th, cards[5]);
                        select(c5, th, cards[5]);
                      }
                      else {
                        shuffle(dis);
                        cards = cards.concat(dis);
                        dis = []
                        console.log("shuffle");
                        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                        c5.setScale(1/8);
                        hove(c5, th, cards[5]);
                        select(c5, th, cards[5]);
                      }
                      c4 = th.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
                      c4.setScale(1/8);
                      hove(c4, th, cards[4]);
                      select(c4, th, cards[4]);
                      c3 = th.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
                      c3.setScale(1/8);
                      hove(c3, th, cards[3]);
                      select(c3, th, cards[3]);
                      c2 = th.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
                      c2.setScale(1/8);
                      hove(c2, th, cards[2]);
                      select(c2, th, cards[2]);
                      c1 = th.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
                      c1.setScale(1/8);
                      hove(c1, th, cards[1]);
                      select(c1, th, cards[1]);
                      c0 = th.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
                      c0.setScale(1/8);
                      hove(c0, th, cards[0]);
                      select(c0, th, cards[0]);
                      var l = hand - card;
                      hand = l;
                      console.log("Hand: " + hand);
                      for (i = 0; i < temp.length; i++) {
                        var t = p.indexOf(temp[i]);
                        p.splice(t, 1);
                        p.filter(val => val);
                        pdis.push(temp[i]);
                        //console.log(pdis);
                      }
                        if (typeof p0 !== 'undefined') {
                          p0.destroy();
                          console.log("p0 destroy");
                        }
                        if (typeof p1 !== 'undefined') {
                          p1.destroy();
                          console.log("p1 destroy");
                        }
                        if (typeof p2 !== 'undefined') {
                          p2.destroy();
                          console.log("p2 destroy");
                        }
                        if (typeof p3 !== 'undefined') {
                          p3.destroy();
                          console.log("p3 destroy");
                        }
                        if(l == 0){
                          console.log("0 Left");
                        }
                        else if (l == 1) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                          console.log("1 left");
                        }
                        else if (l == 2) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                          console.log("2 left");
                        }
                        else if (l == 3) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                          p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
                          p2.setScale(1/8);
                          hove(p2, th, p[2]);
                          bselect(p2, th, p[2]);
                          console.log("3 left");
                        }
                        else if (l == 4) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                          p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
                          p2.setScale(1/8);
                          hove(p2, th, p[2]);
                          bselect(p2, th, p[2]);
                          p3 = th.add.image(500, 550, p[3]).setInteractive({ useHandCursor: true  } );
                          p3.setScale(1/8);
                          hove(p3, th, p[3]);
                          bselect(p3, th, p[3]);
                          console.log("4 left");
                        }
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
                      cards.filter(val => val);
                      pdis.push(temp2);
                      //console.log("cards");
                      //console.log(cards);
                      console.log("Cards 5" + cards[5]);
                      if (typeof cards[5] !== 'undefined') {
                        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                        c5.setScale(1/8);
                        hove(c5, th, cards[5]);
                        select(c5, th, cards[5]);
                      }
                      else {
                        shuffle(dis);
                        cards = cards.concat(dis);
                        dis = []
                        console.log("shuffle");
                        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                        c5.setScale(1/8);
                        hove(c5, th, cards[5]);
                        select(c5, th, cards[5]);
                      }
                      c4 = th.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
                      c4.setScale(1/8);
                      hove(c4, th, cards[4]);
                      select(c4, th, cards[4]);
                      c3 = th.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
                      c3.setScale(1/8);
                      hove(c3, th, cards[3]);
                      select(c3, th, cards[3]);
                      c2 = th.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
                      c2.setScale(1/8);
                      hove(c2, th, cards[2]);
                      select(c2, th, cards[2]);
                      c1 = th.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
                      c1.setScale(1/8);
                      hove(c1, th, cards[1]);
                      select(c1, th, cards[1]);
                      c0 = th.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
                      c0.setScale(1/8);
                      hove(c0, th, cards[0]);
                      select(c0, th, cards[0]);
                      var l = hand - card;
                      hand = l;
                      console.log("Hand: " + hand);
                      for (i = 0; i < temp.length; i++) {
                        var t = p.indexOf(temp[i]);
                        p.splice(t, 1);
                        p.filter(val => val);
                        pdis.push(temp[i]);
                        //console.log(pdis);
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
                        if(l == 0){

                        }
                        else if (l == 1) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                        }
                        else if (l == 2) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                        }
                        else if (l == 3) {
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                          p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
                          p2.setScale(1/8);
                          hove(p2, th, p[2]);
                          bselect(p2, th, p[2]);
                        }
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
        hand = 4;
        pdis = [];
        dis = [];
        red = "No";
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
        cb = this.add.image(125, 400, 'cb').setInteractive({ useHandCursor: true  } );
        cb.setScale(1/8);
        hove(cb, this, 'cb');
        var tend = this.add.image(90, 200, 'END').setInteractive({ useHandCursor: true  } );
        tend.setScale(1/3);
        tend.on('pointerdown', () => {
          this.sound.add('click').play();
          console.log("PDis");
          console.log(pdis);
          console.log(c0["texture"]["key"]);
          skill = 0;
          coin = 0;
          total = 0;
          card = 0;
          cost = 0;
          type = 0;
          temp = [];
          temp2 = "";
          hand = 4;
          red = "No";
          if (typeof p0 !== 'undefined') {
            p0.destroy();
            console.log("p0 destroy");
          }
          if (typeof p1 !== 'undefined') {
            p1.destroy();
            console.log("p1 destroy");
          }
          if (typeof p2 !== 'undefined') {
            p2.destroy();
            console.log("p2 destroy");
          }
          if (typeof p3 !== 'undefined') {
            p3.destroy();
            console.log("p3 destroy");
          }
          skillText.setText('Skill:' + skill);
          coinText.setText('Coins:' + coin);
          totalText.setText('Total:' + total);
          cardText.setText('Cards:' + card);
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
          healthText.setText('Health:' + health);
          var t = cards.indexOf(c0["texture"]["key"]);
          cards.splice(t, 1);
          cards.filter(val => val);
          dis.push(c0["texture"]["key"]);
          console.log("Cards 5" + cards[5]);
          if (typeof cards[5] !== 'undefined') {
            c5 = this.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
            c5.setScale(1/8);
            hove(c5, this, cards[5]);
            select(c5, this, cards[5]);
          }
          else {
            shuffle(dis);
            cards = cards.concat(dis);
            dis = []
            console.log("shuffle");
            c5 = this.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
            c5.setScale(1/8);
            hove(c5, this, cards[5]);
            select(c5, this, cards[5]);
          }
          /*c5 = this.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
          c5.setScale(1/8);
          hove(c5, this, cards[5]);
          select(c5, this, cards[5]);*/
          c4 = this.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
          c4.setScale(1/8);
          hove(c4, this, cards[4]);
          select(c4, this, cards[4]);
          c3 = this.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
          c3.setScale(1/8);
          hove(c3, this, cards[3]);
          select(c3, this, cards[3]);
          c2 = this.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
          c2.setScale(1/8);
          hove(c2, this, cards[2]);
          select(c2, this, cards[2]);
          c1 = this.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
          c1.setScale(1/8);
          hove(c1, this, cards[1]);
          select(c1, this, cards[1]);
          c0 = this.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
          c0.setScale(1/8);
          hove(c0, this, cards[0]);
          select(c0, this, cards[0]);
          console.log("Dis");
          console.log(dis);
          console.log("Hand");
          console.log(hand);
          if(hand == 4){
            pdis.push(p[0]);
            p.shift();
            pdis.push(p[0]);
            p.shift();
            pdis.push(p[0]);
            p.shift();
            pdis.push(p[0]);
            p.shift();
          }
          else if (hand == 3) {
            pdis.push(p[0]);
            p.shift();
            pdis.push(p[0]);
            p.shift();
            pdis.push(p[0]);
            p.shift();
          }
          else if (hand == 2) {
            pdis.push(p[0]);
            p.shift();
            pdis.push(p[0]);
            p.shift();
          }
          else if (hand == 1) {
            pdis.push(p[0]);
            p.shift();
          }
          /*if (0 < hand) {
            var t = p.indexOf(p0["texture"]["key"]);
            pdis.push(p0["texture"]["key"]);
            p.splice(t, 1);
            p.filter(val => val);
          }
          else {
            console.log("no 4");
          }
          if (1 < hand) {
            var t = p.indexOf(p1["texture"]["key"]);
            pdis.push(p1["texture"]["key"]);
            p.splice(t, 1);
            p.filter(val => val);
          }
          else {
            console.log("no 2");
          }
          if (2 < hand) {
            var t = p.indexOf(p2["texture"]["key"]);
            pdis.push(p2["texture"]["key"]);
            p.splice(t, 1);
            p.filter(val => val);
          }
          else {
            console.log("no 3");
          }
          if (3 < hand) {
            var t = p.indexOf(p3["texture"]["key"]);
            pdis.push(p3["texture"]["key"]);
            p.splice(t, 1);
            p.filter(val => val);
          }
          else {
            console.log("no 4");
          }*/
          if (typeof p[3] == 'undefined') {
            shuffle(pdis);
            p = p.concat(pdis);
            pdis = [];
          }
          p0 = this.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
          p0.setScale(1/8);
          hove(p0, this, p[0]);
          bselect(p0, this, p[0]);
          p1 = this.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
          p1.setScale(1/8);
          hove(p1, this, p[1]);
          bselect(p1, this, p[1]);
          p2 = this.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
          p2.setScale(1/8);
          hove(p2, this, p[2]);
          bselect(p2, this, p[2]);
          p3 = this.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
          p3.setScale(1/8);
          hove(p3, this, p[3]);
          bselect(p3, this, p[3]);
          console.log("P");
          console.log(p);
        });
        c5 = this.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
        c5.setScale(1/8);
        hove(c5, this, cards[5]);
        select(c5, this, cards[5]);
        c4 = this.add.image(375, 400, cards[4]).setInteractive({ useHandCursor: true  } );
        c4.setScale(1/8);
        hove(c4, this, cards[4]);
        select(c4, this, cards[4]);
        c3 = this.add.image(500, 400, cards[3]).setInteractive({ useHandCursor: true  } );
        c3.setScale(1/8);
        hove(c3, this, cards[3]);
        select(c3, this, cards[3]);
        c2 = this.add.image(625, 400, cards[2]).setInteractive({ useHandCursor: true  } );
        c2.setScale(1/8);
        hove(c2, this, cards[2]);
        select(c2, this, cards[2]);
        c1 = this.add.image(750, 400, cards[1]).setInteractive({ useHandCursor: true  } );
        c1.setScale(1/8);
        hove(c1, this, cards[1]);
        select(c1, this, cards[1]);
        c0 = this.add.image(875, 400, cards[0]).setInteractive({ useHandCursor: true  } );
        c0.setScale(1/8);
        hove(c0, this, cards[0]);
        select(c0, this, cards[0]);
        cc = this.add.image(250, 250, "COM").setInteractive({ useHandCursor: true  } );
        cc.setScale(1/8);
        hove(cc, this, 'COM');
        select(cc, this, 'COM');
        ce = this.add.image(375, 250, "ENGINES").setInteractive({ useHandCursor: true  } );
        ce.setScale(1/8);
        hove(ce, this, 'ENGINES');
        select(ce, this, 'ENGINES');
        cp = this.add.image(500, 250, "PORT").setInteractive({ useHandCursor: true  } );
        cp.setScale(1/8);
        hove(cp, this, 'PORT');
        select(cp, this, 'PORT');
        cg = this.add.image(625, 250, "Guns").setInteractive({ useHandCursor: true  } );
        cg.setScale(1/8);
        hove(cg, this, 'Guns');
        select(cg, this, 'Guns');
        p0 = this.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
        p0.setScale(1/8);
        hove(p0, this, p[0]);
        bselect(p0, this, p[0]);
        p1 = this.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
        p1.setScale(1/8);
        hove(p1, this, p[1]);
        bselect(p1, this, p[1]);
        p2 = this.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
        p2.setScale(1/8);
        hove(p2, this, p[2]);
        bselect(p2, this, p[2]);
        p3 = this.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
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
