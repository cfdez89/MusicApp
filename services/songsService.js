/*
 *Musica beta
 *Carlos Fernandez Jimenez
 *Servicio para obtener datos relacionados a las canciones
 */

(function() {
    'use strict';

    angular
        .module('musicaBeta')
        .service('songsService', songsService);

    songsService.$inject = ['SONGS'];

    function songsService(SONGS) {
		
        function getSongs() {
            return  firebase.database().ref(SONGS);
        };

        function putSong(id, data) {
            return firebase.database().ref().child(SONGS+id).update(data);
		};
        return {
            allSongs: function() {
                return getSongs();             
            },
            updateSong: function(id, data) {
                return putSong(id, data);
            }
        }  
    };
	
})();