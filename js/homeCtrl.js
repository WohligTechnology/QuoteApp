angular.module('homeController', [])
    .controller('HomeCtrl', function ($scope, $ionicModal, $timeout) {

        $scope.data = {};
        $scope.data.elements = [{
            title: "",
            description: "",
            showdescription: false,
            quantity: "",
            price: "",
            amount: ""
        }, ];

        $scope.addelements = function () {
            $scope.data.elements.push({
                title: "",
                description: "",
                showdescription: false,
                quantity: "",
                price: "",
                amount: ""
            });
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

    })