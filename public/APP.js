angular.module('taskApp', ['ui.router', 'ngMaterial', 'ngMessages'])

.config(function( $stateProvider, $urlRouterProvider, $mdThemingProvider ) {

	$stateProvider
	.state('task-view', {
		url: '/task-view',
        templateUrl: '/views/task-view.html',
        controller: 'taskController'
	})
	.state('add-task', {
		url: '/add-task',
		'templateUrl': './views/add-task.html',
		controller: 'taskController'
	});

	$urlRouterProvider.otherwise('/task-view');

	  $mdThemingProvider.theme('default')
    .primaryPalette('light-green')
    .accentPalette('orange');

});