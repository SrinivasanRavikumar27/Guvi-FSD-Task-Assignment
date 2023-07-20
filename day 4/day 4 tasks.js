
/////   programs in anonymous function & IIFE   //////


///   A)   print odd number in  an array 

//  iife function

(function(){
    var b = "";
 for(var i = 0;i <= 10;i++){
     var a = "";
  if(i%2 != 0){
   a = i;
  }
  if(b != ""){
  b += " " + a;
  }else{
      b = a;
  }
 }
 console.log(b)
})();

//  anonymous function 

var result = function (){
    var b = "";
 for(var i = 0;i <= 10;i++){
     var a = "";
  if(i%2 != 0){
   a = i;
  }
  if(b != ""){
  b += " " + a;
  }else{
      b = a;
  }
 }
 console.log(b)
}

result();

//// b) Convert all the strings to title caps in a string array

//  iife function

(function(){
    var str = "the name is srini";
    var arr = str.split(" ");
    var result = "";
    for(var i = 0;i <= arr.length - 1;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    result = arr.join(" ");
    console.log(result);
 })();

//  anonymous function 

var run = function(){
    var str = "the name is srini";
    var arr = str.split(" ");
    var result = "";
    for(var i = 0;i <= arr.length - 1;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    result = arr.join(" ");
    console.log(result);
 };
 
 run();

//// c) Sum of all numbers in an array

//  iife function

(function(){
    var str = "1 2 3 4";
    var arr = str.split(" ");
    var result = 0;
    for(var i = 0; i <= arr.length - 1; i++){
      result += parseInt(arr[i]);
    }
    console.log(result);
  })();

//  anonymous function 

var solution = function(){
    var str = "1 2 3 4";
    var arr = str.split(" ");
    var result = 0;
    for(var i = 0; i <= arr.length - 1; i++){
      result += parseInt(arr[i]);
    }
    console.log(result);
  }
  solution();

//// d) Return all the prime numbers in an array

//  iife function

(function(){
    var result = [];
    for(var i = 2 ; i <= 10 ; i++){
        if( i%2 != 0){
            result.push(i);
        }
    }
    console.log(result);
})();

//  anonymous function

var solution = function(){
    var result = [];
    for(var i = 2 ; i <= 10 ; i++){
        if( i%2 != 0){
            result.push(i);
        }
    }
    console.log(result);
}
solution();

///////// e) Return all the palindromes in an array

//  iife function

(function(){
    var a = [];
    var result = "madam";
   var reverse = result.split("").reverse().join("");
   if(result == reverse){
       for(var i = 0; i <= result.length - 1;i++){
           a.push(result[i]);
       }
   }else{
       // it is not palindrome
   }
    console.log(a);
})();

//  anonymous function

var solution = function(){
    var a = [];
    var result = "madam";
   var reverse = result.split("").reverse().join("");
   if(result == reverse){
       for(var i = 0; i <= result.length - 1;i++){
           a.push(result[i]);
       }
   }else{
       // it is not palindrome
   }
    console.log(a);
}
solution();

///////// f) Return median of two sorted arrays of the same size.

//  iife function



//  anonymous function


//////  g) Remove duplicates from an array

//  iife function

//  anonymous function


//////////  h) Rotate an array by k times

//  iife function

//  anonymous function








