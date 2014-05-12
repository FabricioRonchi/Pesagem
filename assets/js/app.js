'use strick'

var app = angular.module('appBalanca', []);

app.config(function($routeProvider) {
  $routeProvider.
    when('/Home', {
      templateUrl: 'templates/home.html',
      controller: 'ctrlHome'
    }).
    when('/NewBull', {
      templateUrl: 'templates/newbull.html',
      controller: 'ctrlNewBull'
    }).
    when('/NewWeighing', {
      templateUrl: 'templates/newweighing.html ',
      controller: 'ctrlNewWeighing'
    }).  
    otherwise({
      redirectTo: '/Home'
	});
});

app.controller('ctrlHome', ['$scope', function ($scope) {
	
}]);

app.controller('ctrlBalanca', ['$scope', function ($scope) {
	
}]);

app.controller('ctrlNewWeighing', ['$scope', function ($scope) {
  
}]);

app.controller('ctrlNewBull', ['$scope', function ($scope) {

  angular.extend($scope, {
    brinco: ""    
  });

  $('#nascimento').datepicker({
    autoclose: true,
    format: "dd/mm/yyyy"
  });

  $scope.salvar = function(){
    alert("Salvo com sucesso!");
  };

  $scope.limpar = function(){
     angular.extend($scope, {
      brinco: ""      
    });
  };

}]);