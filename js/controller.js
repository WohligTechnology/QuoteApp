angular.module('controller', ['ionic', 'ngCordova'])
.controller('homeCtrl', function ($scope, $ionicModal, $timeout, $cordovaOauth) {

        $scope.twitterlogin = function () {
            var ref = window.open('http://wohlig.biz/quotation/index.php/hauth/login/Twitter', '_blank', 'location=yes');
        };
    })
.controller('loginCtrl', function ($scope, $ionicModal, $timeout, $cordovaOauth) {

        $scope.twitterlogin = function () {
            var ref = window.open('http://wohlig.biz/quotation/index.php/hauth/login/Twitter', '_blank', 'location=yes');
        };
    })

.controller('movieListCtrl', function ($scope, $ionicModal, $timeout, $cordovaOauth) {

        $scope.twitterlogin = function () {
            var ref = window.open('http://wohlig.biz/quotation/index.php/hauth/login/Twitter', '_blank', 'location=yes');
        };
    })
.controller('movieDetailCtrl', function ($scope, $ionicModal, $timeout, $cordovaOauth) {

        $scope.twitterlogin = function () {
            var ref = window.open('http://wohlig.biz/quotation/index.php/hauth/login/Twitter', '_blank', 'location=yes');
        };
    });