angular.module('companyFactory', [])
.factory('companyFactory', function() {
    
    var companies = [
        {   
            id:1,
            name:'Wohlig',
            address:'ghatkopar',
            email:'wohlig@wohlig.com',
            mobile:9029636258
        },
        {
            id:1,
            name:'Wohlig',
            address:'ghatkopar',
            email:'wohlig@wohlig.com',
            mobile:9029636258

        }
    ];
    var factory = {};
    factory.getCompanies = function(){
        return companies;
    };
    return factory;
})