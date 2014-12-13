angular.module('appController', [])
.controller('AppCtrl', function($scope, $ionicModal, $timeout,navigationFactory) {
    
    menu={};
    menu.home="active";
    $scope.menu=navigationFactory.changemenu(menu);
})



