App.controller('CadastroCtrl', function ($scope, AgendaService, $route, $routeParams, $location) {

    $scope.agenda = {
        nome: String = '',
        sobrenome: String = '',
        telefone: String = '',
        apelido: String = '',
        nomeMae: String = '',
        dataCadastro: new Date()
    }

    var id = $routeParams.id;
    if (id != undefined) {
        AgendaService.getOne(id).then(function (data) {
            $scope.agenda = data.data;
            console.log("TEM ID: " + $scope.item);
        })
    }

    $scope.editar = function (item) {
        $location.path('/editar/' + item.id);
    }

    $scope.salvar = function (item) {
        $scope.agenda = item;
        if (id != undefined) {
            AgendaService.update(item, item.id).then(function (data) {
                $location.path('/');
            });
        } else {
            AgendaService.create(item).then(function (item) {
                $route.reload();
            });
        }
    };

    $scope.back = function () {
        $location.path('/');
    }

});
