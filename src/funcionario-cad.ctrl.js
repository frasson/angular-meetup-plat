angular.module('app')
    .controller('CadastroFuncionarioCtrl', function($scope, FuncionarioService, 
        $modalInstance, promiseTracker, $injector, $rootScope, funcionario){

        $scope.editando = !!funcionario; //esse cara tem que estar prenchido
        
        $scope.funcionario =  funcionario;

        var notification = $injector.get("bfc.Notification");

        var mensagemCadastro = $scope.editando ? 'Funcionário atualizado com sucesso' : 'Funcionário criado com sucesso';

        $scope.trackers = {
            cadastrando: promiseTracker()
        };

        $scope.salvar = function(){
            var promise = FuncionarioService
                .cadastrar($scope.funcionario)
                .then(function () {
                    notification.publish("Funcionário cadastrado com sucesso", "success");
                    $rootScope.$broadcast('funcionario.cadastrado');
                    $modalInstance.close();
                });

            $scope.trackers.cadastrando.addPromise(promise);            
        };
    });