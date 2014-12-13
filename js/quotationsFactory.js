angular.module('quotationsFactory', [])
    .factory('quotationsFactory', function($http) {
        var quotations = {};
        quotations.getQuotations = function(callbacksuccess, callbackerror, pageno) {
            $http.get(ajaxurl + 'json/getallquotations?pageno=' + pageno, {}).success(callbacksuccess).error(callbackerror);
        };
        return quotations;
    });