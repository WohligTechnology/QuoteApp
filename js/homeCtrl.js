angular.module('homeController', ['homeFactory','vendorFactory','companyFactory'])
    .controller('HomeCtrl', function ($scope, $ionicPopup, $timeout,$location,homeFactory,vendorFactory) {

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
        $scope.addelements = function () {

            $scope.elementData.elements.push({
                title: "",
                description: "",
                showdescription: false,
                quantity: "",
                price: "",
                amount: ""
            });
        };
        //Removing Elements        
        $scope.removeElements = function (element) {
            var indexwill = $scope.elementData.elements.indexOf(element);
            $scope.elementData.elements.splice(indexwill, 1);

        };

        $scope.changedescstatus = function (element) {
            if (element.showdescription) {
                element.showdescription = false;
            } else {
                element.showdescription = true;
            }
        };

        //Adding New Company
        $scope.showCompanyAddPopup = function () {
            $location.path("/app/addCompany");
         }
        //Adding New Vendor/Client
        $scope.showVendorAddPopup = function () {
                $location.path("/app/addVendor");
                }
//Getting All Companies
        var ongetsuccess = function (data) {
            console.log(data);
            $scope.companies = data.queryresult;
        };

        var ongeterror = function (data) {
            console.error(data);
        };

        companyFactory.getCompanies(ongetsuccess, ongeterror);



        







    })