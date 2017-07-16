angular.module('taskApp').directive('taskTemplate', function () {
    return {
        restrict: 'E',
        scope: {
            testurl: '&'
        },
        link: function (scope, element, attrs) {
            scope.testurl = 'directives/' + attrs.url;
            attrs.$observe("url", function(u){
                scope.testurl = 'directives/' + u;
            });
        },
        template: "<div ng-include='testurl'></div>"
    }
});