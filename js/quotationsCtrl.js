angular.module('quotationsController', ['quotationsFactory'])
.controller('QuotationsCtrl', function($scope, $ionicModal, $timeout,quotationsFactory) {
    
var ongetsuccess=function (data) {
            console.log(data);
            $scope.quotations = data.queryresult;
        };
        var ongeterror=function(data) {
            console.error(data);
        };
        
        quotationsFactory.getQuotations(ongetsuccess,ongeterror);

    
    
    
})