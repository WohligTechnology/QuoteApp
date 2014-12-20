angular.module('quotationsController', ['quotationsFactory', 'ionic'])

    .controller('QuotationsCtrl', function($scope, $ionicModal, $timeout, quotationsFactory,navigationFactory,$location) {

        // Quotation API
        $scope.chakado = true;
        $scope.menu = {};
        $scope.menu.quotations = "active";
        navigationFactory.changemenu($scope.menu);
        $scope.moreDataCanBeLoaded = function () {
            return $scope.chakado;
        }

        $scope.quotations = [];
        var ongetsuccess = function (data) {
            console.log("THIS IS AAAAAAAA");
            console.log(data);
            $scope.lastpage = data.lastpage;

            for (var i = 0; i < data.queryresult.length; i++) {
                $scope.quotations.push(data.queryresult[i]);
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
        quotationsFactory.getQuotations(ongetsuccess, ongeterror, firstpage);

        //Loadmore
        $scope.loadMore = function () {
            console.log(firstpage);
            if (firstpage <= $scope.lastpage) {
                quotationsFactory.getQuotations(ongetsuccess, ongeterror, firstpage);
            };
        };
//Loading Edit View
        
$scope.showEditVendor = function(quotationId)
{
    $location.path("/app/editQuotation/"+quotationId);
    
}

    })

//Editing Quotations Controller
.controller('editQuotationCtrl', function ($scope, $ionicModal, $timeout, quotationsFactory, navigationFactory,$stateParams,companyFactory,vendorFactory,$ionicScrollDelegate) {

$scope.quotation = {};
$scope.quotation.id = $stateParams.id;
$scope.elementData = {};
$scope.elementData.quotationattributes = [{
            title: "",
            description: "",
            showdescription: false,
            quantity: "",
            price: "",
            amount: ""
        }, ];

    
$scope.addelements = function () {
    $scope.elementData.quotationattributes.push({
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
$scope.removeElements = function (element) {
    var indexwill = $scope.elementData.quotationattributes.indexOf(element);
    $scope.elementData.quotationattributes.splice(indexwill, 1);

};
$scope.changedescstatus = function (element) {
    if (element.showdescription) {
        element.showdescription = false;
    } else {
        element.showdescription = true;
    }
};
    
    
//Getting the Quotation    
var OnSucess = function (data) {
    $scope.elementData = data;
//    $scope.elementData.quotationattributes = $scope.elementData.quotationattributes;
    console.log($scope.elementData);
 
}

var Onerror = function (data) {
    console.log(data);
}

quotationsFactory.getSingleQuotation($scope.quotation.id, OnSucess, Onerror);
    
//Getting All Companies
var ongetsuccess = function (data) {
    console.log(data);
    $scope.companies = data.queryresult;
};

var ongeterror = function (data) {
    console.error(data);
};

companyFactory.getCompanies(ongetsuccess, ongeterror);

//Get All Vendors        
var ongetsuccess = function (data) {
    console.log(data);
    $scope.vendors = data.queryresult;
};
var ongeterror = function (data) {
    console.error(data);
};

vendorFactory.getVendors(ongetsuccess, ongeterror,"1"); 
    

//
$scope.element = $scope.elementData.quotationattributes;
$scope.$watch(
    function (element) {
        $scope.elementData.totalQuantity = 0;
        $scope.elementData.totalAmount = 0;
        for (i = 0; i < $scope.elementData.quotationattributes.length; i++) {
            //console.log(parseInt($scope.elementData.quotationattributes[i].quantity));
            var num = parseInt($scope.elementData.quotationattributes[i].quantity);
            if (!isNaN(num)) {
                $scope.elementData.totalQuantity += parseInt($scope.elementData.quotationattributes[i].quantity);
                $scope.elementData.totalAmount += parseFloat($scope.elementData.quotationattributes[i].price * $scope.elementData.quotationattributes[i].quantity);
            }


        }
        //console.log($scope.elementData.totalQuantity);
    },
    function () {}
);

    $scope.showPreview = function()
    {
        console.log($scope.elementData);
    }
   

});
