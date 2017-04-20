angular.module("modelProduct", [])
    .factory("localModelProduct", function(){

    function Product(idProduct, nameProduct, netPrice){
        this.idProduct = idProduct;
        this.nameProduct = nameProduct;
        this.netPrice = netPrice;
    };

    Product.prototype.getGrossPrice = function(){
        return(this.netPrice * 1.23);
    };

    return{
        createProduct: function(idProduct, nameProduct, netPrice){
            return new Product(idProduct, nameProduct, netPrice);
        }
    }

});
