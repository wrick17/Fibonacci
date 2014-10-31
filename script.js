$(document).ready(function () {

   // alert("Hello");

   $(".button").mousedown(function () {
      $(this).css("box-shadow", "0px 0px 10px #697875");
   });

   $(".button").mouseup(function () {
      $(".button").css("box-shadow", "5px 5px 10px #697875");
   });

   $("input").keypress(function () {
      $(this).css("box-shadow", "0px 0px 10px #0b3f32");
   });

   $("input").blur(function () {
      $(this).css("box-shadow", "0px 0px 10px #aaa");
   });

   $(".limit").keypress(function (e) {
      var key = e.which;
      if (key == 13) // the enter key code
      {
         $(".go").click();
         return false;
      }
   });

   $(".first").keypress(function (e) {
      var key = e.which;
      if (key == 13) // the enter key code
      {
         $(".second").focus();
         return false;
      }
   });

   $(".second").keypress(function (e) {
      var key = e.which;
      if (key == 13) // the enter key code
      {
         $(".submit").click();
         return false;
      }
   });

   $(".submit").click(function () {
      var first = $(".first").val();
      var second = $(".second").val();

      var arr = [];

      if (first == "" || second == "") {
         if (first == "") {
            $(".first").css("box-shadow", "0px 0px 10px red");
         }
         if (second == "") {
            $(".second").css("box-shadow", "0px 0px 10px red");
         }
         $(".right-container").html("");
      } else {

         // $(".first").val("");
         // $(".second").val("");
         $(".right-container").html("<p>The list</p><a class=\"right-handle\" href=\"#\"></a>");
         $(".first").blur();
         $(".second").blur();
         fib(first, second, arr);
      }

      var str = "";
      for (var i = 0; i <= arr.length - 1; i++) {
         str = str + "<span>" + arr[i] + "</span>";
      };
      $(".right-handle").after(str);

   });

   var fib = function (prime, sec, arr) {

      var temp = 0;

      if (prime == sec) {
         arr.push(sec);
      }

      temp = prime - sec;

      arr.push(prime);

      prime = sec;
      sec = temp;

      if (prime > 0 && sec > 0) {
         fib(prime, sec, arr);
      }


   };


   $(".go").click(function () {

      var limit = $(".limit").val();
      if (limit == "") {
         $(".limit").css("box-shadow", "0px 0px 10px red");
         $(".left-container").html("");
      } else {
         $(".limit").blur();
         fibo(limit);
      }

   });

   var fibo = function (limit) {

      var prime = 1;
      var sec = 1;
      var arr = [];

      $(".left-container").html("<p>The list</p><a class=\"left-handle\" href=\"#\"></a>");
      arr.push(prime);
      arr.push(sec);

      fibonacci(sec, prime, limit, arr);

      var str = "";
      for (var i = arr.length - 1; i >= 0; i--) {
         str = str + "<span>" + arr[i] + "</span>";
      };
      $(".left-handle").after(str);

   };

   var fibonacci = function (sec, prime, limit, arr) {

      var temp = 0;
      if (limit > 2) {

         temp = prime + sec;
         sec = prime;
         prime = temp;
         limit = limit - 1;

         arr.push(prime);
         fibonacci(sec, prime, limit, arr);
      };

   };


});
