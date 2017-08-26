var App = angular.module('services', []);

App.factory('Agenda', function($http, API){
	return {
		read: function(){
			return $http.get(API+'agendas');
		},
		create: function(item){
			return $http.post(API+'agendas', item);
		},
		getOne: function(id){
			return $http.get(API+'agendas/'+id);	
		},
		update: function(item, id){
			return $http.put(API+'agendas/'+id, item);	
		},
		delete: function(id){
			return $http.delete(API+'agendas/'+id);
		}
	}
})