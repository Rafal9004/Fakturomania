firmApp.controller('productCtrl', function ($scope, $http, $uibModal, $filter, localModelProduct, localRepositoryProduct) {

    $scope.productList = [];

    localRepositoryProduct.getDataProduct (function(data){
        $scope.productList = data;
    });

    $scope.propertyName = 'nazwa';
    $scope.reverse = true;

    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };


    $scope.addDataProduct = function(){
        openDialogAddProduct();
    };

    function openDialogAddProduct(){
        var modalInstance = $uibModal.open({
            animation: 'true',
            templateUrl: 'addProductModal.html',
            controller: 'addProductCtrl',
            size: 'lg'
        });

        modalInstance.result.then(function (newProduct){
            $scope.productList.push(newProduct);
        });
    };


    $scope.editDataProduct = function(product){
        openDialogDescriptionProduct(product);
    };

    function openDialogDescriptionProduct(product){
        var modalInstance = $uibModal.open({
            animation: 'true',
            templateUrl: 'modalProductEdit.html',
            controller: 'editProductCtrl',
            size: 'lg',
            resolve: {
                product: function(){
                    return product;
                }
            }
        });
    };

    $scope.deleteDataProduct = function(idData, product){
        localRepositoryProduct.deleteDataProduct(idData);

        $scope.productList.splice($scope.productList.indexOf(product), 1);
    }

});


firmApp.controller('editProductCtrl', function ($scope, $http, $uibModalInstance, product, localModelProduct, localRepositoryProduct) {
    $scope.product = product;
    $scope.newName = $scope.product.nazwa;
    $scope.newNetPrice = $scope.product.cena_netto;

    $scope.close = function() {
        $uibModalInstance.close();
    };

    $scope.save = function() {
        $scope.product.nazwa = $scope.newName;
        $scope.product.cena_netto = $scope.newNetPrice;
        $scope.product.cena_brutto = product.getGrossPrice();

        localRepositoryProduct.updateDataProduct($scope.product);

        $uibModalInstance.close($scope.product);
    }
});

firmApp.controller('addProductCtrl', function ($scope, $http, $uibModalInstance,  localModelProduct, localRepositoryProduct) {

    $scope.close = function() {
        $uibModalInstance.close();
    };

    $scope.save = function() {
        var newProduct = null;
        var grossPrice = ($scope.netPrice * 1.23);

        newProduct = localModelProduct.createProduct($scope.nazwa, $scope.netPrice, grossPrice);

        localRepositoryProduct.sendDataProduct(newProduct);

        $uibModalInstance.close(newProduct);
    };

});
