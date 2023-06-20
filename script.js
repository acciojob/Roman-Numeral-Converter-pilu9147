function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let roman = '';

  for (let key in obj) {
    let [symbol, value] = obj[key];

    while (num >= value) {
      roman += symbol;
      num -= value;
    }

    if (num <= 0) {
      break;
    }

    if (num >= value - obj[key - 1][1] && key % 2 === 0) {
      let [prevSymbol, prevValue] = obj[key - 1];
      roman = roman.slice(0, -1) + symbol + prevSymbol;
      num -= (value - prevValue);
    }
  }

  return roman;
}

// Testing the code with input 36
console.log(convertToRoman(36));
