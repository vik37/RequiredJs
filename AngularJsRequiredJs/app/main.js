require.config({
    paths: {
        'angular':'/bower_components/angular/angular',
        'jquery':'/bower_components/jquery/dist/jquery',
        'app':'app',
        'coreModule' : 'coreModule',

    },
    shim:{
        'angular':{
            deps:['jquery']
        },
        'app':{
            deps: ['angular','coreModule']
        },

        'coreModule':{
            deps:['angular']
        }
    }
});

require(['app'],function(){
    angular.bootstrap(document, ['app']);
})