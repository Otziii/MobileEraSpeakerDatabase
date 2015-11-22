speakerDb.controller('loginCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    $scope.login = function () {
        $location.path('/speakerList');
    }
}]);