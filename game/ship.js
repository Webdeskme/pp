$('body').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what +
                  '. Wellcome to this terminal.');
    }
}, {
    greetings: 'Ship: SANS504 \n Chief Security Officer \n ls to start.'
});
