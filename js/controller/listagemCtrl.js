App.controller('ListagemCtrl', function ($scope, AgendaService, $route, $location, $routeParams) {

    $scope.agenda = [];
    $scope.notFound = false;

    AgendaService.read().then(function (data) {
        $scope.agenda = data.data;
        if (data.data.length == 0) {
            $scope.notFound = true;
        }
    });

    $scope.deletar = function (id) {
        AgendaService.delete(id).then(function (data) {
            console.log(data);
            $route.reload();
        });
    }

    $scope.goCadastro = function () {
        $location.path('/cadastro');
    }


    $scope.editar = function (id) {
        $location.path('/cadastro/' + id);
    }

});



