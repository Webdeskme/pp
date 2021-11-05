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
      this.echo('ls: list\ncd "dirname": change directories\ncd "../": to go back\ncat "filename": to read a file\npwd: current directory');
    },
    ls: function() {
      if(dir == "/"){
        this.echo('inbox\nnavigation\nserver_info');
      }
      else if(dir == "/inbox"){
        this.echo(inbox);
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
      else if(dir == "/inbox" || dir == "/navigation"){
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
      }
    }
}, {
    greetings: greetings.innerHTML + '\n\nShip: SANS504 \nChief Security Officer \nhelp to start. \ntype exit to exit\n\n'
});
