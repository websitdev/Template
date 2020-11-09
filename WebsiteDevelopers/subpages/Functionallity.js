(function () {
'use strict';

angular.module('DynamicApp', [])
.controller('Dynamic', Dynamic);

Dynamic.$inject = ['$scope'];
function Dynamic($scope) {
  $scope.text = "";
  $scope.dynamicclick2 = function () {
    $scope.message = $scope.text;
  };

  $scope.message = "Some of our works";
  $scope.name = "";
  $scope.names = "";
  $scope.dynamicclick = function () {
    $scope.name = $scope.names;
  };
  

};

})();
