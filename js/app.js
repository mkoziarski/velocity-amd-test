requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery'
    }
});

requirejs(['app/main']);
