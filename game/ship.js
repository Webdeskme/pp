$('body').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Wellcome to this terminal.');
    }
}, {
    greetings: 'Ship: SANS504 \nChief Security Officer \nls to start. \ntype exit to exit';
});
