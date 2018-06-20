angular.module('app')
    .service('FuncionarioService', function($http, urlAPI){

        this.buscar = function () {
            return $http.get(urlAPI);
        };

        this.cadastrar = function (funcionario) {
            return $http.post(urlAPI, funcionario);
        };
        
    });