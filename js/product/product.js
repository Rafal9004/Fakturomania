angular.module("modelProduct", [])
    .factory("localModelProduct", function(){

    function Product(nameProduct, netPrice){
        this.nameProduct = nameProduct;
        this.netPrice = netPrice;
    };

    Product.prototype.getGrossPrice = function(){
        return(this.netPrice * 1.23);
    };

    return{
        createProduct: function(nameProduct, netPrice){
            return new Product(nameProduct, netPrice);
        }
    }

});
