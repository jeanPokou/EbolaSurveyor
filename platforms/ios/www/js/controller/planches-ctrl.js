(function () {
    'use strict';

    angular.module('ebolaApp').controller('planchesCtrl', ['ebolaApi','$ionicPopup',planchesCtrl]);
    function planchesCtrl(ebolaApi, $ionicPopup) {
        var self = this;

        var planchesData=ebolaApi.getPlanchesData();

       // console.log(planchesData);
        self.planchesData=planchesData;

       /* self.showConfirm=function(e){

            var confirmPopup = $ionicPopup.confirm({
                title: 'Fermer',
                template: 'Etes vous sur de vouloir fermer Ebola Surveyor?'
            });
            confirmPopup.then(function(res) {
                if(res==true) {
                     navigator.app.exitApp();
                } else {
                    history.go(-1);
                    navigator.app.backhistory();
                }
            });

        };*/





         document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            document.addEventListener("backbutton", backButtonEvent, false);
        }
        function backButtonEvent(e) {

            var currentUrl=window.location.hash;
            if(currentUrl=='#/app/planchesList' || currentUrl=='#/'){

                navigator.app.exitApp();
            }
                /*e.preventDefault();
                var r=confirm("Fermer","Etes vous sur de vouloir fermer Ebola Surveyor ?");
                if(r==true){
                    navigator.app.exitApp();
                }
                else{
                    history.go(-1);
                    navigator.app.backhistory();
                }

                return false;

            }*/
            else{
                history.go(-1);
                navigator.app.backhistory();
            }
        }



      /*  self.selectPlanches=function(plancheId){

            $state.go("app.plancheDetails");
        };*/


    }
})();