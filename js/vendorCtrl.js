angular.module('vendorController', ['vendorFactory'])
    .controller('VendorCtrl', function ($scope, $ionicModal, $ionicPopup, $timeout, vendorFactory, $http) {


        //Get All Vendors        
        var ongetsuccess = function (data) {
            console.log(data);
            $scope.vendors = data;
        };
        var ongeterror = function (data) {
            console.error(data);
        };

        vendorFactory.getVendors(ongetsuccess, ongeterror);

        //Get A Single Vendor





        $scope.showAddPopup = function () {
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