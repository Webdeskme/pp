$('body').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Wellcome to this terminal.');
    }
}, {
    greetings: 'My First Web Terminal'
});
