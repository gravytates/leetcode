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

// var efficientPalindrome = function(x) {
//   var array = (x.toString()).split('');
//   var length = array.length;
//   var halved = Math.floor(length/2);
//   for (i=0; i<= halved - 1 ; i++) {
//     var endIndex = length - 1 - i;
//     console.log(array[i] + array[endIndex]);
//     if (array[i] === array[(endIndex)]){
//       var palindrome = true;
//     } else {
//       var palindrome = false;
//     };
//   };
//   return palindrome;
// };

var findShortestSubArray = function(nums) {
  subArrays = [];
  frequencyArray = nums.sort(function(a, b){
    return b.length - a.length;
  });


  // for (i=0; i< nums.length - 1; i++){
  //   for (j=0; j< nums.length - 1 - i; j++){
  //     if (nums[i] == nums[j]){
  //       frequencyArrays.push(nums[j]);
  //     };
  //   };
  // };



  // shortestSubs = subArrays.sort(function(a, b){
  //   // ASC  -> a.length - b.length
  //   // DESC -> b.length - a.length
  //   return a.length - b.length;
  // });
  // return shortestSubs[0];
  return frequencyArray;
};

// constructor for hash table, sets hash table size and initializes array of set size
function HashTable(size) {
  this.buckets = Array(size)
  this.numBuckets = this.buckets.length
}

let myHT = new HashTable(30)

// constructor for hash node
function HashNode(key, value, next) {
  this.key = key
  this.value = value
  this.next = next || null
}

// hash function to take in a key and return a bucket number- used as index
HashTable.prototype.hash = function(key) {
  let total = 0
  for (i = 0; i < key.length; i++){
    total += key.charCodeAt(i)
  }
  let bucket = total % this.numBuckets
  return bucket
}

// insertion!
HashTable.prototype.insert = function(key, value) {
  let index = this.hash(key)
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value)
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value
  } else {
    let currentNode = this.buckets[index]
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value
        return
      }
      currentNode = currentNode.next
    }
    currentNode.next = new HashNode(key, value)
  }
}

HashTable.prototype.get = function(key) {
  let index = this.hash(key)
  if (!this.buckets[index]) return null
  let currentNode = this.buckets[index]
  while (currentNode) {
    if (currentNode.key === key) return currentNode.value
    currentNode = currentNode.next
  }
  return null
}

HashTable.prototype.retrieveAll = function() {
  let allNodes = []
  for (let i = 0; i < this.numBuckets; i++) {
    let currentNode = this.buckets[i]
    while (currentNode) {
      allNodes.push(currentNode)
      currentNode = currentNode.next
    }
  }
  return allNodes
}

$(document).ready(function(){
  $("#submit").click(function() {
    $('#answer').append("answer: " + findShortestSubArray([1,2,3,4,5,5,6,7,6,5]));
  });
});

field training, then class training. people power movement from a wide range with wide range. most funding from small contributions.
