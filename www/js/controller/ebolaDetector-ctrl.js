(function () {
    'use strict';

    angular.module('ebolaApp').controller('ebolaDetectorCtrl', ['ebolaApi','$cordovaToast',ebolaDetectorCtrl]);
    function ebolaDetectorCtrl(ebolaApi,$cordovaToast) {
        var self = this;

        var data=ebolaApi.getEbolaDetectorData();
       // console.log(data[0].title);


        self.initial=data[0];
        self.final=data[1];
        self.refresh1=function() {
            angular.forEach(self.initial.reponses, function (item) {
                   item.statusChecked=0;
            });


        };
        self.refresh2=function() {
            angular.forEach(self.final.reponses, function (item) {
                item.statusChecked=0;
            });


        };
        self.checkAnswers1=function(){
            var i=0;
            angular.forEach(self.initial.reponses, function (item) {
                if(item.statusChecked==true){
                    i++;
                }
            });
            if(i==4){

                $cordovaToast.show(self.initial.MessageNegatif, 'long', 'bottom').then(function(success) {
                    console.log('success');
                }, function (error) {
                    console.log('error');
                });
            }
            else{
                $cordovaToast.show(self.initial.MessagePositif, 'long', 'bottom').then(function(success) {
                    console.log('success');
                }, function (error) {
                    console.log('error');
                });
            }
        };


        self.checkAnswers2=function(){
            var i=0;
            angular.forEach(self.final.reponses, function (item) {
                if(item.statusChecked==true){
                    i++;
                }
            });
            if(i>=4){
                $cordovaToast.show(self.final.MessageNegatif, 'long', 'bottom').then(function(success) {
                    console.log('success');
                }, function (error) {
                    console.log('error');
                });
            }
            else{
                $cordovaToast.show(self.final.MessagePositif, 'long', 'bottom').then(function(success) {
                    console.log('success');
                }, function (error) {
                    console.log('error');
                });
            }
        };








    }
})();