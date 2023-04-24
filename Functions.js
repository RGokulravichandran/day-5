// Do the below programs in anonymous function and IIFE Functions
//  1. Print odd numbers in an array
//  2. Convert all the strings to title caps in a string array
//  3. Sum of all numbers in an array
//  4. Return all the prime numbers in an array
//  5. Return all the palindromes in an array
//  6. Return median of two sorted arrays of the same size.
//  7. Remove duplicates from an array
//  8. Rotate an array by k times

// Do the below programs in arrow functions.
//  1. Print odd numbers in an array
//  2. Convert all the strings to title caps in a string array
//  3. Sum of all numbers in an array
//  4. Return all the prime numbers in an array
//  5. Return all the palindromes in an array

let ArrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ArrayString = [
  "this is a sample string",
  "another sample string",
  "yet another string",
];
const arr = ["racecar", "hello", "madam", "world","mom","level", "deified", "programming"];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const RepeatedArrNum = [1, 2, 3, 4, 5, 3, 2, 4];
const k = 3;

//  1. Print odd numbers in an array in Anonymous function

const Oddnum = function (ArrayNum) {
  const TotalOddNum = [];

  for (let i = 0; i < ArrayNum.length; i++) {
    if (ArrayNum[i] % 2 != 0) {
      TotalOddNum.push(ArrayNum[i]);
    }
  }
  return TotalOddNum;
};

console.log(
  "1. Print odd numbers in an array using Anonymous function arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] "
);
console.log(Oddnum(ArrayNum));

//  1. Print odd numbers in an array in IIFE function

(function (ArrayNum) {
 const TotalOddNumIIFE = ArrayNum.filter(num => num %2!=0)
  console.log(
    "1. Print odd numbers in an array using IIFE function arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] "
  );
  console.log(TotalOddNumIIFE);
})(ArrayNum);


//  1. Print odd numbers in an array in Arrow Function

const OddNumInArrow = (ArrayNum)=>{
  const TotalOddNumArrow = []
  for(let i = 0; i<=ArrayNum.length; i++){
    if (ArrayNum[i]%2!=0){
      TotalOddNumArrow.push(ArrayNum[i])
    }
  }
  return TotalOddNumArrow
}
console.log(
  "1. Print odd numbers in an array using Arrow function arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] "
);
console.log(OddNumInArrow(ArrayNum));

// gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

//  2. Convert all the strings to title caps in a string array in anonymous function

const titleCase = function (str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

const titleCaseArr = ArrayString.map(function (str) {
  return titleCase(str);
});
console.log(
  "2. Convert all the strings to title caps in a string array using anonymous function: arr = [ this is a sample string,another sample string,yet another string]"
);
console.log(titleCaseArr);

//  2. Convert all the strings to title caps in a string array in IIFE function

(function(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
  console.log("2. Convert all the strings to title caps in a string array using IIFE function: arr =['hello world', 'i am a string', 'another example']")
  console.log(arr);
})(['hello world', 'i am a string', 'another example']);


//  2. Convert all the strings to title caps in a string array in Arrow function

const CapsInArrow = (str)=>{
  return str.toLowerCase().split(" ").map(function (word){
    return word.charAt(0).toUpperCase() + word.slice(1)}).join(' ')
}
const titleCaseArrInArrow = ArrayString.map(function(str){
  return CapsInArrow(str)
})
console.log(
  "2. Convert all the strings to title caps in a string array using Arrow Function: arr = [ this is a sample string,another sample string,yet another string]"
);
console.log(titleCaseArrInArrow);

// gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

//  3. Sum of all numbers in an array using Anonymous FUnction

const SumOfNum = function (ArrayNum) {
  let Total = 0;
  for (let i = 0; i < ArrayNum.length; i++) {
    Total += ArrayNum[i];
  }
  return Total;
};

console.log(
  "3. Sum of all numbers in an array using Anonymous Function Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
);
console.log(SumOfNum(ArrayNum));

//  3. Sum of all numbers in an array using IIFE function


(function(ArrayNum){
  let TotalSuminIifeFunction = 0
  for(let i= 0; i < ArrayNum.length; i++){
    TotalSuminIifeFunction +=ArrayNum[i]
  }
  console.log("3. Sum of all numbers in an array using IIFE Function Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]")
  console.log(TotalSuminIifeFunction)
})(ArrayNum)

//  3. Sum of all numbers in an array using Arrow Function

const SumOfArrayInArrowFunction = (ArrayNum)=>{
  let TotalSuminArrowFunction = 0
  for(let i = 0; i < ArrayNum.length; i++){
    TotalSuminArrowFunction += ArrayNum[i]
  }
  return TotalSuminArrowFunction
}
console.log("3. Sum of all numbers in an array using Arrow Function Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ")
console.log( SumOfArrayInArrowFunction(ArrayNum))
 



// gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

//  4. Return all the prime numbers in an array

const isPrime = function (num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeArr = ArrayNum.filter(function (num) {
  return isPrime(num);
});
console.log(
  "4. Return all the prime numbers in an array using Anonymous Function Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
);
console.log(primeArr);
//  4. Return all the prime numbers in an array using IIFE function

const primes = (function(arr) {
  const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1;
  }

  return arr.filter(num => isPrime(num));
})(ArrayNum);

console.log("4. Return all the prime numbers in an array using IIFE Function Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]")
console.log(primes);

//  4. Return all the prime numbers in an array using Arrow Function

const primesInArrow = (arr)=>{
const isPrimeInArrow = num => {
  for (let i = 2; i<num; i++)
    if(num%i===0) return false;
    return num !==1;
}
return arr.filter(num => isPrimeInArrow(num))
}
console.log("4. Return all the prime numbers in an array using Arrow Function Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]")
console.log(primesInArrow(ArrayNum))

// gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

// 5. Return all the palindromes in an array in anonymous function

const palindromes = function(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].split('').reverse().join('')) {
      results.push(arr[i]);
    }
  }
  return results;
}
console.log("5. Return all the palindromes in an array using anonymous function arr = ['racecar', 'hello', 'madam', 'world', 'deified', 'programming'] ");
console.log(palindromes(arr));


