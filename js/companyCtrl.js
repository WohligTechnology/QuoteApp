angular.module('companyController', ['companyFactory'])
    .controller('CompanyCtrl', function ($scope, $ionicPopup, $timeout, companyFactory, $http, $location) {
        //Demo factory
        var ongetsuccess = function (data) {
            console.log(data);
            $scope.companies = data.queryresult;
        };

        var ongeterror = function (data) {
            console.error(data);
        };

        companyFactory.getCompanies(ongetsuccess, ongeterror);



        var onDeleteSucess = function (data) {
            console.log("Delete is Success");
            companyFactory.getCompanies(ongetsuccess, ongeterror);

        }


        var OnDeleteError = function (data) {
            console.log("Delete is  Not Success");
            companyFactory.getCompanies(ongetsuccess, ongeterror);

        }


        //Adding New Company
        $scope.showAddCompany = function () {
            $location.path("/app/addVendor");
            
        }


        $scope.form = {};

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

        $scope.deleteConfirm = function (id) {
            console.log(id);
            var confirmPopup = $ionicPopup.confirm({
                title: 'Delete Company',
                template: 'Are you sure you want to delete this company?'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    companyFactory.deleteCompany(id, onDeleteSucess, OnDeleteError);






                } else {
                    console.log('You are not sure');
                }
            });
        };

    })

.controller('addCompanyCtrl', function ($scope, $ionicPopup, $timeout, companyFactory, $http) {

    $scope.company = {};
    $scope.addCompany = function () {
        var onAddSucess = function (data) {
            console.log(data);
        }
        var onAddError = function (data) {
            console.log(data);
        }

        companyFactory.addCompany($scope.company, onAddSucess, onAddError);
    }


});