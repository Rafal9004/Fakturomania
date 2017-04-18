angular.module("modelCompany", [])
    .factory("localModelCompany", function(){

    function Company(nameCompany, address, nip, accountNumber){
        this.nameCompany = nameCompany;
        this.address = address;
        this.nip = nip;
        this.accountNumber = accountNumber;
    }

    return{
        createCompany: function(nameCompany, address, nip, accountNumber){
            return new Company(nameCompany, address, nip, accountNumber);
        }
    }

})
