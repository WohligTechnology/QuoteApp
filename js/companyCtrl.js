angular.module('companyController', ['companyFactory'])
    .controller('CompanyCtrl', function ($scope, $ionicPopup, $timeout, companyFactory, $http, $location) {
        
        
        
        
$scope.companies = [];
var ongetsuccess = function (data) {
    //console.log("THIS IS AAAAAAAA");
    console.log(data);
    $scope.lastpage = data.lastpage;

    for (var i = 0; i < data.queryresult.length; i++) {
        $scope.companies.push(data.queryresult[i]);
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
companyFactory.getCompanies(ongetsuccess, ongeterror, firstpage);



$scope.loadMore = function () {
    console.log(firstpage);
    if (firstpage <= $scope.lastpage) {
        companyFactory.getCompanies(ongetsuccess, ongeterror, firstpage);
    };
};        
        
        
        
        
//        
//        //Demo factory
//        var ongetsuccess = function (data) {
//            console.log(data);
//            $scope.companies = data.queryresult;
//        };
//
//        var ongeterror = function (data) {
//            console.error(data);
//        };
//
//        companyFactory.getCompanies(ongetsuccess, ongeterror);
//


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
            $location.path("/app/addCompany");
            
        }


        $scope.form = {};

        //Editing Company
        $scope.showEditCompany = function (companyid) {
           $location.path("/app/editCompany/"+companyid);

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


})
//Editing Company Controller
         .controller('editCompanyCtrl', function ($scope, $ionicModal, $ionicPopup, $timeout,companyFactory, $http,$stateParams,$location) {
                $scope.company = {};
                $scope.company.id = $stateParams.id;
             var OnSucess  = function(data)
             {
                 $scope.company = data;
                 console.log($scope.company);
                
             }
             var Onerror = function(data)
             {
                 console.log(data);
             }
                companyFactory.getSingleCompany($scope.company.id,OnSucess,Onerror);
             
             $scope.editCompany = function()
             {
                 console.log($scope.company);
                 var onEditSucess = function(data)
                 {
                     console.log(data);
                      $location.path("/app/company");
                 }
                 var OnEditerror = function(data)
                 {
                     console.log(data);
                 }
                companyFactory.editCompany($scope.company,onEditSucess,OnEditerror);
             }
             
            });
