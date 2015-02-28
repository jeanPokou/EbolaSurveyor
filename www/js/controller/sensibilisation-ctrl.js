(function () {
    'use strict';

    angular.module('ebolaApp').controller('sensibilisationCtrl', ['$cordovaToast',sensibilisationCtrl]);
    function sensibilisationCtrl($cordovaToast ) {
        var self = this;



        // Called each time the slide changes
        self.slideChanged = function(index) {
            self.slideIndex = index;
           $cordovaToast.show('Here is a message', 'long', 'center').then(function(success) {
                console.log('success');
            }, function (error) {
                console.log('error');
            });

        };




    }


})();