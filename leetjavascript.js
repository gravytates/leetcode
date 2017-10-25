// var twoSum = function(nums, target){
//   indeces = []
//   nums.forEach(function(a){
//     nums.forEach(function(b){
//       if(a !== b && a + b == target){
//         indeces.push(nums.indexOf(a));
//         indeces.push(nums.indexOf(b));
//       };
//     });
//   });
//   return [indeces[0], indeces[1]];
//   // return indeces;
// };
// console.log(twoSum([2, 7, 101, 95, 1, 2, 4, 3], 5));

// Doesn't cover all edge cases yet
// var reverse = function(x) {
//   var answer = '';
//   var newArray = [];
//   var array = (x.toString()).split('');
//
//   while(array.length>1){
//     newArray.push(array.pop());
//     if (array.length == 1 && array[0] == '-'){
//       newArray.unshift(array[0]);
//     };
//   };
//
//   answer = parseInt(newArray.join(''));
//   if(Math.abs(answer) > 2**53 - 1){
//     return 0;
//   } else {
//     return answer;
//   };
// };
// console.log(reverse(-900000));

// reverse the integer

// var reverse = function(x) {
//   var answer = '';
//   var newArray = [];
//   var array = (x.toString()).split('');
//
//   while(array.length>1){
//
//     newArray.push(array.pop());
//     if (array.length == 1 && array[0] == '-'){
//       newArray.unshift(array[0]);
//     };
//   };
//
//   answer = parseInt(newArray.join(''));
//   if(Math.abs(answer) > 2**53 - 1){
//     return 0;
//   } else {
//     return answer;
//   };
// };
// console.log(reverse(-900000));
// console.log(reverse(123));

// var isPalindrome = function(x) {
//   var array = (x.toString()).split('');
//   var reverseArray = array.reverse();
//   if (x == reverseArray.join('')) {
//     return true;
//   } else {
//     return false;
//   };
// };
//
// console.log(isPalindrome(123));
// console.log(isPalindrome(14341));

var efficientPalindrome = function(x) {
  var array = (x.toString()).split('');
  var length = array.length;
  var halved = Math.floor(length/2);
  for (i=0; i<= halved - 1 ; i++) {
    var endIndex = length - 1 - i;
    console.log(array[i] + array[endIndex]);
    if (array[i] === array[(endIndex)]){
      var palindrome = true;
    } else {
      var palindrome = false;
    };
  };
  return palindrome;
};

$(document).ready(function(){
  $("#submit").click(function() {
    $('#answer').append("answer: " + efficientPalindrome(12321));
  });
});
