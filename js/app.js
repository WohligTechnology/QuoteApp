// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'companyController', 'homeController', 'loginController', 'quotationsController', 'companyController', 'vendorController', 'appController', 'companyFactory', 'homeFactory','ngCordova'])

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
        controller: 'AppCtrl'
    })
        .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html",
                    controller: 'HomeCtrl'
                }
            }
        })

    .state('app.login', {
        url: "/login",
        views: {
            'menuContent': {
                templateUrl: "templates/login.html",
                controller: 'LoginCtrl'
            }
        }
    })

    .state('app.quotations', {
        url: "/quotations",
        views: {
            'menuContent': {
                templateUrl: "templates/quotations.html",
                controller: "QuotationsCtrl"
            }
        }
    })
        .state('app.company', {
            url: "/company",
            views: {
                'menuContent': {
                    templateUrl: "templates/company.html",
                    controller: "CompanyCtrl"
                }
            }
        })
        .state('app.vendor', {
            url: "/vendor",
            views: {
                'menuContent': {
                    templateUrl: "templates/vendor.html",
                    controller: "VendorCtrl"
                }
            }
        })
        .state('app.addCompany', {
            url: "/addCompany",
            views: {
                'menuContent': {
                    templateUrl: "templates/companyAdd.html",
                    controller: "addCompanyCtrl"
                }
            }
        })
        .state('app.addVendor', {
            url: "/addVendor",
            views: {
                'menuContent': {
                    templateUrl: "templates/vendorAdd.html",
                    controller: "addVendorCtrl"
                }
            }
        })
        .state('app.editVendor', {
            url: "/editVendor/:id",
            views: {
                'menuContent': {
                    templateUrl: "templates/vendorEdit.html",
                    controller: "editVendorCtrl"
                }
            }
        })
        .state('app.editCompany', {
            url: "/editCompany/:id",
            views: {
                'menuContent': {
                    templateUrl: "templates/companyEdit.html",
                    controller: "editCompanyCtrl"
                }
            }
        })
        .state('app.editQuotation', {
            url: "/editQuotation/:id",
            views: {
                'menuContent': {
                    templateUrl: "templates/quotationEdit.html",
                    controller: "editQuotationCtrl"
                }
            }
        });

    ;


    // if none of the above states are matched, use this as the fallback 
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