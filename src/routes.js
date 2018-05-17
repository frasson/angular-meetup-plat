angular.module('app')
    .config( function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/funcionarios');

        $stateProvider.state({
            name: 'listagemFuncionarios',
            templateUrl: 'listagem-funcionarios.html',
            controller: 'ListagemFuncionariosCtrl',
            url: '/funcionarios'
        });
    });