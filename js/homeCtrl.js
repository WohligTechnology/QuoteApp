angular.module('homeController', [])
    .controller('HomeCtrl', function ($scope, $ionicPopup, $timeout) {

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
            var indexwill=$scope.elementData.elements.indexOf(element);
            $scope.elementData.elements.splice(indexwill,1);
        };

        $scope.changedescstatus = function (element) {
            if(element.showdescription)
            {
                element.showdescription=false;
            }
            else
            {
                element.showdescription=true;
            }
        };
        
//Adding New Company
        $scope.showCompanyAddPopup = function () {
        $scope.data = {}

        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/companyAdd.html',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data) {

                            e.preventDefault();
                        } else {
                            console.log($scope.data);
                        }
                    }
       },
     ]
        });
    }
//Adding New Vendor/Client
$scope.showVendorAddPopup = function () {
        $scope.data = {}
        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/vendorAdd.html',
            title: 'Enter New Vendor Details',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data) {

                            e.preventDefault();
                        } else {
                            console.log($scope.data);
                        }
                    }
       },
     ]
        });
    }

        
            
        
        
        
        
        
        
        

    })