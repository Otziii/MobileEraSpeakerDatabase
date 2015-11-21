var speakerDb = angular.module('speakerDb', ['ngRoute',]);

speakerDb.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/login', {
          templateUrl: 'pages/login/login.html',
          controller: 'loginCtrl'
        }).
        when('/speakerList', {
          templateUrl: 'pages/speakerList/speakerList.html',
          controller: 'speakerListCtrl'
        }).
        otherwise({
          redirectTo: '/speakerList'
        });
}]);