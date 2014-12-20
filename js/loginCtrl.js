angular.module('loginController', ['ionic', 'ngCordova'])
.controller('LoginCtrl', function($scope, $ionicModal, $timeout,$cordovaOauth) {
    
    $scope.googleLogin = function() {
        $cordovaOauth.google("CLIENT_ID_HERE", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(error);
        });
    }
 
});

