angular.module("repositoryCompany", [])
    .factory ("localRepositoryCompany", ["$http", function($http){
        return{
            getDataCompany: function(company){
                $http.get('ajax.php', {params:{"dataType": "company"}}).then(function (response) {
                    company(response.data.records);
                });
            },

            sendDataCompany: function(newComapny){
                $http.post('ajax.php', newComapny, {params:{"dataType": "company"}}).then(function (response) {
                    return(response.data);
                }, function (response) {
                   console.log(response.data,response.status);
                });
            },

            deleteDataCompany: function(idData){
                $http.delete('ajax.php', {params: {"dataType": "company", "idData" : idData}}).then(function(response){

                }, function (response){
                    console.log(response.data, response.status);
                });
            },

            updateDataCompany: function(updateCompany){
                $http.put('ajax.php', updateCompany, {params:{"dataType": "company"}}).then(function (response) {

                }, function (response) {
                    console.log(response.data,response.status);
                });
            }
        }
}]);
