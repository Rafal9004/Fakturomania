angular.module("modelInvoice", [])
    .factory("localModelInvoice", function(){

    function Invoice(numberInvoice, idCompany, idProduct, numberProduct){
        this.numberInvoice = numberInvoice;
        this.idCompany = idCompany;
        this.idProduct = idProduct;
        this.numberProduct = numberProduct;
    };

    return{
        createInvoice: function(numberInvoice, idCompany, idProduct, numberProduct){
            return new Invoice(numberInvoice, idCompany, idProduct, numberProduct);
        }
    }

});