// 5. Return all the palindromes in an array in IIFE function
const palindromeArr = arr.filter(function (str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
});
console.log("5. Return all the palindromes in an array using IIFE arr = ['racecar', 'hello', 'madam', 'world', 'deified', 'programming'] ");
console.log(palindromeArr);

// 5. Return all the palindromes in an array in Arrow function

const palindromeInArrow = arr.filter((str)=>{
  const reversedInArrow = str.split("").reverse().join("")
    return str === reversedInArrow
  })
console.log("5. Return all the palindromes in an array using Arrow Function arr = ['racecar', 'hello', 'madam', 'world', 'deified', 'programming'] ");
console.log(palindromeInArrow);

// gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
//  6. Return median of two sorted arrays of the same size. using anonymous function
const median = function (arr1, arr2) {
  const combined = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  const length = combined.length;
  const mid = Math.floor(length / 2);
  if (length % 2 === 0) {
    return (combined[mid - 1] + combined[mid]) / 2;
  } else {
    return combined[mid];
  }
};
console.log("6. Return median of two sorted arrays of the same size using anonymous function arr1 = [1, 2, 3, 4, 5], arr2 = [6, 7, 8, 9, 10]");
console.log(median(arr1, arr2));
//  6. Return median of two sorted arrays of the same size using IIFE

  const medianInIife = (() => {
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
})();
console.log("6. Return median of two sorted arrays of the same size using IIFE arr1 = [1, 2, 3, 4, 5], arr2 = [6, 7, 8, 9, 10]");
console.log(medianInIife);

// gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

//  7. Remove duplicates from an array using Anonymous Function

const uniqueArr = RepeatedArrNum.filter(function (item, index) {
  return RepeatedArrNum.indexOf(item) === index;
});
console.log(" 7. Remove duplicates from an array using Anonymous Function arr=[1, 2, 2, 3, 3, 3, 4, 5, 5]");
console.log(uniqueArr);


//  7. Remove duplicates from an array using IIFE

const uniqueArrInIife = (() => {
  return RepeatedArrNum.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  
})();

console.log(" 7. Remove duplicates from an array using IIFE arr=[1, 2, 2, 3, 3, 3, 4, 5, 5]");
console.log(uniqueArrInIife); 



// gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

//  8. Rotate an array by k times using anonymous function

const rotatedArr = arr1.concat(arr1.splice(0, k)).filter(function () {
  return true;
});
console.log(" 8. Rotate an array by k times using anonymous function k = 3")
console.log(rotatedArr);

//  8. Rotate an array by k times using IIFE

const Array1 = [1,2,3,4,5]

const rotatedArray = (function(Array1, k) {
  return Array1.slice(k, Array1.length).concat(Array1.slice(0, k));
})(Array1, k);

console.log(" 8. Rotate an array by k times using anonymous function k = 3")
console.log(rotatedArray);
