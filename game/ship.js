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
      this.echo('ls: list\ncd "dirname": change directories\ncat "filename": to read a file');
    },
    ls: function() {
      if(dir = "/"){
        this.echo('inbox\nnavigation\nserver_info');
      }
    }
}, {
    greetings: 'Ship: SANS504 \nChief Security Officer \nhelp to start. \ntype exit to exit'
});
