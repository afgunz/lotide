// map function will take in two arguments: an array to map AND a callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, cb) {
  const results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
};

const results = map(words, item => item[0]); // this is the callback function cb(item)
//console.log(results);

//////////////////////////////////////////////////////////////////////////////
// Below is to test the map function:



const eqArrays = function(arr1, arr2) {
  // do they have the same length? If not
    if (arr1.length !== arr2.length) {
      return false;
    }
  
  
     // do they have the same values? If not
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  
  
  const assertArrayEqual = function(arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
      console.log(`✅✅✅ Assertation Passed: ${arr1} === ${arr2}`);
    } else {
      console.log(`🛑🛑🛑 Assertation Failed: ${arr1} !== ${arr2}`);
    }
  };





  //////////////////// Below are test codes; for reference only
  
// assertArrayEqual(results, [ 'g', 'c', 't', 'm', 't' ]); // Passed
  
