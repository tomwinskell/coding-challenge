const findSum = function(array) {
  return array.reduce((sum, current) => {
    sum += current;
    return sum;
  }, 0)
};

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

const isPalindrome = function(str) {
  const reversed = str.toLowerCase().split('').reverse().join('');
  return Boolean(str.toLowerCase() === reversed);
};

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

const removeParenth = function(str) {
  return str.replaceAll('(', '').replaceAll(')','');
};

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