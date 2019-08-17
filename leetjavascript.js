var twoSum = function(nums, target){
  // version 1:
  // indeces = []
  // nums.forEach(function(a){
  //   nums.forEach(function(b){
  //     if(a !== b && a + b == target){
  //       indeces.push(nums.indexOf(a));
  //       indeces.push(nums.indexOf(b));
  //     };
  //   });
  // });
  // return [indeces[0], indeces[1]];

  // version 2:
  // for (i = 0; i < nums.length; i++)  {
  //     for (n = i+1; n < nums.length; n++) {
  //         if (nums[i] + nums[n] == target) {
  //             return [i, n]
  //         }
  //     }
  // }

  // version 3 (best):
  var hash = {};
  for (i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }

  for (i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (complement in hash && hash[complement] != i) {
      return [i, hash[complement]]
    }
  }
  
};
// console.log(twoSum([2, 7, 101, 95, 1, 2, 4, 3], 5));

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

// are all characters in a string unique?
function isItUnique(x){
  var array = x.split('');
  var unique = new Set(array);
  if (unique.size == array.length) {
    return true;
  } else {
    return false;
  };
}

function reverseCStyle(x) {
  var reverseArray = [];
  var array = x.split('');
  var arrayLength = array.length;
  for (i=0; i <= arrayLength - 1; i++) {
    char = array.shift();
    reverseArray.unshift(char);
  }
  return reverseArray.join('');
}

function removeDups(x) {
  var uniqueArray = [];
  var array = x.split('');
  var arrayLength = array.length

  for (i=0; i <= arrayLength; i++) {
    var duplicate = false;
    for (j=0; j<= arrayLength; j++) {
      if (array[i] == uniqueArray[j] && i !== j) {
        duplicate = true;
      }
    }
    if (duplicate == false) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray.join('');
}

function removeDups2(x) {
  var array = x.split('');
  var arrayLength = array.length

  for (i=0; i<=arrayLength; i++) {
    for(j=0; j<=arrayLength; j++) {
      if (array[i] == array[j] && i !== j) {
        array.splice(j, 1);
      }
    }
  }
  return array.join('')
}

function anagramChecker(x,y) {
  var word1 = x.split('');
  var word2 = y.split('');
  var sorted1 = word1.sort().toString();
  var sorted2 = word2.sort().toString();
  if (sorted1 == sorted2) {
    return true;
  } else {
    return false;
  }
}

// replace all spaces in a string with '%20'
function replaceSpace(x){
  var array = x.split('');
  for(i=0;i<=array.length;i++){
    if (array[i] == ' ') {
      array.splice(i,1,'%20');
    }
  }
  return array.join('');
}

// For an NxN matrix, rotate matrix 90 degrees. Where x is an array of arrays
function rotateMatrix(x){
  array = []
  for(i=0;i<=x.length -1;i++){
    a = x[i][0]
    b = x[i][1]
    function swap(a,b,c){
      if (b == 0){
        c = 'blue';
      } else {
        c = 'red';
      }
      array.push(new Array(b,a,c));
    };
    swap(a,b);
  }
  console.log(array);
  return array;
}

//success but ugly
var reverse = function (x) {
  if (x === 0) {
    return 0;
  }
  var stringInteger = x.toString();
  var stringIntegerArray = stringInteger.split('');
  var resultArray = [];
  var length = stringIntegerArray.length;
  for (i = 0; i < length; i++) {
    var lastElement = stringIntegerArray.pop();
    resultArray.push(lastElement);
  }

  let resultString = resultArray.join('')
  let int = parseInt(resultString);
  if (int >= Math.pow(2, 31) - 1 || int <= Math.pow(-2, 31)) {
    return 0;
  }
  if (int < 0) {
    int *= -1;
  }
  return int;
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (romanNumerals) {
  inputRomanNumerals = romanNumerals.split('');

  var total = 0;

  for (i = 0; i < inputRomanNumerals.length; i++) {
    numeral = inputRomanNumerals[i];
    switch (numeral) {
      case 'I':
        if (inputRomanNumerals[i + 1] === 'V' || inputRomanNumerals[i + 1] === 'X') {
          total--;
        } else {
          total++;
        }
        break;
      case 'V':
        total += 5;
        break;
      case 'X':
        if (inputRomanNumerals[i + 1] === 'L' || inputRomanNumerals[i + 1] === 'C') {
          total -= 10;
        } else {
          total += 10;
        }
        break;
      case 'L':
        total += 50;
        break;
      case 'C':
        if (inputRomanNumerals[i + 1] === 'D' || inputRomanNumerals[i + 1] === 'M') {
          total -= 100;
        } else {
          total += 100;
        }
        break;
      case 'D':
        total += 500;
        break;
      case 'M':
        total += 1000;
        break;
      default:
        continue;
    }
  }

  return total;
}

$(document).ready(function(){
  $("#submit").click(function() {
    $('#answer').append("answer: " + rotateMatrix([[0,0,'blue'],[0,1,'blue'],[1,0,'red'],[1,1,'red']]));
  });
});
