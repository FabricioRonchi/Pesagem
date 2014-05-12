'use strick'

var bois = [
  { "brinco": "ABM12223", "peso1": "397,99", "peso2": "435,96", "peso3": "534,76" },
  { "brinco": "FDFVFF23", "peso1": "345,67", "peso2": "410,49", "peso3": "578,76" },
  { "brinco": "ABMDFGC3", "peso1": "367,87", "peso2": "458,09", "peso3": "504,76" },
  { "brinco": "FSGHDS23", "peso1": "365,54", "peso2": "460,89", "peso3": "575,76" }
];
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
      templateUrl: 'templates/newweighing.html',
      controller: 'ctrlNewWeighing'
    }).      
    when('/ConBull', {
      templateUrl: 'templates/conbull.html',
      controller: 'ctrlConBull'
    }).      
    when('/ConAll', {
      templateUrl: 'templates/conall.html',
      controller: 'ctrlConAll'
    }).  
    when('/ConWeighing', {
      templateUrl: 'templates/conweighing.html',
      controller: 'ctrlConWeighing'
    }).
    when('/AbaterBull', {
      templateUrl: 'templates/abaterbull.html',
      controller: 'ctrlAbaterBull'
    }).     
    otherwise({
      redirectTo: '/Home'
	});
});

app.controller('ctrlHome', ['$scope', function ($scope) {
	
}]);

app.controller('ctrlBalanca', ['$scope', function ($scope) {
	
}]);

app.controller('ctrlConBull', ['$scope', function ($scope) {
  
}]);

app.controller('ctrlNewWeighing', ['$scope', function ($scope) {
  
}]);

app.controller('ctrlConWeighing', ['$scope', function ($scope) {
  
}]);

app.controller('ctrlAbaterBull', ['$scope', function ($scope) {
  
}]);

app.controller('ctrlConAll', ['$scope', function ($scope) {

  angular.extend($scope, {
    bois: bois
  });

  $scope.evolucao = function(peso1, peso2) {    
    return (parseInt(peso2) - parseInt(peso1)) + " Kg" + " - " + (((parseInt(peso2) - parseInt(peso1)) * 100) / parseInt(peso1)).toFixed(2) + "%";
  };

  $scope.gerarPDF = function() {    
    
    var doc = new jsPDF();

// We'll make our own renderer to skip this editor
var specialElementHandlers = {
  '#editor': function(element, renderer){
    return true;
  }
};

// All units are in the set measurement for the document
// This can be changed to "pt" (points), "mm" (Default), "cm", "in"
doc.fromHTML($('#pdf').get(0), 15, 15, {
  'width': 170, 
  'elementHandlers': specialElementHandlers
});

doc.save();
  }; 
  
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