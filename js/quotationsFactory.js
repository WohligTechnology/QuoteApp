angular.module('quotationsFactory', [])
    .factory('quotationsFactory', function ($http) {
        var quotations = {};
        quotations.getQuotations = function (callbacksuccess, callbackerror) {
            $http.get(ajaxurl+'json/getallquotations', {}).success(callbacksuccess).error(callbackerror);
        };
        
        
        return quotations;
    });