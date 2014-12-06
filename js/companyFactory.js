angular.module('companyFactory', [])
    .factory('companyFactory', function ($http) {
        var factory = {};
        factory.getCompanies = function (callbacksuccess, callbackerror) {
            $http.get('http://wohlig.biz/quotation/index.php/json/getallcompanies', {}).success(callbacksuccess).error(callbackerror);
        };
        
        factory.deleteCompany = function (id, callbacksuccess, callbackerror) {
            console.log(id);
            $http.get('http://wohlig.biz/quotation/index.php/json/deletecompany', {
                params: {
                    companyid: id
                }
            }).success(callbacksuccess).error(callbackerror);
        };
    
        return factory;
    });