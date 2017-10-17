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

var reverse = function(x) {
  var answer = 0;
  while(x > 1){
    var tail = x % 10;
    var newAnswer = answer * 10 + tail;
    // if ((newAnswer - tail) / 10 != answer){
    //   return 0;
    // };
    answer = newAnswer;
    x /= 10;
  }
  return answer;
}
console.log(reverse(123));
