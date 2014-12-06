angular.module('vendorFactory', [])
    .factory('vendorFactory', function ($http) {
        var vendor = {};
        vendor.getVendors = function (callbacksuccess, callbackerror) {
            $http.get('http://wohlig.biz/quotation/index.php/json/getallvendors', {}).success(callbacksuccess).error(callbackerror);
        };

        vendor.delete = function (id, callbacksuccess, callbackerror) {
            console.log(id);
            $http.get('http://wohlig.biz/quotation/index.php/json/deletevendor', {
                params: {
                    vendorid: id
                }
            }).success(callbacksuccess).error(callbackerror);
        };
        
                vendor.getSingleVendor = function (id, callbacksuccess, callbackerror) {
            console.log(id);
            $http.get('http://wohlig.biz/quotation/index.php/json/getsinglevendor', {
                params: {
                    id: id
                }
            }).success(callbacksuccess).error(callbackerror);
        };
    return vendor;
    });