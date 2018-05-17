angular.module('app')
    .controller('CadastroFuncionarioCtrl', function($scope, FuncionarioService, 
        $modalInstance, promiseTracker, $injector, $rootScope){

        var notification = $injector.get("bfc.Notification");

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