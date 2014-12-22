angular.module('quotationsFactory', [])
    .factory('quotationsFactory', function($http) {
        var quotations = {};
        quotations.getQuotations = function(callbacksuccess, callbackerror, pageno) {
            $http.get(ajaxurl + 'json/getallquotations?pageno=' + pageno, {}).success(callbacksuccess).error(callbackerror);
        };
        quotations.getSingleQuotation =  function (id, callbacksuccess, callbackerror) {
            console.log(id);
            $http.get(ajaxurl+'json/getsinglequotation', {
                params: {
                    id: id
                }
            }).success(callbacksuccess).error(callbackerror);
        };
        quotations.editQuote = function (editQuote, callbacksuccess, callbackerror) {
            console.log(editQuote);
            $http({

                method: "post",
                url: ajaxurl + 'json/editpreview',
                data: {
                    'form': editQuote
                },
                withCredentials: true
            }).success(callbacksuccess).error(callbackerror);

        }

        return quotations;
    });