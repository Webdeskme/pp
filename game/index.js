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
      ////console.log('Title');
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
          ////console.log('hover');
          d.setScale(1/3);
        });
        d.on('pointerout',function(pointer){
          ////console.log('out');
          d.setScale(1/4);
        });
        d.on('pointerdown', () => {
          this.sound.add('click').play();
          ////console.log('Video');
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
        this.load.image('back', 'assets/backgrounds/star1.jpg');
        //this.load.image('title', 'assets/Text/text.png');
        this.load.image('cb', 'assets/out/back.png');
        this.load.image('COM', 'assets/out/COM.png');
        this.load.image('ENGINES', 'assets/out/ENGINES.png');
        this.load.image('PORT', 'assets/out/PORT.png');
        this.load.image('Guns', 'assets/out/Guns.png');
        this.load.image('END', 'assets/text/end.png');
        this.load.image('SCORE', 'assets/text/SCORE2.png');
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
              big = th.add.image(865, 160, im).setInteractive();
              big.setScale(1/3);
            });
            c.on('pointerout',function(pointer){
              big.destroy();
              big = null;
            });
            back.on('pointerover',function(pointer){
              big.destroy();
              big = null;
            });
          }
          var red = "no";
          function select(c, th, im){
            c.on('pointerdown',function(pointer){
              th.sound.add('click').play();
              if(c["texture"]["key"] != "EMP"){
                red = "yes";
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
                if(c["texture"]["key"] == "COM" || c["texture"]["key"] == "ENGINES" || c["texture"]["key"] == "PORT" || c["texture"]["key"] == "Guns"){
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
                temp = [];
                skillText.setText('Skill:' + skill);
                coinText.setText('Coins:' + coin);
                totalText.setText('Total:' + total);
                cardText.setText('Cards:' + card);
                //if(c["texture"]["key"] == "COM" || c["texture"]["key"] == "ENGINES" || c["texture"]["key"] == "PORT" || c["texture"]["key"] == "Guns"){
                //  temp2 = "";
                //}
                //else{
                  temp2 = c["texture"]["key"];
                //}
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
          }
          function bselect(c, th, im,){
            c.on('pointerdown',function(pointer){
              th.sound.add('click').play();
              if(red == "yes"){
                if(c.tintTopLeft !== 0x00ff00){
                  c.setTint(0x00ff00);
                  if(c["texture"]["key"] == "P1C"){
                    coin += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "P1S") {
                    skill += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "Browser") {
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "Malware") {
                    skill += 5;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "PrivilegeEsc") {
                    skill += 5;
                    coin += 6;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "Driver") {
                    skill += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "Service") {
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "CloudStorage") {
                    skill += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "IMDS") {
                    skill += 6;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "MFA") {
                    coin += 5;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "User") {
                    skill += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "CloudAccount") {
                    coin += 5;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "CredStuffing") {
                    coin += 3;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "Kubelet") {
                    coin += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "WateringHole") {
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "WebShell") {
                    coin += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "FakeInstaller") {
                    skill += 3;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "OfficeMacro") {
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "ShadowCopy") {
                    coin += 4;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "Sysmon") {
                    skill += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "Behavior") {
                    skill += 4;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "DPAT") {
                    coin += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "Endpoint") {
                    coin += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "SIEM") {
                    skill += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "Sinkhole") {
                    skill += 1;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "ZeroTrust") {
                    skill += 5;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "IAM") {
                    coin += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "SRUM") {
                    coin += 2;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                  else if (c["texture"]["key"] == "MFAB") {
                    coin += 6;
                    card += 1;
                    temp.push(c["texture"]["key"]);
                  }
                }
                else{
                  c.clearTint();
                  if(c["texture"]["key"] == "P1C"){
                    coin -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "P1S") {
                    skill -= 1;
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
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "IMDS") {
                    skill -= 6;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "MFA") {
                    coin -= 5;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "User") {
                    skill -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "CloudAccount") {
                    coin -= 5;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "CredStuffing") {
                    coin -= 3;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "Kubelet") {
                    coin -= 1;
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
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "FakeInstaller") {
                    skill -= 3;
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
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "Sysmon") {
                    skill -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "Behavior") {
                    skill -= 4;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "DPAT") {
                    coin -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "Endpoint") {
                    coin -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "SIEM") {
                    skill -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "Sinkhole") {
                    skill -= 1;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "ZeroTrust") {
                    skill -= 5;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "IAM") {
                    coin -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "SRUM") {
                    coin -= 2;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                  else if (c["texture"]["key"] == "MFAB") {
                    coin -= 6;
                    card -= 1;
                    var t = temp.indexOf(c["texture"]["key"]);
                    temp.splice(t, 1);
                  }
                }
                skillText.setText('Skill:' + skill);
                coinText.setText('Coins:' + coin);
                total = skill + coin;
                totalText.setText('Total:' + total);
                cardText.setText('Cards:' + card);
                if(type == "skill"){
                  if(skill >= cost){
                    //console.log("Aquire");
                    coin = 0;
                    skill = 0;
                    total = 0;
                    card = 0;
                    big.destroy();
                    big = null;
                    if(checkScore == "yes"){
                      checkScore = "no";
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
                    else{
                      if(temp2 == "COM" || temp2 == "ENGINES" || temp2 == "PORT" || temp2 == "Guns"){
                      game += 1;
                      if(game > 3){
                          th.sound.add('click').play();
                          th.scene.start('win');
                      }
                      if(temp2 == "COM"){
                        cc.destroy();
                      }
                      else if (temp2 == "ENGINES") {
                        ce.destroy();
                      }
                      else if (temp2 == "PORT") {
                        cp.destroy();
                      }
                      else if (temp2 == "Guns") {
                        cg.destroy();
                      }
                      temp2 = "";
                    }
                    else{
                      var t = cards.indexOf(temp2);
                      cards.splice(t, 1);
                      cards.filter(val => val);
                      pdis.push(temp2);
                      if (typeof cards[5] !== 'undefined') {
                        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                        c5.setScale(1/8);
                        hove(c5, th, cards[5]);
                        select(c5, th, cards[5]);
                      }
                      else {
                        shuffle(dis);
                        cards = cards.concat(dis);
                        dis = [];
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
                      p15.setScale(1/8);
                      hove(p15, th, p[15]);
                      bselect(p15, th, p[15]);
                    }
                    if(l > 7){
                      p7 = th.add.image(125, 550, p[7]).setInteractive({ useHandCursor: true  } );
                      p7.setScale(1/8);
                      hove(p7, th, p[7]);
                      bselect(p7, th, p[7]);
                    }
                    if(l > 8){
                      p8 = th.add.image(187, 550, p[8]).setInteractive({ useHandCursor: true  } );
                      p8.setScale(1/8);
                      hove(p8, th, p[8]);
                      bselect(p8, th, p[8]);
                    }
                    if(l > 0){
                      p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                      p0.setScale(1/8);
                      hove(p0, th, p[0]);
                      bselect(p0, th, p[0]);
                    }
                    if(l > 9){
                      p9 = th.add.image(312, 550, p[9]).setInteractive({ useHandCursor: true  } );
                      p9.setScale(1/8);
                      hove(p9, th, p[9]);
                      bselect(p9, th, p[9]);
                    }
                    if(l > 1){
                      p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                      p1.setScale(1/8);
                      hove(p1, th, p[1]);
                      bselect(p1, th, p[1]);
                    }
                    if(l > 10){
                      p10 = th.add.image(437, 550, p[10]).setInteractive({ useHandCursor: true  } );
                      p10.setScale(1/8);
                      hove(p10, th, p[10]);
                      bselect(p10, th, p[10]);
                    }
                    if(l > 2){
                      p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
                      p2.setScale(1/8);
                      hove(p2, th, p[2]);
                      bselect(p2, th, p[2]);
                    }
                    if(l > 11){
                      p11 = th.add.image(562, 550, p[11]).setInteractive({ useHandCursor: true  } );
                      p11.setScale(1/8);
                      hove(p11, th, p[11]);
                      bselect(p11, th, p[11]);
                    }
                    if(l > 3){
                      p3 = th.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
                      p3.setScale(1/8);
                      hove(p3, th, p[3]);
                      bselect(p3, th, p[3]);
                    }
                    if(l > 12){
                      p12 = th.add.image(687, 550, p[12]).setInteractive({ useHandCursor: true  } );
                      p12.setScale(1/8);
                      hove(p12, th, p[12]);
                      bselect(p12, th, p[12]);
                    }
                    if(l > 4){
                      p4 = th.add.image(750, 550, p[4]).setInteractive({ useHandCursor: true  } );
                      p4.setScale(1/8);
                      hove(p4, th, p[4]);
                      bselect(p4, th, p[4]);
                    }
                    if(l > 13){
                      p13 = th.add.image(812, 550, p[13]).setInteractive({ useHandCursor: true  } );
                      p13.setScale(1/8);
                      hove(p13, th, p[13]);
                      bselect(p13, th, p[13]);
                    }
                    if(l > 16){
                      p16 = th.add.image(850, 550, p[16]).setInteractive({ useHandCursor: true  } );
                      p16.setScale(1/8);
                      hove(p16, th, p[16]);
                      bselect(p16, th, p[16]);
                    }
                    if(l > 5){
                      p5 = th.add.image(875, 550, p[5]).setInteractive({ useHandCursor: true  } );
                      p5.setScale(1/8);
                      hove(p5, th, p[5]);
                      bselect(p5, th, p[5]);
                    }
                    if(l > 14){
                      p14 = th.add.image(937, 550, p[14]).setInteractive({ useHandCursor: true  } );
                      p14.setScale(1/8);
                      hove(p14, th, p[14]);
                      bselect(p14, th, p[14]);
                    }
                    if(l > 6){
                      p6 = th.add.image(1000, 550, p[6]).setInteractive({ useHandCursor: true  } );
                      p6.setScale(1/8);
                      hove(p6, th, p[6]);
                      bselect(p6, th, p[6]);
                    }
                  }
                  }
                }
                else if (type == "coin") {
                  if(coin >= cost){
                    //console.log("Aquire");
                    coin = 0;
                    skill = 0;
                    total = 0;
                    card = 0;
                    big.destroy();
                    big = null;
                    if(checkScore == "yes"){
                      checkScore = "no";
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
                    else{
                    if(temp2 == "COM" || temp2 == "ENGINES" || temp2 == "PORT" || temp2 == "Guns"){
                    game += 1;
                    if(game > 3){
                        th.sound.add('click').play();
                        th.scene.start('win');
                    }
                    if(temp2 == "COM"){
                      cc.destroy();
                    }
                    else if (temp2 == "ENGINES") {
                      ce.destroy();
                    }
                    else if (temp2 == "PORT") {
                      cp.destroy();
                    }
                    else if (temp2 == "Guns") {
                      cg.destroy();
                    }
                    temp2 = "";
                  }
                  else{
                      var t = cards.indexOf(temp2);
                      cards.splice(t, 1);
                      cards.filter(val => val);
                      pdis.push(temp2);
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
                          p15.setScale(1/8);
                          hove(p15, th, p[15]);
                          bselect(p15, th, p[15]);
                        }
                        if(l > 7){
                          p7 = th.add.image(125, 550, p[7]).setInteractive({ useHandCursor: true  } );
                          p7.setScale(1/8);
                          hove(p7, th, p[7]);
                          bselect(p7, th, p[7]);
                        }
                        if(l > 8){
                          p8 = th.add.image(187, 550, p[8]).setInteractive({ useHandCursor: true  } );
                          p8.setScale(1/8);
                          hove(p8, th, p[8]);
                          bselect(p8, th, p[8]);
                        }
                        if(l > 0){
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                        }
                        if(l > 9){
                          p9 = th.add.image(312, 550, p[9]).setInteractive({ useHandCursor: true  } );
                          p9.setScale(1/8);
                          hove(p9, th, p[9]);
                          bselect(p9, th, p[9]);
                        }
                        if(l > 1){
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                        }
                        if(l > 10){
                          p10 = th.add.image(437, 550, p[10]).setInteractive({ useHandCursor: true  } );
                          p10.setScale(1/8);
                          hove(p10, th, p[10]);
                          bselect(p10, th, p[10]);
                        }
                        if(l > 2){
                          p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
                          p2.setScale(1/8);
                          hove(p2, th, p[2]);
                          bselect(p2, th, p[2]);
                        }
                        if(l > 11){
                          p11 = th.add.image(562, 550, p[11]).setInteractive({ useHandCursor: true  } );
                          p11.setScale(1/8);
                          hove(p11, th, p[11]);
                          bselect(p11, th, p[11]);
                        }
                        if(l > 3){
                          p3 = th.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
                          p3.setScale(1/8);
                          hove(p3, th, p[3]);
                          bselect(p3, th, p[3]);
                        }
                        if(l > 12){
                          p12 = th.add.image(687, 550, p[12]).setInteractive({ useHandCursor: true  } );
                          p12.setScale(1/8);
                          hove(p12, th, p[12]);
                          bselect(p12, th, p[12]);
                        }
                        if(l > 4){
                          p4 = th.add.image(750, 550, p[4]).setInteractive({ useHandCursor: true  } );
                          p4.setScale(1/8);
                          hove(p4, th, p[4]);
                          bselect(p4, th, p[4]);
                        }
                        if(l > 13){
                          p13 = th.add.image(812, 550, p[13]).setInteractive({ useHandCursor: true  } );
                          p13.setScale(1/8);
                          hove(p13, th, p[13]);
                          bselect(p13, th, p[13]);
                        }
                        if(l > 16){
                          p16 = th.add.image(850, 550, p[16]).setInteractive({ useHandCursor: true  } );
                          p16.setScale(1/8);
                          hove(p16, th, p[16]);
                          bselect(p16, th, p[16]);
                        }
                        if(l > 5){
                          p5 = th.add.image(875, 550, p[5]).setInteractive({ useHandCursor: true  } );
                          p5.setScale(1/8);
                          hove(p5, th, p[5]);
                          bselect(p5, th, p[5]);
                        }
                        if(l > 14){
                          p14 = th.add.image(937, 550, p[14]).setInteractive({ useHandCursor: true  } );
                          p14.setScale(1/8);
                          hove(p14, th, p[14]);
                          bselect(p14, th, p[14]);
                        }
                        if(l > 6){
                          p6 = th.add.image(1000, 550, p[6]).setInteractive({ useHandCursor: true  } );
                          p6.setScale(1/8);
                          hove(p6, th, p[6]);
                          bselect(p6, th, p[6]);
                        }
                      }
                  }
                }
                else if (type == "total") {
                  if(total >= cost){
                    //console.log("Aquire");
                    coin = 0;
                    skill = 0;
                    total = 0;
                    card = 0;
                    big.destroy();
                    big = null;
                    if(checkScore == "yes"){
                      checkScore = "no";
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
                    else{
                    if(temp2 == "COM" || temp2 == "ENGINES" || temp2 == "PORT" || temp2 == "Guns"){
                    game += 1;
                    if(game > 3){
                        th.sound.add('click').play();
                        th.scene.start('win');
                    }
                    if(temp2 == "COM"){
                      cc.destroy();
                    }
                    else if (temp2 == "ENGINES") {
                      ce.destroy();
                    }
                    else if (temp2 == "PORT") {
                      cp.destroy();
                    }
                    else if (temp2 == "Guns") {
                      cg.destroy();
                    }
                    temp2 = "";
                  }
                  else{
                      var t = cards.indexOf(temp2);
                      cards.splice(t, 1);
                      cards.filter(val => val);
                      pdis.push(temp2);
                      if (typeof cards[5] !== 'undefined') {
                        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                        c5.setScale(1/8);
                        hove(c5, th, cards[5]);
                        select(c5, th, cards[5]);
                      }
                      else {
                        shuffle(dis);
                        cards = cards.concat(dis);
                        dis = [];
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
                          p15.setScale(1/8);
                          hove(p15, th, p[15]);
                          bselect(p15, th, p[15]);
                        }
                        if(l > 7){
                          p7 = th.add.image(125, 550, p[7]).setInteractive({ useHandCursor: true  } );
                          p7.setScale(1/8);
                          hove(p7, th, p[7]);
                          bselect(p7, th, p[7]);
                        }
                        if(l > 8){
                          p8 = th.add.image(187, 550, p[8]).setInteractive({ useHandCursor: true  } );
                          p8.setScale(1/8);
                          hove(p8, th, p[8]);
                          bselect(p8, th, p[8]);
                        }
                        if(l > 0){
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                        }
                        if(l > 9){
                          p9 = th.add.image(312, 550, p[9]).setInteractive({ useHandCursor: true  } );
                          p9.setScale(1/8);
                          hove(p9, th, p[9]);
                          bselect(p9, th, p[9]);
                        }
                        if(l > 1){
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                        }
                        if(l > 10){
                          p10 = th.add.image(437, 550, p[10]).setInteractive({ useHandCursor: true  } );
                          p10.setScale(1/8);
                          hove(p10, th, p[10]);
                          bselect(p10, th, p[10]);
                        }
                        if(l > 2){
                          p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
                          p2.setScale(1/8);
                          hove(p2, th, p[2]);
                          bselect(p2, th, p[2]);
                        }
                        if(l > 11){
                          p11 = th.add.image(562, 550, p[11]).setInteractive({ useHandCursor: true  } );
                          p11.setScale(1/8);
                          hove(p11, th, p[11]);
                          bselect(p11, th, p[11]);
                        }
                        if(l > 3){
                          p3 = th.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
                          p3.setScale(1/8);
                          hove(p3, th, p[3]);
                          bselect(p3, th, p[3]);
                        }
                        if(l > 12){
                          p12 = th.add.image(687, 550, p[12]).setInteractive({ useHandCursor: true  } );
                          p12.setScale(1/8);
                          hove(p12, th, p[12]);
                          bselect(p12, th, p[12]);
                        }
                        if(l > 4){
                          p4 = th.add.image(750, 550, p[4]).setInteractive({ useHandCursor: true  } );
                          p4.setScale(1/8);
                          hove(p4, th, p[4]);
                          bselect(p4, th, p[4]);
                        }
                        if(l > 13){
                          p13 = th.add.image(812, 550, p[13]).setInteractive({ useHandCursor: true  } );
                          p13.setScale(1/8);
                          hove(p13, th, p[13]);
                          bselect(p13, th, p[13]);
                        }
                        if(l > 16){
                          p16 = th.add.image(850, 550, p[16]).setInteractive({ useHandCursor: true  } );
                          p16.setScale(1/8);
                          hove(p16, th, p[16]);
                          bselect(p16, th, p[16]);
                        }
                        if(l > 5){
                          p5 = th.add.image(875, 550, p[5]).setInteractive({ useHandCursor: true  } );
                          p5.setScale(1/8);
                          hove(p5, th, p[5]);
                          bselect(p5, th, p[5]);
                        }
                        if(l > 14){
                          p14 = th.add.image(937, 550, p[14]).setInteractive({ useHandCursor: true  } );
                          p14.setScale(1/8);
                          hove(p14, th, p[14]);
                          bselect(p14, th, p[14]);
                        }
                        if(l > 6){
                          p6 = th.add.image(1000, 550, p[6]).setInteractive({ useHandCursor: true  } );
                          p6.setScale(1/8);
                          hove(p6, th, p[6]);
                          bselect(p6, th, p[6]);
                        }
                      }
                  }
                }
                else if (type == "card") {
                  if(total >= cost){
                    //console.log("Aquire");
                    coin = 0;
                    skill = 0;
                    total = 0;
                    card = 0;
                    big.destroy();
                    big = null;
                    if(checkScore == "yes"){
                      checkScore = "no";
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
                    else{
                    if(temp2 == "COM" || temp2 == "ENGINES" || temp2 == "PORT" || temp2 == "Guns"){
                    game += 1;
                    if(game > 3){
                        th.sound.add('click').play();
                        th.scene.start('win');
                    }
                    if(temp2 == "COM"){
                      cc.destroy();
                    }
                    else if (temp2 == "ENGINES") {
                      ce.destroy();
                    }
                    else if (temp2 == "PORT") {
                      cp.destroy();
                    }
                    else if (temp2 == "Guns") {
                      cg.destroy();
                    }
                    temp2 = "";
                  }
                  else{
                      var t = cards.indexOf(temp2);
                      cards.splice(t, 1);
                      cards.filter(val => val);
                      pdis.push(temp2);
                      if (typeof cards[5] !== 'undefined') {
                        c5 = th.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
                        c5.setScale(1/8);
                        hove(c5, th, cards[5]);
                        select(c5, th, cards[5]);
                      }
                      else {
                        shuffle(dis);
                        cards = cards.concat(dis);
                        dis = [];
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
                          p15.setScale(1/8);
                          hove(p15, th, p[15]);
                          bselect(p15, th, p[15]);
                        }
                        if(l > 7){
                          p7 = th.add.image(125, 550, p[7]).setInteractive({ useHandCursor: true  } );
                          p7.setScale(1/8);
                          hove(p7, th, p[7]);
                          bselect(p7, th, p[7]);
                        }
                        if(l > 8){
                          p8 = th.add.image(187, 550, p[8]).setInteractive({ useHandCursor: true  } );
                          p8.setScale(1/8);
                          hove(p8, th, p[8]);
                          bselect(p8, th, p[8]);
                        }
                        if(l > 0){
                          p0 = th.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
                          p0.setScale(1/8);
                          hove(p0, th, p[0]);
                          bselect(p0, th, p[0]);
                        }
                        if(l > 9){
                          p9 = th.add.image(312, 550, p[9]).setInteractive({ useHandCursor: true  } );
                          p9.setScale(1/8);
                          hove(p9, th, p[9]);
                          bselect(p9, th, p[9]);
                        }
                        if(l > 1){
                          p1 = th.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
                          p1.setScale(1/8);
                          hove(p1, th, p[1]);
                          bselect(p1, th, p[1]);
                        }
                        if(l > 10){
                          p10 = th.add.image(437, 550, p[10]).setInteractive({ useHandCursor: true  } );
                          p10.setScale(1/8);
                          hove(p10, th, p[10]);
                          bselect(p10, th, p[10]);
                        }
                        if(l > 2){
                          p2 = th.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
                          p2.setScale(1/8);
                          hove(p2, th, p[2]);
                          bselect(p2, th, p[2]);
                        }
                        if(l > 11){
                          p11 = th.add.image(562, 550, p[11]).setInteractive({ useHandCursor: true  } );
                          p11.setScale(1/8);
                          hove(p11, th, p[11]);
                          bselect(p11, th, p[11]);
                        }
                        if(l > 3){
                          p3 = th.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
                          p3.setScale(1/8);
                          hove(p3, th, p[3]);
                          bselect(p3, th, p[3]);
                        }
                        if(l > 12){
                          p12 = th.add.image(687, 550, p[12]).setInteractive({ useHandCursor: true  } );
                          p12.setScale(1/8);
                          hove(p12, th, p[12]);
                          bselect(p12, th, p[12]);
                        }
                        if(l > 4){
                          p4 = th.add.image(750, 550, p[4]).setInteractive({ useHandCursor: true  } );
                          p4.setScale(1/8);
                          hove(p4, th, p[4]);
                          bselect(p4, th, p[4]);
                        }
                        if(l > 13){
                          p13 = th.add.image(812, 550, p[13]).setInteractive({ useHandCursor: true  } );
                          p13.setScale(1/8);
                          hove(p13, th, p[13]);
                          bselect(p13, th, p[13]);
                        }
                        if(l > 16){
                          p16 = th.add.image(850, 550, p[16]).setInteractive({ useHandCursor: true  } );
                          p16.setScale(1/8);
                          hove(p16, th, p[16]);
                          bselect(p16, th, p[16]);
                        }
                        if(l > 5){
                          p5 = th.add.image(875, 550, p[5]).setInteractive({ useHandCursor: true  } );
                          p5.setScale(1/8);
                          hove(p5, th, p[5]);
                          bselect(p5, th, p[5]);
                        }
                        if(l > 14){
                          p14 = th.add.image(937, 550, p[14]).setInteractive({ useHandCursor: true  } );
                          p14.setScale(1/8);
                          hove(p14, th, p[14]);
                          bselect(p14, th, p[14]);
                        }
                        if(l > 6){
                          p6 = th.add.image(1000, 550, p[6]).setInteractive({ useHandCursor: true  } );
                          p6.setScale(1/8);
                          hove(p6, th, p[6]);
                          bselect(p6, th, p[6]);
                        }
                      }
                  }
                }
              }
              else{
                // add card description //bob
              }
            });
            return skill;
            return coin;
          }
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB", "EMP"];
        var p = ["P1S", "P1S", "P1S", "P1S", "P1C", "P1C"];
        shuffle(cards);
        shuffle(p);
        back = this.add.image(512, 320, 'back');
        var i;
        for (i = 6; i < cards.length; i++) {
          var c = this.add.image(125, 400, cards[i]).setInteractive({ useHandCursor: true  } );
          c.setScale(1/8);
          this.input.on('gameobjectdown', function (pointer, gameObject) {
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
        game = 0;
        score = 30;
        cscore = 0;
        checkScore = "no";
        var healthText = this.add.text(250, 30, 'Health: 50', { fontSize: '64px', fill: '#fff' });
        var scoreText = this.add.text(250, 90, 'Score: 30', { fontSize: '64px', fill: '#fff' });
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
        var tscore = this.add.image(825, 200, 'SCORE').setInteractive({ useHandCursor: true  } );
        tend.setScale(1/3);
        tscore.setScale(1/3);
        tscore.on('pointerdown', () => {
          this.sound.add('click').play();
          if(checkScore == "yes"){
            checkScore = "no";
          }
          else{
            checkScore = "yes";
          }
        });
        tend.on('pointerdown', () => {
          this.sound.add('click').play();
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
          cost = 0;
          type = 0;
          temp = [];
          temp2 = "";
          hand = 4;
          red = "No";
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
          if(health < 1){
              this.sound.add('click').play();
              this.scene.start('lose');
          }
          healthText.setText('Health:' + health);
          var t = cards.indexOf(c0["texture"]["key"]);
          cards.splice(t, 1);
          cards.filter(val => val);
          dis.push(c0["texture"]["key"]);
          if (typeof cards[5] !== 'undefined') {
            c5 = this.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
            c5.setScale(1/8);
            hove(c5, this, cards[5]);
            select(c5, this, cards[5]);
          }
          else {
            shuffle(dis);
            cards = cards.concat(dis);
            dis = [];
            c5 = this.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
            c5.setScale(1/8);
            hove(c5, this, cards[5]);
            select(c5, this, cards[5]);
          }
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
          var z = hand - 1;
          if (typeof p[z] == 'undefined') {
            shuffle(pdis);
            p = p.concat(pdis);
            pdis = [];
          }
          console.log("before hand: " + hand);
          function draw(start, num){
            var y = 0;
            for (var i = start; i < num; i++) {
              if(typeof p[i] == "undefined"){
                shuffle(pdis);
                p = p.concat(pdis);
                pdis = [];
              }
              console.log("Check: " + p[i]);
              if(p[i] == "Browser" || p[i] == "Driver" || p[i] == "CloudStorage" || p[i] == "IMDS" || p[i] == "User" || p[i] == "FakeInstaller" || p[i] == "OfficeMacro" || p[i] == "Sysmon" || p[i] == "DPAT" || p[i] == "Endpoint" || p[i] == "Sinkhole" || p[i] == "IAM" || p[i] == "MFAB"){
                hand += 1;
                y += 1;
                console.log("Draw: " + p[i]);
              }
            }
            if(y > 0){
              draw(num, hand);
            }
          }
          draw(0,4);
            console.log("after hand: " + hand);
          z = hand - 1;
          if (typeof p[z] == 'undefined') {
            shuffle(pdis);
            p = p.concat(pdis);
            pdis = [];
          }
          console.log("p");
          console.log(p);
          if(hand > 15 && typeof p[15] != 'undefined'){
            p15 = this.add.image(63, 550, p[15]).setInteractive({ useHandCursor: true  } );
            p15.setScale(1/8);
            hove(p15, this, p[15]);
            bselect(p15, this, p[15]);
          }
          if(hand > 7 && typeof p[7] != 'undefined'){
            p7 = this.add.image(125, 550, p[7]).setInteractive({ useHandCursor: true  } );
            p7.setScale(1/8);
            hove(p7, this, p[7]);
            bselect(p7, this, p[7]);
          }
          if(hand > 8 && typeof p[8] != 'undefined'){
            p8 = this.add.image(187, 550, p[8]).setInteractive({ useHandCursor: true  } );
            p8.setScale(1/8);
            hove(p8, this, p[8]);
            bselect(p8, this, p[8]);
          }
          if(hand > 0 && typeof p[0] != 'undefined'){
            p0 = this.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
            p0.setScale(1/8);
            hove(p0, this, p[0]);
            bselect(p0, this, p[0]);
          }
          if(hand > 9 && typeof p[9] != 'undefined'){
            p9 = this.add.image(312, 550, p[9]).setInteractive({ useHandCursor: true  } );
            p9.setScale(1/8);
            hove(p9, this, p[9]);
            bselect(p9, this, p[9]);
          }
          if(hand > 1 && typeof p[1] != 'undefined'){
            p1 = this.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
            p1.setScale(1/8);
            hove(p1, this, p[1]);
            bselect(p1, this, p[1]);
          }
          if(hand > 10 && typeof p[10] != 'undefined'){
            p10 = this.add.image(437, 550, p[10]).setInteractive({ useHandCursor: true  } );
            p10.setScale(1/8);
            hove(p10, this, p[10]);
            bselect(p10, this, p[10]);
          }
          if(hand > 2 && typeof p[2] != 'undefined'){
            p2 = this.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
            p2.setScale(1/8);
            hove(p2, this, p[2]);
            bselect(p2, this, p[2]);
          }
          if(hand > 11 && typeof p[11] != 'undefined'){
            p11 = this.add.image(562, 550, p[11]).setInteractive({ useHandCursor: true  } );
            p11.setScale(1/8);
            hove(p11, this, p[11]);
            bselect(p11, this, p[11]);
          }
          if(hand > 3 && typeof p[3] != 'undefined'){
            p3 = this.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
            p3.setScale(1/8);
            hove(p3, this, p[3]);
            bselect(p3, this, p[3]);
          }
          if(hand > 12 && typeof p[12] != 'undefined'){
            p12 = this.add.image(687, 550, p[12]).setInteractive({ useHandCursor: true  } );
            p12.setScale(1/8);
            hove(p12, this, p[12]);
            bselect(p12, this, p[12]);
          }
          if(hand > 4 && typeof p[4] != 'undefined'){
            p4 = this.add.image(750, 550, p[4]).setInteractive({ useHandCursor: true  } );
            p4.setScale(1/8);
            hove(p4, this, p[4]);
            bselect(p4, this, p[4]);
          }
          if(hand > 13 && typeof p[13] != 'undefined'){
            p13 = this.add.image(812, 550, p[13]).setInteractive({ useHandCursor: true  } );
            p13.setScale(1/8);
            hove(p13, this, p[13]);
            bselect(p13, this, p[13]);
          }
          if(hand > 16 && typeof p[16] != 'undefined'){
            p16 = this.add.image(850, 550, p[16]).setInteractive({ useHandCursor: true  } );
            p16.setScale(1/8);
            hove(p16, this, p[16]);
            bselect(p16, this, p[16]);
          }
          if(hand > 5 && typeof p[5] != 'undefined'){
            p5 = this.add.image(875, 550, p[5]).setInteractive({ useHandCursor: true  } );
            p5.setScale(1/8);
            hove(p5, this, p[5]);
            bselect(p5, this, p[5]);
          }
          if(hand > 14 && typeof p[14] != 'undefined'){
            p14 = this.add.image(937, 550, p[14]).setInteractive({ useHandCursor: true  } );
            p14.setScale(1/8);
            hove(p14, this, p[14]);
            bselect(p14, this, p[14]);
          }
          if(hand > 6 && typeof p[6] != 'undefined'){
            p6 = this.add.image(1000, 550, p[6]).setInteractive({ useHandCursor: true  } );
            p6.setScale(1/8);
            hove(p6, this, p[6]);
            bselect(p6, this, p[6]);
          }
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

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;

    });
    }
});
var Lose = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Lose ()
    {
        Phaser.Scene.call(this, { key: 'lose' });
    },

    preload: function ()
    {
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB"];
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
        var loseText = this.add.text(700, 300, 'Defeat!', { fontSize: '64px', fill: '#fff' });
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
          d.setScale(1/3);
        });
        d.on('pointerout',function(pointer){
          d.setScale(1/4);
        });
        d.on('pointerdown', () => {
          this.sound.add('click').play();
          this.scene.start('p1');
        });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;

    });
    }
});
var Win = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Win ()
    {
        Phaser.Scene.call(this, { key: 'win' });
    },

    preload: function ()
    {
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB"];
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
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB"];
        shuffle(cards);
        this.add.image(512, 320, 'back');
        var i;
        var c = this.add.image(250, 300, 'cb');
        c.setScale(1/2);
        var winText = this.add.text(700, 300, 'Victory!', { fontSize: '64px', fill: '#fff' });
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
          d.setScale(1/3);
        });
        d.on('pointerout',function(pointer){
          d.setScale(1/4);
        });
        d.on('pointerdown', () => {
          this.sound.add('click').play();
          this.scene.start('p1');
        });

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
    scene: [ Vide, TitleS, P1, Lose, Win ]
};

var game = new Phaser.Game(config);
