angular.module('loginController', ['ionic', 'ngCordova'])
.controller('LoginCtrl', function($scope, $ionicModal, $timeout,$cordovaOauth) {
    
$scope.facebookLogin = function() {
        $cordovaOauth.facebook('726743300741442', ["email"]).then(function(result) {
            // results
        }, function(error) {
            // error
        });
    }
}   );

