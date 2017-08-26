App.factory('AgendaService', function ($http, API) {

	return {
		read: function () {
			return $http.get(API + 'agendas');
		},
		getOne: function (id) {
			return $http.get(API + 'agendas/' + id);
		},
		create: function (item) {
			return $http.post(API + 'agendas', item);
		},
		update: function (item, id) {
			return $http.put(API + 'agendas/' + id, item);
		},
		delete: function (id) {
			return $http.delete(API + 'agendas/' + id);
		}
	}
})