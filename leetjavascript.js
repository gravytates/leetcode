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

var romanToInt = function (romanNumerals) {
  numerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };

  var number = 0;

  for (i = 0; i < romanNumerals.length; i++) {
    numerals[romanNumerals[i]] < numerals[romanNumerals[i + 1]] ? number -= numerals[romanNumerals[i]] : number += numerals[romanNumerals[i]]
  }
  return number;
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (romanNumerals) {
  var total = 0;

  for (i = 0; i < romanNumerals.length; i++) {
    numeral = romanNumerals[i];
    switch (numeral) {
      case 'I':
        if (romanNumerals[i + 1] === 'V' || romanNumerals[i + 1] === 'X') {
          total--;
        } else {
          total++;
        }
        break;
      case 'V':
        total += 5;
        break;
      case 'X':
        if (romanNumerals[i + 1] === 'L' || romanNumerals[i + 1] === 'C') {
          total -= 10;
        } else {
          total += 10;
        }
        break;
      case 'L':
        total += 50;
        break;
      case 'C':
        if (romanNumerals[i + 1] === 'D' || romanNumerals[i + 1] === 'M') {
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

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort()
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      return nums[i];
    }
  }
};

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  var addressArray = address.split('');
  var defangedArray = [];
  for (var i = 0; i < addressArray.length; i++) {
    if (addressArray[i] === '.') {
      defangedArray.push("[.]");
    } else {
      defangedArray.push(addressArray[i]);
    }
  }
  return defangedArray.join('');
};

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let sArray = S.split('');
  var jewels = 0;
  // yay, hash works well
  // let jArray = J.split('');
  // var jewelHash = {};
  // for (var i = 0; i < jArray.length; i++) {
  //   jewelHash[jArray[i]] = 0;
  // }
  // for (var i = 0; i < sArray.length; i++) {
  //   if (sArray[i] in jewelHash) {
  //     jewels++;
  //   }
  // }
  // includes works well also, needs less memory but not as fast
  for (var i = 0; i < sArray.length; i++) {
    if (J.includes(sArray[i])) {
      jewels++;
    }
  }
  return jewels;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  answer = 0;
  var dfs = function (node) {
    if (node) {
      if ((L <= node.val) && (node.val <= R)) {
        answer += node.val;
      }
      if (L < node.val) {
        dfs(node.left)
      }
      if (R > node.val) {
        dfs(node.right)
      }
    }
  }
  dfs(root)
  return answer;
};
// depth first search for reference
var dfs = function (node) {
  if (node) {
    if (node.left < node.val) {
      dfs(node.left)
    }
    if (node.right > node.val) {
      dfs(node.right)
    }
  }
}

/**
 * @param {number} N
 * @return {number}
 */
/**
 * @param {number} N
 * @return {number}
 */
