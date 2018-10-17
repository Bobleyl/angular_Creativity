var app = angular.module('myApp', []); 
app.controller('imageCtrl', function($scope) {
    $scope.imageList = [];
    $scope.imageList.push({path:'/test.jpg', done:false})

    $scope.imageAdd = function() {
        $scope.imageList.push({path:$scope.imageInput, done:false});
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