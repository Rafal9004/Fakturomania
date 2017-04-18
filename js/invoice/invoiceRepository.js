angular.module("repositoryInvoice", [])
    .factory ("localRepositoryInvoice", ["$http", function($http){
        return{
            getDataInvoice: function(invoices){
                $http.get('ajax.php', {params:{"dataType": "invoice", "dataFrom": "invoice"}}).then(function (response) {
                    invoices(response.data.records);
                });
            },

            sendDataInvoice: function(newInvoice){
                $http.post('ajax.php', newInvoice, {params:{"dataType": "invoice", "dataFrom": "invoice"}}).then(function (response) {
                    return(response.data);
                }, function (response) {
                   console.log(response.data,response.status);
                });
            },

            deleteDataInvoice: function(idData){
                $http.delete('ajax.php', {params: {"dataType": "invoice", "dataFrom": "invoice", "idData" : idData}}).then(function(response){

                }, function (response){
                    console.log(response.data, response.status);
                });
            },

            updateDataInvoice: function(updateInvoice){
                $http.put('ajax.php', updateInvoice, {params: {"dataType": "invoice", "dataFrom": "invoice"}}).then(function (response) {
                    
                }, function (response) {
                    console.log(response.data,response.status);
                });
            },
            
            getDataCompany: function(company){
                $http.get('ajax.php', {params: {"dataType": "invoice", "dataFrom": "company"}}).then(function(response){
                    company(response.data.records);
                });
            },
            
            getDataProduct: function(product){
                $http.get('ajax.php', {params: {"dataType": "invoice", "dataFrom": "product"}}).then(function(response){
                    product(response.data.records);
                })
            }
        }
}]);
