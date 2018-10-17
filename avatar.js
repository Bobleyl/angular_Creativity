var app = angular.module('myApp', []); 
app.controller('imageCtrl', function($scope) {
    $scope.imageList = [];

    $scope.imageAdd = function() {
        $scope.imageInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.imageList;
        $scope.imageList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.imageList.push(x);
        });
    };
});