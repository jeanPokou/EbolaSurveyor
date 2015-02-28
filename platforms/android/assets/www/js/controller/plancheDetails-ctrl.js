(function () {
    'use strict';

    angular.module('ebolaApp').controller('plancheDetailsCtrl', ['$stateParams','ebolaApi','$ionicSlideBoxDelegate','$cordovaMedia','$cordovaSocialSharing','$cordovaToast','$ionicPlatform',plancheDetailsCtrl]);
    function plancheDetailsCtrl($stateParams,ebolaApi,$ionicSlideBoxDelegate,$cordovaMedia, $cordovaSocialSharing,$cordovaToast, $ionicPlatform) {
        var self = this;

//        $cordovaSplashscreen.show();

            self.plancheId=Number($stateParams.id);
            var data=ebolaApi.getPlanchesData();

            var planche= _.chain(data)
                .find({"id":self.plancheId})
                .value();

            self.titleContent=planche.title.split(":");
            self.title=self.titleContent[0];
            self.subTitle=self.titleContent[1].toLowerCase();
          //  console.log(self.titleContent[1].toLowerCase());
            self.planche=planche;
            self.imageUrl=planche.imageUrl[0];



            self.reponse=planche.reponse;

           /* var a="\n ok \n b";a.replace('\n','<br>');
            console.log( self.reponse);*/

      /*  console.log(planche.imageUrl[0].url);*/
       /* console.log(planche.reponse);*/

        self.slideChanged = function(index) {
            self.media.stop();
            self.slideIndex = index;

        };



        self.visibleAudio=true;
        self.visibleShareQuizz=true;



        var mediaUrl="/android_asset/www/audio/planche"+self.plancheId+ "/audio.mp3";
       var mediaSource = $cordovaMedia.newMedia(mediaUrl);
         var promise = mediaSource.promise;
        var mediaStatus = mediaSource.mediaStatus;
        self.media = mediaSource.media;
        self.positionMedia=0;
      self.pause=function(){
            $cordovaMedia.pause(self.media);
        };
        self.play=function(){
            setInterval(function(){
                $cordovaMedia.getCurrentPosition(self.media).then(
                    function(position){
                      self.positionMedia=position;
                    },
                    function () {
                        console.log("error");
                    }
                );
            },1000);
                $cordovaMedia.play(self.media);
         };

        self.fastBackward=function(){

            $cordovaMedia.seekTo(self.media,0);

        };
        self.stop=function(){
            $cordovaMedia.stop(self.media);
        };

        self.showAudioReader=function(){

            self.play();


            self.visibleAudio=false;
           self.visibleShareQuizz=false;
        };
        self.hideAudioReader=function(){
          self.stop();
            self.visibleAudio=true;
            self.visibleShareQuizz=true;
        };



         self.slideNext=function(){
             $ionicSlideBoxDelegate.next();
         };


         self.share=function(){
             $cordovaSocialSharing
                 .shareViaFacebook(null,null,self.planche.linkFacebook)
                 .then(function(result) {
                     $cordovaToast.show('Planche partagée avec success', 'long', 'top').then(function(success) {
                         console.log('success');
                     }, function (error) {
                         console.log('error');
                     });
                 }, function(err) {
                     // An error occured. Show a message to the user
                 });
         };

        // function for checking quizz
            self.quizzAnswers=planche.quizzAnswers;
//        console.log(self.quizzAnswers[2].value);

       self.UserCorrectAnswer=[];

        self.checkAnswers=function(){
              /*  var i=0,j=0;
              angular.forEach(self.planche.quizzAnswers,function(item){
                  if(item.checkedStatus==item.value){
                   self.UserCorrectAnswer.push({"name":item.title});
                      item.style="correct";
                        i++;

                  }
                  else
                  item.style="inCorrect";

              });*/




            angular.forEach(self.planche.quizzAnswers,function(item){
                if(item.value==1){
                    item.style="correct";
                    item.checkedStatus=true;
                }
                if(item.value==0){
                    item.checkedStatus=false;
//                    item.style="inCorrect";
                }
            });


            var mediaUrl="/android_asset/www/audio/planche"+self.plancheId+ "/message.mp3";// console.log(mediaUrl);
            var mediaSource = $cordovaMedia.newMedia(mediaUrl);
            var promise = mediaSource.promise;
            var mediaStatus = mediaSource.mediaStatus;
            var media = mediaSource.media;
            $cordovaMedia.play(media);
        };

        $ionicPlatform.registerBackButtonAction(function (event) {
            if($state.current.name=="app.sensibilisation"){
                navigator.app.exitApp();
            }
            else {
                navigator.app.backHistory();
            }
        }, 100);



        self.refresh=function() {
            angular.forEach(self.planche.quizzAnswers, function (item) {

                item.style = "";
                item.checkedStatus = 0;

            });
        }

    }

})();