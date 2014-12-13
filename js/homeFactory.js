angular.module('homeFactory', [])
    .factory('homeFactory', function ($http) {
        var home = {};
        //        home.getQuotationId = function (callbacksuccess, callbackerror) {
        //            $http.get(ajaxurl+'json/getquotationid', {}).success(callbacksuccess).error(callbackerror);
        //        };
        
        home.sendQuote = function (quotePreview, callbacksuccess, callbackerror) {
            console.log(quotePreview);
            $http({

                method: "post",
                url: ajaxurl + 'json/addpreview',
                data: {
                    'form': quotePreview
                },
                withCredentials: true
            }).success(callbacksuccess).error(callbackerror);

        }
        return home;

    });