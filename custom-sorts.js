function ageSort(users) {
  return users.sort((a, b) => a.age - b.age)
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    else return a - b;
  })
}

function validAnagrams(s, t) {
  // UTF-16 code units for alphabet characters are in ascending order by default
  let sortedS = s.split('').sort().join('')
  let sortedT = s.split('').sort().join('')
  return sortedS === sortedT
}

function reverseBaseSort(arr) {
  // To find the number of digits in a number, you can find the log of the number to base 10
  // and then add 1 to it since we are interested in the number of digits. For instance if the
  // number is 123, the log of the 100 would be 2 as 10^2 = 100 and log of 123 would be close to
  // that such that the integer part will be 2 and if we add 1 to it we get number of digits of that
  // number
  return arr.sort((a, b) => {
    // if (a.toString().length > b.toString().length) return -1;
    // if (a.toString().length < b.toString().length) return 1;
    // else return a-b;

    // Alternative better approach

    let baseA = Math.floor(Math.log10(a)) + 1;
    let baseB = Math.floor(Math.log10(b)) + 1;
    if (baseA !== baseB) {
      return baseB - baseA;
    } else {
      return a-b;
    }
  })
}

function frequencySort(arr) {
  const freq = {};
  arr.forEach(el => {
    freq[el] = (freq[el] || 0) + 1;
  })
  return arr.sort((a, b) => {
    if (freq[a] !== freq[b]) {
      return freq[a] - freq[b]
    }
    else return b - a
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
