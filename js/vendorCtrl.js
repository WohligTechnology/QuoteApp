angular.module('vendorController', ['vendorFactory'])
    .controller('VendorCtrl', function ($scope, $ionicModal, $ionicPopup, $timeout, vendorFactory, $http,$location) {

$scope.vendors = [];
var ongetsuccess = function (data) {
    console.log("THIS IS AAAAAAAA");
    console.log(data);
    $scope.lastpage = data.lastpage;

    for (var i = 0; i < data.queryresult.length; i++) {
        $scope.vendors.push(data.queryresult[i]);
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
    if (data.pageno == data.lastpage) {
        $scope.chakado = false;
    }
    firstpage++;
};
var ongeterror = function (data) {
    console.error(data);
};
var firstpage = 1;
vendorFactory.getVendors(ongetsuccess, ongeterror, firstpage);



$scope.loadMore = function () {
    console.log(firstpage);
    if (firstpage <= $scope.lastpage) {
        vendorFactory.getVendors(ongetsuccess, ongeterror, firstpage);
    };
};      
        
        
        
        
        
        
        
        
        

//        //Get All Vendors        
//        var ongetsuccess = function (data) {
//            console.log(data);
//            $scope.vendors = data.queryresult;
//        };
//        var ongeterror = function (data) {
//            console.error(data);
//        };
//
//        vendorFactory.getVendors(ongetsuccess, ongeterror);
//
//        //Get A Single Vendor
//



//Showing Add Vendor Template
        $scope.showAddVendor = function () {
            $location.path("/app/addVendor");


        }


        //Editing Company
        $scope.showEditVendor = function (vendorid) {
            $location.path("/app/editVendor/"+vendorid);


            





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
                    })

         .controller('editVendorCtrl', function ($scope, $ionicModal, $ionicPopup, $timeout, vendorFactory, $http,$stateParams,$location) {
                $scope.vendor = {};
                $scope.vendor.id = $stateParams.id;
             var OnSucess  = function(data)
             {
                 $scope.vendor = data;
                 console.log($scope.vendor);
             }
             var Onerror = function(data)
             {
                 console.log(data);
             }
                vendorFactory.getSingleVendor($scope.vendor.id,OnSucess,Onerror);
             
             $scope.editVendor = function()
             {
                 console.log($scope.vendor);
                 var onEditSucess = function(data)
                 {
                     console.log(data);
                     $location.path("/app/vendor")
                 }
                 var OnEditerror = function(data)
                 {
                     console.log(data);
                 }
                 vendorFactory.editVendor($scope.vendor,onEditSucess,OnEditerror);
             }
             
            });
