angular.module('vendorController', ['vendorFactory'])
    .controller('VendorCtrl', function ($scope, $ionicModal, $ionicPopup, $timeout, vendorFactory, $http,$location) {


        //Get All Vendors        
        var ongetsuccess = function (data) {
            console.log(data);
            $scope.vendors = data.queryresult;
        };
        var ongeterror = function (data) {
            console.error(data);
        };

        vendorFactory.getVendors(ongetsuccess, ongeterror);

        //Get A Single Vendor




//Showing Add Vendor Template
        $scope.showAddVendor = function () {
            $location.path("/app/addVendor");


        }


        //Editing Company
        $scope.showEditPopup = function (vendorid) {

            var onEditSuccess = function (data) {
                $scope.vendorData = data;
                console.log($scope.vendorData);
            }


            var onEditError = function (data) {}
            vendorFactory.getSingleVendor(vendorid, onEditSuccess, onEditError);






            var myPopup = $ionicPopup.show({
                templateUrl: 'templates/vendorView.html',
                title: 'Vendor Details',
                scope: $scope,
                buttons: [
                    {
                        text: 'Cancel'
                },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                                e.preventDefault();
                                
                         
                        }
       },
     ]
            });
        }

        //Deleting a Vendor
        var ondeletesuccess = function () {
            vendorFactory.getVendors(ongetsuccess, ongeterror);
            //console.log("Success is called");
        }




        $scope.deleteConfirm = function (vendorid) {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Delete Vendor',
                template: 'Are you sure you want to delete this vendor?'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    console.log('You are sure');
                    vendorFactory.delete(vendorid, ondeletesuccess);
                } else {
                    console.log('You are not sure');
                }
            });
        };
    })
     .controller('addVendorCtrl', function ($scope, $ionicModal, $ionicPopup, $timeout, vendorFactory, $http) {
                    $scope.vendor = {};
                    $scope.addVendor = function(){
                    var onErrorSucess = function(data){
                    console.log(data);
                    }
                    var onAddSucess = function(data){
                    console.log(data);
                    }
                    
                    vendorFactory.addVendor($scope.vendor,onAddSucess,onErrorSucess);
                    
                    }
                    });