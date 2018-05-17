angular.module('app')
    .filter('telefones', function(){
        return function (telefones){
            return telefones ? 
                telefones
                    .map(function(telefone){ return telefone.numero; })
                    .join(", ")
                : "-";
        };
    });