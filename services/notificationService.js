/*
 *Musica beta
 *Carlos Fernandez Jimenez
 *Servicio para mostras notificaciones al usuario
 */

(function() {
    'use strict';
    angular
        .module('musicaBeta')
        .factory('notificationService', notificationService);

	function notificationService(Notification) {

        var delay = 6000;
                
        function setError (pMessage) {
            return Notification.error({message: pMessage, title: 'Failure', delay: delay});
        };

        function setSuccess (pMessage) {
            return Notification.success({message: pMessage, title: 'Success', delay: delay});
        };

        function setInfo (pMessage) {
            return Notification.info({message: pMessage, title: 'Information ', delay: delay});
        };

        function setWarning (pMessage) {
            return Notification.warning({message: pMessage, title: 'Warning !', delay: delay});
        };
		
        return {
            showError: function(pMessage) {
                return setError(pMessage);             
            }, 
            showSuccess: function(pMessage) {
                return setSuccess(pMessage);
            },
            showInfo: function(pMessage) {
                return setInfo(pMessage);
            },
            showWarning: function(pMessage) {
                return setWarning(pMessage);
            }    
        };   
    };

})();