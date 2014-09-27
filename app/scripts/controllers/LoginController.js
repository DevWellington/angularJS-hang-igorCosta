/*global app */
'use strict';

app.controller('LoginController', ['$scope', '$location', function ($scope, $location) {
	
	$scope.falhou = false;
	$scope.Padrao = {
		usuario: 'admin',
		senha: '123mudar'
	};

	$scope.doLogin = function(){
		// Simulacao do Login
		if (
			$scope.LoginModel.usuario === $scope.Padrao.usuario && 
			$scope.LoginModel.senha === $scope.Padrao.senha
		){
			$location.path('/dashboard');
		} else{
			$scope.falhou = true;
		}
	};
}]);