angular.module('companyController', ['companyFactory'])
.controller('CompanyCtrl', function ($scope, $ionicPopup, $timeout,companyFactory) {
    //Demo factory
        $scope.companies = companyFactory.getCompanies();
            console.log($scope.companies);
    
    //Adding New Company
    $scope.showAddPopup = function () {
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
                
    //Editing Company
    $scope.showEditPopup = function () {
        $scope.data = {}

        var myPopup = $ionicPopup.show({
            template: ' <label class="item item-input item-floating-label"> <span class="input-label">First Name</span>     <input type="text" placeholder="Company Name" ng-model="data.companyName"> </label> <label class="item item-input item-floating-label"> <span class="input-label">Address</span>     <textarea placeholder="Company Address" ng-model="data.companyAddress"> </textarea> </label> <label class="item item-input"> <span class="input-label">Email</span>  <input type="email" ng-model="data.companyEmail" required > </label>  <label class="item item-input">  <span class="input-label">Mobile</span>  <input type="tel" ng-model="data.companyMobile"> </label> ',
            title: 'Company Details',
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
     title: 'Delete Company',
     template: 'Are you sure you want to delete this company?'
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
