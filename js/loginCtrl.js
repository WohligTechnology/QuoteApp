angular.module('loginController', ['ionic', 'ngCordova'])
    .controller('LoginCtrl', function ($scope, $ionicModal, $timeout, $cordovaOauth) {

        $scope.twitterlogin = function () {
            var ref = window.open('http://wohlig.biz/quotation/index.php/hauth/login/Twitter', '_blank', 'location=yes');
        };
    });