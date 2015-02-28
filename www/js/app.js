// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('ebolaApp', ['ngCordova','ionic',])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html"
//      controller: 'AppCtrl'
    })



    .state('app.sensibilisation', {
      url: "/sensibilisation",
      views: {
        'menuContent' :{
          templateUrl: "templates/sensibilisation.html"
        }
      }
    })

      .state('app.ebolaDetector', {
          url: "/ebolaDetector",
          views: {
              'menuContent' :{
                  templateUrl: "templates/ebola-detector.html"
              }
          }
      })
      .state('app.fluxInfo', {
          url: "/fluxInfo",
          views: {
              'menuContent' :{
                  templateUrl: "templates/flux-info.html"
              }
          }
      })
      .state('app.planchesList', {
          url: "/planchesList",
          views: {
              'menuContent' :{
                  templateUrl: "templates/planchesList.html"
              }
          }
      })
      .state('app.plancheDetails', {
          url: "/plancheDetails/:id",
          views: {
              'menuContent' :{
                  templateUrl: "templates/plancheDetails.html"
              }
          }
      })

      .state('app.langues',{
          url:"/langues",
          views:{
              'menuContent':{
                  templateUrl:"templates/langues.html"
              }
          }

        })


      .state('app.aPropos', {
          url: "/aPropos",
          views: {
              'menuContent' :{
                  templateUrl: "templates/aPropos.html"
              }
          }
      });


        // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/planchesList');
});

