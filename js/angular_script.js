/* Customize Popup Error Message */
(function (exports) {
    function valOrFunction(val, ctx, args) {
        if (typeof val == "function") {
            return val.apply(ctx, args);
        } else {
            return val;
        }
    }

    function InvalidInputHelper(input, options) {
        input.setCustomValidity(valOrFunction(options.defaultText, window, [input]));

        function changeOrInput() {
            if (input.value == "") {
                input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
            } else {
                input.setCustomValidity("");
            }
        }

        function invalid() {
            if (input.value == "") {
                input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
            } else {
               input.setCustomValidity(valOrFunction(options.invalidText, window, [input]));
            }
        }

        input.addEventListener("change", changeOrInput);
        input.addEventListener("input", changeOrInput);
        input.addEventListener("invalid", invalid);
    }
    exports.InvalidInputHelper = InvalidInputHelper;
})(window);


InvalidInputHelper(document.getElementById("inputUsername"), {
  emptyText: "Please enter your Username.",
});

InvalidInputHelper(document.getElementById("inputPassword"), {
  emptyText: "Please enter your Password.",
});


/*Form validation*/
	
angular.module('postExample', [])
.controller('PostController', ['$scope', '$http', function($scope, $http) {
	
	this.postForm = function() {
	
		var encodedString = 'username=' +
			encodeURIComponent(this.inputData.username) +
			'&password=' +
			encodeURIComponent(this.inputData.password);
			
		$http({
			method: 'POST',
			url: 'check-login.php',
			data: encodedString,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.success(function(data, status, headers, config) {
			console.log(data);
			if ( data.trim() === 'correct') {
				window.location.href = 'dashboard.html';
			} else {
				$scope.errorMsg = "Login not correct!";
			}
		})
		.error(function(data, status, headers, config) {
			$scope.errorMsg = 'Login not correct!';
		})
	}
	
}]);

