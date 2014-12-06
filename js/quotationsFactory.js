angular.module('quotationsFactory', [])
    .factory('quotationsFactory', function ($http) {
        var quotations = {};
        quotations.getQuotations = function (callbacksuccess, callbackerror) {
            $http.get('http://wohlig.biz/quotation/index.php/json/getallquotations', {}).success(callbacksuccess).error(callbackerror);
        };
        
        
        return quotations;
    });