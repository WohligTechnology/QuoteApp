angular.module('homeFactory', [])
    .factory('homeFactory', function ($http) {
        var home={};
//        home.getQuotationId = function (callbacksuccess, callbackerror) {
//            $http.get(ajaxurl+'json/getquotationid', {}).success(callbacksuccess).error(callbackerror);
//        };
        return home;
        
    });