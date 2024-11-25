const findSum = function(array) {
  return array.reduce((sum, current) => {
    sum += current;
    return sum;
  }, 0)
};

// const numberArray = [10, 234, 356, 5, 3, 1, 3, 4];
// const sum = findSum(numberArray);
// console.log(sum);

const findFrequency = function(array) {
  // count frequency of each element in array
  const count = array.reduce((acc, current) => {
    if (acc[current]) {
      acc[current]++;
    } else {
      acc[current] = 1;
    }
    return acc;
  }, {});

  // find the greatest
  let greatest = {element: 'a', value: 0};
  const keys = Object.keys(count);

  for (let i = 0; i < keys.length; i++) {
    if ( count[keys[i]] > greatest.value ) {
      greatest.element = keys[i];
      greatest.value = count[keys[i]];
    }
  };
  
  // find the least
  let least = {element: greatest.element, value: greatest.value};
  for (let i = 0; i < keys.length; i++) {
    if ( count[keys[i]] < least.value ) {
      least.element = keys[i];
      least.value = count[keys[i]];
    }
  };

  return { most: greatest.element, least: least.element };
};

// const array = ['a', 'banana', 'a', 'd', 'd', 'd', 'd', 'b', 'b', 'c', 'c']
// const result = findFrequency(array);
// console.log(result);

const isPalindrome = function(str) {
  const reversed = str.toLowerCase().split('').reverse().join('');
  return Boolean(str.toLowerCase() === reversed);
};

// const word = 'canal';
// const palindrome = isPalindrome(word);
// console.log(palindrome);

const largestPair = function(array) {
  let largestProduct = 0;
  for (let i = 0; i < array.length; i++) {
    let product = array[i] * array[i + 1];
    if (product > largestProduct) {
      largestProduct = product; 
    }
  }
  return largestProduct;
};

// const pairs = [234, 32, 15, 344, 15, 34, 134, 2];
// const sumOfLargestPairs = largestPair(pairs);
// console.log(sumOfLargestPairs);

const removeParenth = function(str) {
  const chars = str.split('');
  const iOfP1 = chars.indexOf('(');
  const iOfP2 = chars.indexOf(')');
  const diff = iOfP2 - iOfP1;
  chars.splice(iOfP1, diff + 1);
  return chars.join('');
};

// const withPs =  'idonotwant(tobea)developer';
// const withoutPs = removeParenth(withPs);
// console.log(withoutPs);

const scoreScrabble = function(str) {
  const scores = {
    'aeioulnrst': 1,
    'dg': 2,
    'bcmp': 3,
    'fhvwy': 4,
    'k': 5,
    'jx': 8,
    'qz': 10
  }
  let score = 0;
  for (const char of str.toLowerCase()) {
    for (const key in scores) {
      if (key.includes(char)) {
        score += scores[key];
      }
    }    
  }
  return score;
};

// const myWord = 'quintessential';
// const total = scoreScrabble(myWord);
// console.log(total);