angular.module('app')
    .controller('ListagemFuncionariosCtrl', function ($scope, FuncionarioService, promiseTracker, $injector) {

        var dialog = $injector.get("bfc.dialog.Dialog");

        $scope.trackers = {
            carregando: promiseTracker()
        };    

        carregarFuncionarios();

        //Alguem notificou que os funcionarios devem ser recarregados
        $scope.$on('funcionario.cadastrado', function() {
            carregarFuncionarios();
        });        

        $scope.adicionar = function(){
            abrirModal();
        };

        $scope.editar = function(funcionario){
            abrirModal(funcionario);
        };        

        function abrirModal (funcionario) {
            dialog.open({
                templateUrl: 'funcionario-cad.html',
                controller: 'CadastroFuncionarioCtrl',
                resolve: {
                    funcionario: funcionario
                }
            });
        }

        function carregarFuncionarios() {
            //faz uma chamada ajax para buscar os funcionarios que estao nessa api
            var promise = FuncionarioService.buscar();

            $scope.trackers.carregando.addPromise(promise);

            //Na betha geralmente não se trata o erro, pois tem um cara generico que já faz isso
            promise.then(function (response) {
                $scope.funcionarios = response.data;
            });            
        }
    });