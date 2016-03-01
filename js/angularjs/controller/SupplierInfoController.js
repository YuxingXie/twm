/**
 * Created by Administrator on 2016/2/20.
 */
mainApp.controller('SupplierInfoController',["$scope","$http","$routeParams",function($scope,$http,$routeParams){
    $scope.list=[
        {name:"湖南国中医药有限公司",
            contactPerson:"小彭",
            businessCharacter:"二级纯销商业",
            credentialsValidate:"2017-06-12",
            warrantyAgreementValidate:"2018-06-12",
            powerOfAttorneyValidate:"2019-06-12",
            drugLicenseNumber:"dsfdsffsdwefew",
            drugLicenseValidate:"2020-06-12",
            businessLicenseValidate:"2020-06-12",

        }]
}])