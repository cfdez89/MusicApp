/*
 *Musica beta
 *Carlos Fernandez Jimenez
 *Configuracion de la app
 */
 
'use strict';
angular
    .module('musicaBeta', [
        'ui.router',
        'ui-notification',
        'ui.bootstrap'
    ]);

(function() {
    'use strict';
    angular
        .module('musicaBeta')
        .config(routes);
    
        routes.$inject = ['$stateProvider', '$urlRouterProvider'];

        function routes($stateProvider, $urlRouterProvider) { 
            $urlRouterProvider
                .otherwise('/');
            $stateProvider
                .state('no-logged', {
                    abstract: true,
                    url: '',
                    templateUrl: '/components/layout/layout.html'
                })
                .state('home', {
                    url: '/', 
                    parent: 'no-logged',
                    templateUrl:'/components/home/home.html',
                    controller: 'homeCtl as vm'
                })
                .state('album', {
                    url: '/album/',
                    parent: 'no-logged', 
                    templateUrl:'/components/albums/album.html',
                    controller: 'albumCtl as vm'
                })
                
        };

})();