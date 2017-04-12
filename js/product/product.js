angular.module("modelProduct", [])
    .factory("localModelProduct", function(){

    function Product(nazwa, cena_netto, cena_brutto){
        this.nazwa = nazwa;
        this.cena_netto = cena_netto;
        this.cena_brutto = cena_brutto;
    }

    Product.prototype.getGrossPrice = function(){
        return(this.cena_netto * 1.23);
    };

    return{
        createProduct: function(nazwa, cena_netto, cena_brutto){
            var product = new Product(nazwa, cena_netto, cena_brutto);
            return product;
        }
    }

});
