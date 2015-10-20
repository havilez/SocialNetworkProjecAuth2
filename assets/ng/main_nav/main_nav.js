(function() {
    angular.module("app")
        .directive("mainNav", function () {
            console.log("hello");
            return {
                restrict: 'E',
                templateUrl: '/templates/main_nav.html',
                controller: function ($scope, NavSvc, AuthSvc) {
                    $scope.tabs = NavSvc.tabs;
                    $scope.user = AuthSvc.user
                },
                scope: {
                    mode: '@' // '@' character means mode value will be set by parent scope
                }
            };
        });
}())