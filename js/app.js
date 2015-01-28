// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'controller','ngCordova'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: ''
    })
        .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html",
                    controller: 'homeCtrl'
                }
            }
        })

    .state('app.login', {
        url: "/login",
        views: {
            'menuContent': {
                templateUrl: "templates/login.html",
                controller: 'loginCtrl'
            }
        }
    })
    .state('app.movieList', {
        url: "/movieList",
        views: {
            'menuContent': {
                templateUrl: "templates/movieList.html",
                controller: 'movieListCtrl'
            }
        }
    })
        .state('app.movieDetail', {
            url: "/movieDetail",
            views: {
                'menuContent': {
                    templateUrl: "templates/movieDetail.html",
                    controller: "movieDetailCtrl"
                }
            }
        });
    $urlRouterProvider.otherwise('/app/home');
})
    .factory('navigationFactory', function ($http) {
        var menu = {
            home: "",
            quotations: ""
        };
        var activemenu = {};
        //        home.getQuotationId = function (callbacksuccess, callbackerror) {
        //            $http.get(ajaxurl+'json/getquotationid', {}).success(callbacksuccess).error(callbackerror);
        //        };

        menu.changemenu = function (menu2) {
            activemenu = menu2;
            return activemenu;

        };
        menu.getmenu = function () {
            return activemenu;
        }
        return menu;

    });