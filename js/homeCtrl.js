angular.module('homeController', ['homeFactory', 'vendorFactory', 'companyFactory'])
    .controller('HomeCtrl', function($scope, $ionicPopup, $timeout, $location, homeFactory, vendorFactory, companyFactory, $ionicScrollDelegate) {
        $scope.menu = {};
        $scope.menu.home = "active";
        $scope.elementData = {};
        $scope.elementData.elements = [{
            title: "",
            description: "",
            showdescription: false,
            quantity: "",
            price: "",
            amount: ""
        }, ];

        //Adding Elements
        $scope.addelements = function() {

            $scope.elementData.elements.push({
                title: "",
                description: "",
                showdescription: false,
                quantity: "",
                price: "",
                amount: ""
            });

            $ionicScrollDelegate.scrollBottom(true);

        };
        //Removing Elements        
        $scope.removeElements = function(element) {
            var indexwill = $scope.elementData.elements.indexOf(element);
            $scope.elementData.elements.splice(indexwill, 1);

        };

        $scope.changedescstatus = function(element) {
            if (element.showdescription) {
                element.showdescription = false;
            } else {
                element.showdescription = true;
            }
        };

        //Adding New Company
        $scope.showCompanyAddPopup = function() {
            $location.path("/app/addCompany");
        }
        //Adding New Vendor/Client
        $scope.showVendorAddPopup = function() {
            $location.path("/app/addVendor");
        }

        //Getting ALl Companies
        var ongetsuccess = function(data) {
            console.log(data);
            $scope.companies = data.queryresult;
        };

        var ongeterror = function(data) {
            console.error(data);
        };

        companyFactory.getCompanies(ongetsuccess, ongeterror);

        //Get All Vendors        
        var ongetsuccess = function(data) {
            console.log(data);
            $scope.vendors = data.queryresult;
        };
        var ongeterror = function(data) {
            console.error(data);
        };

        vendorFactory.getVendors(ongetsuccess, ongeterror);
        //        //Get Quotation Id
        //        var ongetsuccess = function (data) {
        //            console.log(data);
        //            $scope.elementData.quotationId = data;
        //        };
        //        var ongeterror = function (data) {
        //            console.error(data);
        //        };
        //
        //        homeFactory.getQuotationId(ongetsuccess, ongeterror);
        //Temporary Calculations




        $scope.elementData.taxRate = 0;

        $scope.showPreview = function() {
            console.log($scope.elementData);

            var onSendSucess = function(data) {
                console.log(data);

            }
            var OnSendError = function(data) {
                console.log(data);
            }
            homeFactory.sendQuote($scope.elementData, onSendSucess, OnSendError)



        }
        //        $scope.i = 0;
        //        $scope.$watch('elementData.elements', function (newValue, oldValue) {
        //            console.log(newValue);
        //            $scope.i++;
        //            $scope.elementData.totalQuantity = $scope.i;
        //            //$scope.$digest();
        //            $scope.$apply();
        //        });
        $scope.element = $scope.elementData.elements;
        $scope.$watch(
            function(element) {
                $scope.elementData.totalQuantity = 0;
                $scope.elementData.totalAmount = 0;
                for (i = 0; i < $scope.elementData.elements.length; i++) {
                    //console.log(parseInt($scope.elementData.elements[i].quantity));
                    var num = parseInt($scope.elementData.elements[i].quantity);
                    if (!isNaN(num)) {
                        $scope.elementData.totalQuantity += parseInt($scope.elementData.elements[i].quantity);
                        $scope.elementData.totalAmount += parseFloat($scope.elementData.elements[i].price * $scope.elementData.elements[i].quantity);
                    }


                }
                //console.log($scope.elementData.totalQuantity);
            },
            function() {}
        );


    })