const primePalindrome = (N) => {
  var num = N;
  var prime = false;
  var palindrome = false;

  //ugly hack! but it'll do.
  if (N >= 9989900) { return 100030001; }

  const primeCheck = (n) => {
    var isPrime = (n > 1) && (n < (2 * (10 ** 8)));
    if (!isPrime) {
      return isPrime;
    }
    for (let i = 2, sqrt = Math.floor(Math.sqrt(n)); i <= sqrt; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  };

  const palindromeCheck = (n) => {
    var reversedInt = n.toString().split('').reverse().join('');
    if (reversedInt === n.toString()) {
      return true;
    } else {
      return false;
    }
  }

  if (primeCheck(N) && palindromeCheck(N)) {
    return N;
  }

  do {
    num++;
    palindrome = palindromeCheck(num);
    if (palindrome) {
      prime = primeCheck(num);
    }
  } while (!prime || !palindrome);

  return num;
};

/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = (S) => {
  // OG solution.
  // var balancedParens = true;
  // var openedParens = 0;
  // var closedParens = 0;
  // var sArray = S.split('');

  // for (let i = 0; i < sArray.length; i++) {
  //   let s = sArray[i];
  //   if (s == "(") {
  //     ++openedParens;
  //     if (balancedParens) {
  //       balancedParens = false;
  //       sArray.splice(i,1);
  //       i--;
  //     }
  //   } else {
  //     ++closedParens;
  //     if (openedParens == closedParens) {
  //       balancedParens = true;
  //       sArray.splice(i,1);
  //       i--;
  //       openedParens = 0;
  //       closedParens = 0;
  //     }
  //   }
  // }
  // return sArray.join('');
  // refactored OG solution using what I learned
    var parens = 0;
    var sArray = S.split('');

    for (let i = 0; i < sArray.length; i++) {
      let s = sArray[i];
      if (s == "(") {
        if (!parens) {
          sArray.splice(i, 1);
          i--;
        }
        parens++;
      } else {
        parens--;
        if (!parens) {
          sArray.splice(i, 1);
          i--;
        }
      }
    }
    return sArray.join('');
  
  //more clever than I: using counter ++ and -- to determine eveness of parens and building rather than splicing. 
  // source inspiration for solution 2 refactor.
  // let parenCount = 0
  // let stringResult = ""
  // for (const s of S) {
  //   if (s === "(") {
  //     if (parenCount) {
  //       stringResult += s;
  //     }
  //     parenCount++;
  //   } else {
  //     parenCount--;
  //     if (parenCount) {
  //       stringResult += s
  //     }
  //   }
  // }
  // return stringResult;
};

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
  a = s.split('')
  for (let i = 0; i < a.length; i++) {
    return "fuck"; 
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  let a = [];
  for (var i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      a.push("FizzBuzz");
    } else if (i % 3 === 0) {
      a.push("Fizz");
    } else if (i % 5 === 0) {
      a.push("Buzz");
    } else {
      a.push(i.toString());
    }
  }
  return a;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// Do not allocate extra space for another array, 
// you must do this by modifying the input array in -place with O(1) extra memory.
var reverseString = function (s) {
  return s = s^2 //nope
};

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  primes = [];
  for (var i = 2; i < n; i++) {
    let prime = true;
    for (var m = 2, sqrt = Math.floor(Math.sqrt(i)); m <= sqrt; m++) {
      if (i % m === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      primes.push(i)
    }
  }
  return primes.length;
};

/**
 * @param {number} N
 * @return {number}
 */
var fibonacci = function (N) {
  if (N < 2) return N;
  var fn = 0;
  var first = 0;
  var second = 1;
  for (var i = 2; i <= N; i++) {
    [first, second] = [second, first + second]
  }
  return second;
};

/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
  let morseLetters = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  let alphaLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var translations = []

  for (var i = 0; i < words.length; i++) {
    let letters = words[i].split('');
    let translationArray = []
    for (var n = 0; n < letters.length; n++) {
      var morseIndex = alphaLetters.indexOf(letters[n]);
      translationArray.push(morseLetters[morseIndex]);
    }
    var translation = translationArray.join('');
    translations.push(translation);
  }
  return [... new Set(translations)].length;
};

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = (A) => {
  const flipImages = (B) => {
    let flippedImages = [];
    for (var n = 0; n < B.length; n++) {
      let flippedRow = [];
      let row = B[n];
      for (var i = 1; i <= row.length; i++) {
        // flippedRow.push(row[i * -1]);
        index = row.length - i;
        flippedRow.push(row[index])
      }
      flippedImages.push(flippedRow);
    }
    return flippedImages;
  }

  const invertImages = (C) => {
    let invertedImages = [];
    for (var n = 0; n < C.length; n++) {
      let invertedRow = []
      let row = C[n];
      for (var i = 0; i < row.length; i++) {
        row[i] ? invertedRow.push(0) : invertedRow.push(1);
      }
      invertedImages.push(invertedRow);
    }
    return invertedImages;
  }

  let flippedImages = flipImages(A);
  return invertImages(flippedImages);
};

$(document).ready(function(){
  $("#submit").click(function() {
    $('#answer').append("answer: " + rotateMatrix([[0,0,'blue'],[0,1,'blue'],[1,0,'red'],[1,1,'red']]));
  });
});
