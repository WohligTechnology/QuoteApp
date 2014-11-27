angular.module('vendorController', [])
.controller('VendorCtrl', function($scope, $ionicModal,$ionicPopup, $timeout) {
    
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
    $scope.showEditPopup = function () {
        $scope.data = {}

        var myPopup = $ionicPopup.show({
            template:' <label class="item item-input item-floating-label"> <span class="input-label">Vendor Name</span>     <input type="text" placeholder="Vendor Name" ng-model="data.vendorName"> </label> <label class="item item-input item-floating-label"> <span class="input-label">Address</span>     <textarea placeholder="Vendor Address" ng-model="data.vendorAddress"> </textarea> </label> <label class="item item-input"> <span class="input-label">Email</span>  <input type="email" ng-model="data.vendorEmail" required > </label>  <label class="item item-input">  <span class="input-label">Mobile</span>  <input type="tel" ng-model="data.vendorMobile"> </label> ',
            title: 'Enter New Vendor Details',
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
    
    $scope.deleteConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Delete Vendor',
     template: 'Are you sure you want to delete this vendor?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };
})
