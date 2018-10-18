var randNum = Math.floor(Math.random() * 5) + 1;

var app = angular.module('myApp', [])
app.controller('myCtrl', function($scope, $http) {

    $scope.gifSearchForUrl = function() {
        $scope.newGifSearch = $scope.gifSearch.replace(/ /g, "");
    };

    $scope.showGifs = function() {
        $scope.gifList = [];
        $scope.url = "http://api.giphy.com/v1/gifs/search?q=";
        $scope.gifSearch = $scope.gifInput;
        $scope.gifInput = "";
        $scope.gifSearchForUrl();

        $scope.url = $scope.url + $scope.newGifSearch + "&api_key=FGlxsqMvwvI2dcq5inIXZFaf3E6ivyfK&limit=5";

        $http.get($scope.url).then(function(response) {

            $scope.gifList.push(response['data']['data'][randNum]['images']['original']['mp4']);
            /*  var tmpgifList = [];
              for(var i = 0; i < response.length; i++) {
                  tmpgifList.push(response['data'][i]['embed_url']);
                  console.log(tmpgifList);
              };
              console.log(tmpgifList);*/
        });
    };
});