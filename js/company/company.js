angular.module("modelCompany", [])
    .factory("localModelCompany", function(){

    function Company(nazwa, adres, nip, nr_konta){
        this.nazwa = nazwa;
        this.adres = adres;
        this.nip = nip;
        this.nr_konta = nr_konta;
    }

    return{
        createCompany: function(nazwa, adres, nip, nr_konta){
            var company = new Company(nazwa, adres, nip, nr_konta);
            return company;
        }
    }

})
