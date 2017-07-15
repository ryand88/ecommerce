angular.module('taskApp').controller('navController', function ($scope) {
$scope.viewActive = "active";

    $scope.activeNav = function (current) {
        $scope.viewActive = undefined;
        $scope.addActive = undefined;
        $scope.inventoryActive = undefined;
        $scope[current] = "active";
    }
})