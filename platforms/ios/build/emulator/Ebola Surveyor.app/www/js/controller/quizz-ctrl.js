(function () {
    'use strict';

    angular.module('ebolaApp').controller('quizzCtrl', ['$ionicPopup','$cordovaToast','$timeout',quizzCtrl]);
    function quizzCtrl($ionicPopup,$timeout,$cordovaToast) {
        var self = this;


        self.questionsList=[
            { content: " reponse 1", value: false},
            { content: " reponse 1", value: false},
            { content: " reponse 1", value: true}
        ];

     /*    self.questionslist= {

        questions:[
            {title:"questions 1",
                 reponses:[
                 { content: " reponse 1", value: false},
                 { content: " reponse 1", value: false},
                 { content: " reponse 1", value: true}
                ]},
            {title:"questions 2",
                reponses:[
                    { content: " reponse 1", value: false},
                    { content: " reponse 1", value: true},
                    { content: " reponse 1", value: false}
                ]}
            ]

         };*/

        self.showToast=function(){
            $cordovaToast.show('Here is a message', 'long', 'center').then(function(success) {
                console.log("ok");
            }, function (error) {
                console.log(" not ok");
            });

        };


        // Triggered on a button click, or some other target
        self.showPopup = function() {
            self.data = {};

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                templateUrl: 'templates/quizz.html',
                title: 'Planche 1',
                subTitle: 'Choisissez la bonne reponse',
                buttons:[
                    {text:'<b> Fermer </b>',
                        type:'button-positive',
                        onTap:function(){
                            myPopup.close()
                         }
                    }]



            });
           /* myPopup.then(function(res) {
                console.log('Tapped!', res);
            });
           $timeout(function() {
                myPopup.close(); //close the popup after 3 seconds for some reason
            }, 3000);*/
        };

    }
})();