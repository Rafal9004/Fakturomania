firmApp.controller('companyCtrl', function ($scope, $http, $uibModal, $filter, localModelCompany, localRepositoryCompany) {
    $scope.companyList = [];

    localRepositoryCompany.getDataCompany (function(data){
        $scope.companyList = data;
    });

    $scope.propertyName = 'nazwa';
    $scope.reverse = true;

    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };

    $scope.addDataCompany = function(){
        openDialogAddCompany();
    };

    function openDialogAddCompany(){
        var modalInstance = $uibModal.open({
            animation: 'true',
            templateUrl: 'addCompanyModal.html',
            controller: 'addCompanyCtrl',
            size: 'lg'
        });

        modalInstance.result.then(function (newCompany){
            if(newCompany){
                $scope.companyList.push(newCompany);
            }
        });
    };


    $scope.editDataCompany = function(company){
        openDialogDescriptionCompany(company);
    };

    function openDialogDescriptionCompany(company){
        var modalInstance = $uibModal.open({
            animation: 'true',
            templateUrl: 'modalCompanyEdit.html',
            controller: 'editCompanyCtrl',
            size: 'lg',
            resolve: {
                company: function(){
                    return company;
                }
            }
        });
    };

    $scope.deleteDataCompany = function(idData, company){
        localRepositoryCompany.deleteDataCompany(idData);
        $scope.companyList.splice($scope.companyList.indexOf(company), 1);
    }

});


firmApp.controller('editCompanyCtrl', function ($scope, $http, $uibModalInstance, company, localRepositoryCompany) {
    $scope.company = company;
    $scope.newName = $scope.company.nazwa;
    $scope.newAddress = $scope.company.adres;
    $scope.newNIP = $scope.company.nip;
    $scope.newBankNumber = $scope.company.nr_konta;

    $scope.close = function() {
        $uibModalInstance.close();
    };

    $scope.save = function() {
        $scope.company.nazwa = $scope.newName;
        $scope.company.adres = $scope.newAddress;
        $scope.company.nip = $scope.newNIP;
        $scope.company.nr_konta = $scope.newBankNumber;

        localRepositoryCompany.updateDataCompany($scope.company);

        $uibModalInstance.close($scope.company);
    }
});

firmApp.controller('addCompanyCtrl', function ($scope, $http, $uibModalInstance,  localModelCompany, localRepositoryCompany) {

    $scope.close = function() {
        $uibModalInstance.close();
    };

    $scope.save = function() {
        var newCompany = null;
        newCompany = localModelCompany.createCompany($scope.nazwa, $scope.adres, $scope.nip, $scope.nr_konta);

        localRepositoryCompany.sendDataCompany(newCompany);

        $uibModalInstance.close(newCompany);
    };

});
