'use strict';

app.controller('MainCtrl', function ($scope, $routeParams, $location) {
	$scope.hoofdstuk = $routeParams.hoofdstukId;
	$scope.hello = "hello";

	$scope.go = function ( id ) {
		$location.path( 'hoofdstuk/'+id );
		console.log($scope.hoofdstuk);
	};

});
