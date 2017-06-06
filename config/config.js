/*
 *Musica beta
 *Carlos Fernandez Jimenez
 *Configuracion de firebase
 */
 

(function() {
    'use strict';

    var config = {
        apiKey: "AIzaSyANbbpFqPPTo-8B0d-gFPNqnaTnLwoMxOc",
        authDomain: "musica-beta.firebaseapp.com",
        databaseURL: "https://musica-beta.firebaseio.com",
        projectId: "musica-beta",
        storageBucket: "musica-beta.appspot.com",
        messagingSenderId: "617631869199"
   };
   firebase.initializeApp(config);

})();