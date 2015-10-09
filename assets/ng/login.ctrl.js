(function () {
  angular.module('app')
      .controller('LoginCtrl', function ($scope, $location, UserSvc) {
        var self = this;

        this.loginFunc = function (username, password) {
          UserSvc.login(username, password)
              .then(function (user) {
                $scope.$emit('login', user);
                $location.path("/");
              })
        }
      })
}());
