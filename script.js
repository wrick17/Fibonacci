$(document).ready(function(){

	// alert("Hello");

	$(".button").mousedown(function(){
		$(this).css("box-shadow","0px 0px 10px #697875");
	});

	$(".button").mouseup(function(){
		$(".button").css("box-shadow","5px 5px 10px #697875");
	});

	$("input").keypress(function(){
		$(this).css("box-shadow","0px 0px 10px #0b3f32");
	});

	$("input").blur(function(){
		$(this).css("box-shadow","0px 0px 10px #aaa");
	});

	$(".limit").keypress(function (e) {
		var key = e.which;
	 if(key == 13)  // the enter key code
	 {
	 	$(".go").click();
	 	return false;  
	 }
	});

	$(".first").keypress(function (e) {
		var key = e.which;
	 if(key == 13)  // the enter key code
	 {
	 	$(".second").focus();
	 	return false;  
	 }
	});

	$(".second").keypress(function (e) {
		var key = e.which;
	 if(key == 13)  // the enter key code
	 {
	 	$(".submit").click();
	 	return false;  
	 }
	});

	$(".submit").click(function(){
		var first = $(".first").val();
		var second = $(".second").val();

		if (first == "" || second == "") {
			if (first == "") {
				$(".first").css("box-shadow","0px 0px 10px red");
			}
			if (second == "") {
				$(".second").css("box-shadow","0px 0px 10px red");
			}
			$(".right-container").html("");
		}else{

			// $(".first").val("");
			// $(".second").val("");
			$(".right-container").html("<p>The list</p><a class=\"right-handle\" href=\"#\"></a>");
			$(".first").blur();
			$(".second").blur();
			fib(first,second);
		}

	});

	$(".go").click(function(){

		var limit = $(".limit").val();
		if (limit == "") {
			$(".limit").css("box-shadow","0px 0px 10px red");
			$(".left-container").html("");
		}else{
			$(".limit").blur();
			fibo(limit);
		}

	});

	var fibo = function(limit){

		var prime = 1;
		var sec = 1;

		$(".left-container").html("<p>The list</p><a class=\"left-handle\" href=\"#\"></a>");
		$(".left-handle").after("<span>"+sec+"</span>");
		$(".left-handle").after("<span>"+prime+"</span>");

		fibonacci(sec,prime,limit);

	};

	var fibonacci = function(sec,prime,limit){

		var temp = 0;
		if (limit > 2) {
			
			temp = prime + sec;
			sec = prime;
			prime = temp;
			limit = limit - 1;

			$(".left-handle").after("<span>"+prime+"</span>");
			fibonacci(sec,prime,limit);
		};

	};

	var fib = function(prime,sec){
		
		var temp = 0;

		if (prime == sec) {
			$(".right-handle").before("<span>"+sec+"</span>");
		}
		
		temp = prime - sec;

		$(".right-handle").before("<span>"+prime+"</span>");

		prime = sec;
		sec = temp;

		if (prime > 0 && sec > 0) {
			fib(prime,sec);
		}

		
	};

});