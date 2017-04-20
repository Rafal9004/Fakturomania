angular.module("modelInvoice", [])
    .factory("localModelInvoice", function(){

    function Invoice(idCompany, nameCompany, numberInvoice, idProduct, nameProduct, productCount){
        this.idCompany = idCompany;
        this.nameCompany = nameCompany;
        this.idListProduct = idListProduct;
        this.numberInvoice = numberInvoice;
        this.idProduct = idProduct;
        this.nameProduct = nameProduct;
        this.productCount = productCount;
    };

    return{
        createInvoice: function(idCompany, nameCompany, numberInvoice, idProduct, nameProduct, productCount){
            return new Invoice(idCompany, nameCompany, numberInvoice, idProduct, nameProduct, productCount);
        }
    }

});
