angular.module('quotationsController', ['quotationsFactory', 'ionic'])
    .controller('QuotationsCtrl', function($scope, $ionicModal, $timeout, quotationsFactory) {
        // Quotation API
        $scope.chakado = true;
        $scope.moreDataCanBeLoaded = function() {
            return $scope.chakado;
        }

        $scope.quotations = [];
        var ongetsuccess = function(data) {
            console.log("THIS IS AAAAAAAA");
            console.log(data);
            $scope.lastpage = data.lastpage;

            for (var i = 0; i < data.queryresult.length; i++) {
                $scope.quotations.push(data.queryresult[i]);
            }
            $scope.$broadcast('scroll.infiniteScrollComplete');
            if (data.pageno == data.lastpage) {
                $scope.chakado = false;
            }
            firstpage++;
        };
        var ongeterror = function(data) {
            console.error(data);
        };
        var firstpage = 1;
        quotationsFactory.getQuotations(ongetsuccess, ongeterror, firstpage);

        //Loadmore
        $scope.loadMore = function() {
            console.log(firstpage);
            if (firstpage <= $scope.lastpage) {
                quotationsFactory.getQuotations(ongetsuccess, ongeterror, firstpage);
            };
        };


    });