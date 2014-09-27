'use strict';

app.directive('pod', function () {
	return {
		restrict: 'A',
		replace: true,
		scope:{
			'titulo': '@',
			'conteudo': '@'
		},
		templateUrl: '../../partials/pod.html'

	};
});