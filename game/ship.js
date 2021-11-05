dir = "/";
$('body').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Wellcome to this terminal.');
    },
    exit: function() {
      window.location.href = "game.html";
    },
    help: function() {
      this.echo('ls: list\ncd "dirname": change directories\ncd "../": to go back\ncat "filename": to read a file');
    },
    ls: function() {
      if(dir == "/"){
        this.echo('inbox\nnavigation\nserver_info');
      }
    },
    cd: function(d) {
      if(dir == "/"){
        if(d == "inbox"){
          this.echo('');
        }
        else if(d == "navigation"){
          this.echo('');
        }
        else if(d == "server_info"){
          this.echo('');
        }
        else{
          this.echo('Error: Location not found.');
        }
      }
    }
}, {
    greetings: 'Ship: SANS504 \nChief Security Officer \nhelp to start. \ntype exit to exit'
});
