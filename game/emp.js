var P1 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function P1 ()
    {
        Phaser.Scene.call(this, { key: 'p1' });
    },
    preload: function ()
    {
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "Service", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WateringHole", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB", "EMP3", "P1S", "P1C"];
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
      this.game.sound.stopAll();
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
          var red = "no";
          var reds = "";
          function select(c, th, im){
            c.on('pointerdown',function(pointer){
              th.sound.add('click').play();
              if(reds == c["texture"]["key"]){
                c.clearTint();
                reds = "";
                red = "no";
              }
              else if(c["texture"]["key"] != "EMP3"){
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
          function bselect(c, th, im,){
            c.on('pointerdown',function(pointer){
              var aquire = "no";
              th.sound.add('click').play();
              if(red == "yes"){
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
                      if(game > 3){
                        th.sound.add('mwin').play();
                        if(localStorage.getItem(localStorageName) == null) {
                            highScore = 40;
                        } else {
                            highScore = localStorage.getItem(localStorageName);
                        }
                        if(score < highScore){
                          localStorage.setItem(localStorageName, score);
                        }
                        localStorage.setItem(localStorageTemp, score);
                        //if(player == 1){
                          localStorage.setItem(localStorageBadge, "badge1");
                        //}
                        window.location.href = "win.html";
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
                    if(game > 3){
                        th.sound.add('mwin').play();
                        if(localStorage.getItem(localStorageName) == null) {
                            highScore = 40;
                        } else {
                            highScore = localStorage.getItem(localStorageName);
                        }
                        if(score < highScore){
                          localStorage.setItem(localStorageName, score);
                        }
                        localStorage.setItem(localStorageTemp, score);
                        //if(player == 1){
                          localStorage.setItem(localStorageBadge, "badge1");
                        //}
                        window.location.href = "win.html";
                    }
                    if(temp2 == "COM"){
                      th.sound.add('comp').play();
                      cc.destroy();
                    }
                    else if (temp2 == "ENGINES") {
                      th.sound.add('comp').play();
                      ce.destroy();
                    }
                    else if (temp2 == "PORT") {
                      th.sound.add('comp').play();
                      cp.destroy();
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
                }
              }
              else{
                setTimeout(function()
                {
                    th.sound.add(c["texture"]["key"]).play();

                }, 1000);
              }
            });
            return skill;
            return coin;
          }
          // "Service", "WateringHole",
        var cards = ["Browser", "Malware", "PrivilegeEsc", "Driver", "CloudStorage", "IMDS", "MFA", "User", "CloudAccount", "CredStuffing", "Kubelet", "WebShell", "FakeInstaller", "OfficeMacro", "ShadowCopy", "Sysmon", "Behavior", "DPAT", "Endpoint", "SIEM", "Sinkhole", "ZeroTrust", "IAM", "SRUM", "MFAB", "EMP3"];
        var p = ["P1S", "P1S", "P1S", "P1S", "P1C", "P1C"];
        shuffle(cards);
        shuffle(p);
        back = this.add.image(512, 320, 'back');
        skill = 0;
        coin = 0;
        total = 0;
        card = 0;
        scard = 0;
        ccard = 0;
        aq = 0;
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
        var localStorageName = "piratesPort";
        var localStorageTemp = "piratesPort_temp";
        var localStorageBadge = "piratesPort_badge1";
        var highScore;
        var healthText = this.add.bitmapText(250, 30, 'topaz', 'Health: 50', 48);
        var scoreText = this.add.bitmapText(250, 90, 'topaz', 'Score: 30', 48);
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
          else if (c0["texture"]["key"] == "EMP3") {
            health -= 15;
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
              window.location.href = "lose.html";
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
        });
        c5 = this.add.image(250, 400, cards[5]).setInteractive({ useHandCursor: true  } );
        hove(c5, this, cards[5] + 'big');
        select(c5, this, cards[5]);
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
        var ma = ["COM", "COM2"];
        shuffle(ma);
        cc = this.add.image(250, 250, ma[0]).setInteractive({ useHandCursor: true  } );
        hove(cc, this, ma[0] + 'big');
        select(cc, this, ma[0]);
        ma = ["ENGINES", "ENGINES2"];
        shuffle(ma);
        ce = this.add.image(375, 250, ma[0]).setInteractive({ useHandCursor: true  } );
        hove(ce, this, ma[0] + 'big');
        select(ce, this, ma[0]);
        ma = ["PORT", "PORT2"];
        shuffle(ma);
        por = "PORT";
        if(ma[0] == "PORT2"){
          por = "PORT2";
        }
        cp = this.add.image(500, 250, ma[0]).setInteractive({ useHandCursor: true  } );
        hove(cp, this, ma[0] + 'big');
        select(cp, this, ma[0]);
        cg = this.add.image(625, 250, "Guns").setInteractive({ useHandCursor: true  } );
        hove(cg, this, 'Guns' + 'big');
        select(cg, this, 'Guns');
        p0 = this.add.image(250, 550, p[0]).setInteractive({ useHandCursor: true  } );
        hove(p0, this, p[0] + 'big');
        bselect(p0, this, p[0]);
        p1 = this.add.image(375, 550, p[1]).setInteractive({ useHandCursor: true  } );
        hove(p1, this, p[1] + 'big');
        bselect(p1, this, p[1]);
        p2 = this.add.image(500, 550, p[2]).setInteractive({ useHandCursor: true  } );
        hove(p2, this, p[2] + 'big');
        bselect(p2, this, p[2]);
        p3 = this.add.image(625, 550, p[3]).setInteractive({ useHandCursor: true  } );
        hove(p3, this, p[3] + 'big');
        bselect(p3, this, p[3]);
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });
  },
  update() {}
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
    render: {
      clearBeforeRender: false
    },
     enableDebug: false,
    backgroundColor: '#000000',
    scene: [ P1 ]
};
var game = new Phaser.Game(config);
