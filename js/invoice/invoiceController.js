firmApp.controller('invoiceCtrl', function ($scope, $http, $uibModal, $filter, localModelInvoice, localRepositoryInvoice) {

//    localRepositoryProduct.getDataInvoice (function(data){
//        $scope.invoiceList = data;
//    });

    $scope.propertyName = 'numberInvoice';
    $scope.reverse = true;

    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };


    $scope.addDataInvoice = function(){
        openDialogAddInvoice();
    };

    function openDialogAddInvoice(){
        var modalInstance = $uibModal.open({
            animation: 'true',
            templateUrl: 'addInvoiceModal.html',
            controller: 'addInvoiceCtrl',
            size: 'lg'
        });

        modalInstance.result.then(function (newInvoice){
            if(newInvoice){
                if($scope.invoiceList){
                    $scope.invoiceList.push(newInvoice);
                } else {
                    $scope.invoiceList = [];
                    $scope.invoiceList.push(newInvoice);
                }
            }
        });
    };


//    $scope.editDataProduct = function(product){
//        openDialogDescriptionProduct(product);
//    };
//
//    function openDialogDescriptionProduct(product){
//        var modalInstance = $uibModal.open({
//            animation: 'true',
//            templateUrl: 'modalProductEdit.html',
//            controller: 'editProductCtrl',
//            size: 'lg',
//            resolve: {
//                product: function(){
//                    return product;
//                }
//            }
//        });
//    };
//
//    $scope.deleteDataProduct = function(idData, product){
//        localRepositoryProduct.deleteDataProduct(idData);
//
//        $scope.productList.splice($scope.productList.indexOf(product), 1);
//    }

});


//firmApp.controller('editProductCtrl', function ($scope, $http, $uibModalInstance, product, localModelProduct, localRepositoryProduct) {
//    $scope.product = product;
//
//    $scope.close = function() {
//        $uibModalInstance.close();
//    };
//
//    $scope.save = function() {
//        $scope.product.grossPrice = $scope.product.netPrice * 1.23;
//
//        localRepositoryProduct.updateDataProduct($scope.product);
//
//        $uibModalInstance.close($scope.product);
//    }
//});

firmApp.controller('addInvoiceCtrl', function ($scope, $http, $uibModalInstance, localModelInvoice, localRepositoryInvoice) {
    
    localRepositoryInvoice.getDataCompany(function(data){
        $scope.companies = data;
    });
    
    localRepositoryInvoice.getDataProduct(function(data){
        $scope.products = data;
    });
    

    $scope.close = function() {
        $uibModalInstance.close();
    };

    $scope.save = function() {
        var newInvoice = null;
        newInvoice = localModelInvoice.createInvoice($scope.newNumberInvoice, $scope.company.idCompany, $scope.product.idProduct, $scope.newNumberProduct);
        
        console.log(newInvoice);

//        localRepositoryInvoice.sendDataInvoice(newInvoice);

//        $uibModalInstance.close(newInvoice);
    };

});
