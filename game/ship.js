dir = "/";
inbox = "Rescue.txt";
$('body').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Wellcome to this terminal.');
    },
    exit: function() {
      window.location.href = "game.html";
    },
    help: function() {
      this.echo('ls: list\ncd "dirname": change directories\ncd "../": to go back\ncat "filename": to read a file\npwd: current directory\nnav "#": to navigate to tht planet');
    },
    ls: function() {
      if(dir == "/"){
        this.echo('inbox\nnavigation\nserver_info');
      }
      else if(dir == "/inbox"){
        this.echo(inbox);
      }
      else if(dir == "/navigation"){
        this.echo('1: The Half Rift\n2: The Shallow Earth\n3: The Blooming Globe\n4: The Primal Havens\n5: The Primal Havens\n6: The Drifting Province');
      }
      else if (dir == "/server_info") {
        this.echo('logs.txt');
      }
    },
    cd: function(d) {
      if(dir == "/"){
        if(d == "inbox"){
          dir = "/inbox";
        }
        else if(d == "navigation"){
          dir = "/navigation";
        }
        else if(d == "server_info"){
          dir = "/server_info";
        }
        else{
          this.echo('Error: Location not found.');
        }
      }
      else if(dir == "/inbox" || dir == "/navigation" || dir == "/server_info"){
        if(d == "../"){
          dir = "/"
        }
      }
    },
    cat: function(f) {
      if(dir == "/inbox"){
        if(f == "Rescue.txt"){
          this.echo('Internal Comunication\nFrom: The Captain\nTo: The Chief Security Officer\nSubject:Rescue\nI believe the pirates were able to take some important data of the ship. We must locate the pirates and take back that data before it falls into the wrong hand. You are in charge of this mission and the ships navigation is in your hands.');
        }
        else{
          this.echo('Error: No such file.');
        }
      }
      if(dir == "/server_info"){
        if(f == "logs.txt"){
          this.echo('Processor use is at 82%.');
        }
        else{
          this.echo('Error: No such file.');
        }
      }
    },
    pwd: function() {
      this.echo(dir);
    },
    nav: function(n) {
      if(n == 1){
        window.location.href = "galaxy.html";
      }
      if(n == 2){
        window.location.href = "forest.html";
      }
      if(n == 3){
        window.location.href = "djnfber.html";
      }
      if(n == 4){
        window.location.href = "nsrsdhbe.html";
      }
      if(n == 5){
        window.location.href = "qncis.html";
      }
      if(n == 6){
          window.location.href = "fopwne.html";
      }
    }
}, {
    greetings: greetings.innerHTML + '\n\nShip: SANS504 \nChief Security Officer \nhelp to start. \ntype exit to exit\n\n'
});
