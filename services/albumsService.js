/*
 *Musica beta
 *Carlos Fernandez Jimenez
 *Servicio para obtener datos relacionados a albums
 */

(function() {
    'use strict';

    angular
        .module('musicaBeta')
        .service('albumsService', albumsService);

    albumsService.$inject = ['ALBUMS'];

    function albumsService(ALBUMS) {
		
         function getAlbums() {
            return  firebase.database().ref(ALBUMS);
         };

         function putAlbum(id, data) {
            return firebase.database().ref().child(ALBUMS+id).update(data);
		};
        return {
            allAlbums: function() {
                return getAlbums();             
            },
            updateAlbum: function(id, data) {
                return putAlbum(id, data);
            }
        }  
    };
	
})();