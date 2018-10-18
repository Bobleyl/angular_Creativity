(function(){

var app = angular.module('GridApp', ['angularUtils.directives.dirPagination']);

app.controller('GridController', ['$scope', function($scope){
	scope = $scope;
	scope.itemsPerPage = 10;
	scope.sortKey = 'name';
	scope.sortReverse = false;

	scope.sort = function(key){
		scope.sortReverse = (scope.sortKey == key) ? !scope.sortReverse : scope.sortReverse;
		scope.sortKey = key;
	}

	scope.people = [
			  {
			    "id": "5715c444e236108e544c1b86",
			    "age": 37,
			    "name": "Andrew Mason",
			    "gender": "male",
			    "company": "Groupon"
			  },
			  {
			    "id": "5715c444d4846dfe7e0eac19",
			    "age": 67,
			    "name": "Bob Parsons",
			    "gender": "male",
			    "company": "Go Daddy"
			  },
			  {
			    "id": "5715c4449b37b7ea78273203",
			    "age": 41,
			    "name": "Chad Hurley",
			    "gender": "male",
			    "company": "Youtube"
			  },
			  {
			    "id": "5715c444ed78ddb3881f4b9e",
			    "age": 65,
			    "name": "Craig Newmark",
			    "gender": "male",
			    "company": "Craigslist"
			  },
			  {
			    "id": "5715c4447d819e982839a195",
			    "age": 79,
			    "name": "David Packard",
			    "gender": "male",
			    "company": "Hewlett-Packard"
			  },
			  {
			    "id": "5715c444cf91a2730dd06495",
			    "age": 74,
			    "name": "Fred Smith",
			    "gender": "male",
			    "company": "FedEx"
			  },
			  {
			    "id": "5715c44493acfae2991047c9",
			    "age": 89,
			    "name": "Gordon Moore",
			    "gender": "male",
			    "company": "Intel"
			  },
			  {
			    "id": "5715c44470ac04c5fb45d865",
			    "age": 87,
			    "name": "Herb Kelleher",
			    "gender": "male",
			    "company": "Southwest Airlines"
			  },
			  {
			    "id": "5715c444facd540ff8eeda49",
			    "age": 54,
			    "name": "Jeff Bezos",
			    "gender": "male",
			    "company": "Amazon"
			  },
			  {
			    "id": "5715c444291b0b42a8fc2f1c",
			    "age": 49,
			    "name": "Jerry Yang",
			    "gender": "male",
			    "company": "Yahoo!"
			  },
			  {
			    "id": "5715c44442af3bc9128fbbf5",
			    "age": 56,
			    "name": "John Schnatter",
			    "gender": "male",
			    "company": "Papa John's"
			  },
			  {
			    "id": "5715c4440b7baddbfd3b1543",
			    "age": "Deceased",
			    "name": "J.W. Marriott",
			    "gender": "male",
			    "company": "Marriott Corporation"
			  },
			  {
			    "id": "5715c444e83b10f626a8084c",
			    "age": 45,
			    "name": "Larry Page",
			    "gender": "male",
			    "company": "Google"
			  },
			  {
			    "id": "5715c4445da4fd8b3a02e0c5",
			    "age": 60,
			    "name": "Mark Cuban",
			    "gender": "male",
			    "company": "Broadcast.com"
			  },
			  {
			    "id": "5715c444fc7f2e810efd4eec",
			    "age": 77,
			    "name": "Martha Stewart",
			    "gender": "female",
			    "company": "Martha Stewart Living Omnimedia"
			  },
			  {
			    "id": "5715c4445708996eaec1a6c4",
			    "age": 64,
			    "name": "Oprah Winfrey",
			    "gender": "female",
			    "company": "Harpo Productions"
			  },
			  {
			    "id": "5715c44402967e4aadbf5ea2",
			    "age": 80,
			    "name": "Phil Knight",
			    "gender": "male",
			    "company": "Nike"
			  },
			  {
			    "id": "5715c4445cfe12766d7c6079",
			    "age": 51,
			    "name": "Pierre Omidyar",
			    "gender": "male",
			    "company": "Ebay"
			  },
			  {
			    "id": "5715c44489cba06ca769d5eb",
			    "age": 95,
			    "name": "Ralph Roberts",
			    "gender": "male",
			    "company": "Comcast Coorporation"
			  },
			  {
			    "id": "5715c44463bb92fcfe14152f",
			    "age": 58,
			    "name": "Reed Hastings",
			    "gender": "male",
			    "company": "Netflix"
			  },
			  {
			    "id": "5715c44451482dfba5ea1d24",
			    "age": 28,
			    "name": "Ryan Silva",
			    "gender": "male",
			    "company": "ORBALIX"
			  },
			  {
			    "id": "5715c4442bb901883f2c3965",
			    "age": 74,
			    "name": "Sam Walton",
			    "gender": "male",
			    "company": "Walmart"
			  },
			  {
			    "id": "5715c4445685bca76297aecb",
			    "age": 45,
			    "name": "Sergey Brin",
			    "gender": "male",
			    "company": "Google"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 69,
			    "name": "Vera Wang",
			    "gender": "female",
			    "company": "Vera Wang Bridal House"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 34,
			    "name": "Evan Williams",
			    "gender": "male",
			    "company": "Twitter"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 42,
			    "name": "Jan Koum",
			    "gender": "male",
			    "company": "WhatsApp"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 68,
			    "name": "Sir Richard Branson",
			    "gender": "male",
			    "company": "The Virgin Group"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 61,
			    "name": "Russell Simons",
			    "gender": "male",
			    "company": "Def Jam"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 53,
			    "name": "Michael Dell",
			    "gender": "male",
			    "company": "Dell Computers"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 26,
			    "name": "Stacey Ferreira",
			    "gender": "female",
			    "company": "MySocialCloud.com"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 79,
			    "name": "Ralph Lauren",
			    "gender": "male",
			    "company": "Ralph Lauren"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 38,
			    "name": "Sean Parker",
			    "gender": "male",
			    "company": "Napster"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 65,
			    "name": "John Mackey",
			    "gender": "male",
			    "company": "Whole Foods Market"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 49,
			    "name": "Dov Charney",
			    "gender": "male",
			    "company": "American Apparel"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 47,
			    "name": "Elon Musk",
			    "gender": "male",
			    "company": "Tesla, Spacex, Zip1"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 34,
			    "name": "Mark Zuckerburg",
			    "gender": "male",
			    "company": "Facebook"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 62,
			    "name": "Bill Gates",
			    "gender": "male",
			    "company": "Microsoft"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 65,
			    "name": "Paul Allen",
			    "gender": "male",
			    "company": "Microsoft"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": "Deceased",
			    "name": "Steve Jobs",
			    "gender": "male",
			    "company": "Apple"
			  },
			  {
			    "id": "5715c444c74483c3ec6e359d",
			    "age": 54,
			    "name": "Jack Ma",
			    "gender": "male",
			    "company": "Alibaba Group"
			  }
			];

}]);


})();