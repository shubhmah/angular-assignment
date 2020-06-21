(function () {
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.string = "";
		$scope.length = 0;
		$scope.displayMsg = "";
		$scope.checkIfTooMuch = function () {
			var str = $scope.string.split(',');
			var len = str.length
			for (var i=0; i<len; i++) {
				if (str[i]=='' || str[i]==' ' ) {
					len = len-1;
				}
			}
			$scope.length = len;
			if($scope.length==0) {
				$scope.displayMsg = "Please enter data first";
			}
			else if($scope.length>3) {
				$scope.displayMsg = "Too much!";
			}
			else {
				$scope.displayMsg = "Enjoy!";
			}
		}
	}
})();