angular.module("repositoryProduct", [])
    .factory ("localRepositoryProduct", ["$http", function($http){
        return{
            getDataProduct: function(products){
                $http.get('ajax.php', {params:{"dataType": "products"}}).then(function (response) {
                    products(response.data.records);
                });
            },

            sendDataProduct: function(newProduct){
                $http.post('ajax.php', newProduct, {params:{"dataType": "products"}}).then(function (response) {
                    return(response.data);
                }, function (response) {
                   console.log(response.data,response.status);
                });
            },

            deleteDataProduct: function(idData){
                $http.delete('ajax.php', {params: {"dataType": "products", "idData" : idData}}).then(function(response){

                }, function (response){
                    console.log(response.data, response.status);
                });
            },

            updateDataProduct: function(updateProduct){
                $http.put('ajax.php', updateProduct, {params: {"dataType": "products"}}).then(function (response) {
                    console.log(response.data);
                }, function (response) {
                    console.log(response.data,response.status);
                });
            }
        }
}]);
