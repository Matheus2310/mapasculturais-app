// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('mapasculturais', [
    'ionic',
    'mapasculturais.controllers',
    'mapasculturais.routes',
    'mapasculturais.services',
    'mapasculturais.directives',
    'mapas.service',
    'ngStorage',
    'ngCordova',
])

// angular.module for cloud services
angular.module('starter', ['ionic', 'ionic.cloud', 'starter.controllers', 'starter.services'])

.config(function($ionicCloudProvider) {
  $ionicCloudProvider.init({
    "core": {
      "app_id": "!!!O_SEU_APP_ID!!!"
    },
    "push": {
      "sender_id": "!!!O_SEU_SENDER_ID!!!",
      "pluginConfig": {
        "android": {
          "iconColor": "#343434"
        }
      }
    }
  });
})

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

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
    $ionicConfigProvider.views.forwardCache(true);
//    $ionicConfigProvider.views.maxCache(0);

});
