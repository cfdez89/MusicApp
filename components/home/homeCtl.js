/*
 *Musica beta
 *Carlos Fernandez Jimenez
 *Controlador de la vista principal
 */

(function(){
    'use strict';
    angular
        .module('musicaBeta')
        .controller('homeCtl', homeCtl);

    homeCtl.$inject = ['$timeout', 'notificationService', 'albumsService', 'songsService'];

    function homeCtl($timeout, notificationService, albumsService, songsService) {
               
        var vm = this;
        vm.albums = [];
        vm.songs = [];   

        function getAlbums() {
            albumsService.allAlbums().on('value', function(data) {
                $timeout(function() {
                    vm.albums = data.val();
                })
            });
        };

        function getSongs() {
            songsService.allSongs().on('value', function(data) {
                $timeout(function() {
                    vm.songs = data.val();
                })
            });
        };

		function buyAlbum(album) {
            albumsService.updateAlbum(album.id, {vendidos: album.vendidos+1}).then(function() {
                var message = 'Se ha realizado la compra del album: '+album.nombre+' de manera exitosa!';
                notificationService.showSuccess(message);
            })
            .catch(function(error) {
                var message = 'No se ha podido realizar la compra, a causa de una error de conexíon';
                notificationService.showError(message); 
            }); 
		};

        function playSong(song) {
            songsService.updateSong(song.id, {reproducciones: song.reproducciones+1}).then(function() {
                var message = 'Reproduciendo : '+song.nombre;
                notificationService.showInfo(message);
            })
            .catch(function(error) {
                var message = 'No se ha podido reproducir la cancion a causa de una error de conexíon';
                notificationService.showError(message); 
            }); 
		};

		vm.buyAlbum = buyAlbum;
        vm.playSong = playSong;

        getAlbums();
        getSongs();
    };
    	
})();