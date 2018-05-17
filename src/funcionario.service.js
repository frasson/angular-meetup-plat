angular.module('app')
    .service('FuncionarioService', function($http){

        var url = "http://crud-api.cloud.betha.com.br/api/funcionarios";

        this.buscar = function () {
            return $http.get(url);
        };

        this.cadastrar = function (funcionario) {
            return $http.post(url, funcionario);
        };
        
    });