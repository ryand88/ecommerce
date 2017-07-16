angular.module('taskApp').controller('taskController', function ($scope, taskService) {
$scope.tasks = taskService.tasks;
$scope.test = "hello";
$scope.template = 'equipment.html';

$scope.minDate = new Date();
$scope.myDate = $scope.minDate;

})