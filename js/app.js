$(document).ready(function() {
	var myInput = prompt("Enter an integer: ");
	if (+(myInput) % 1 != 0) {
			alert("Input must be an integer");
	}
	//var number = getInteger(myInput);
	else {
		var number = parseInt(+(myInput));
		fizzBuzz(number);
	}

	function fizzBuzz(num) {
		for(var i=1; i<=num; i++){
			if(i%3 == 0){
				$("body").append("fizz");
			}
			if(i%5 == 0){
				$("body").append("buzz");
			}
			if(i%5 != 0 && i%3 != 0) {
				$("body").append(i);
			}
				$("body").append("<br>");
		}
	};
});