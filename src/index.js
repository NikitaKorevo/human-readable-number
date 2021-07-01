module.exports = function toReadable (number) {
  const arrStrings = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const arrDozensNumbers = ['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let HumanReadableNumber = '';
  arrNumber = String(number).split('');

  if(number === 0) {
    HumanReadableNumber = 'zero';
    return HumanReadableNumber;
  } 

  if (number > 0 && number < 21) {
    HumanReadableNumber = arrStrings[number];
    return HumanReadableNumber;
  }

  if (number > 20 && number < 100) {
    HumanReadableNumber += arrDozensNumbers[arrNumber[0]];

    if (number % 10 !== 0) {
      HumanReadableNumber += ' ' + arrStrings[arrNumber[1]];
    }
    return HumanReadableNumber;
  }

  if (number > 99 && number < 1000) {
    
    HumanReadableNumber = arrStrings[arrNumber[0]] + ' hundred';

    if (number % 100 === 0) {
      return HumanReadableNumber;
    }

    if (number % 100 <= 20) {
      HumanReadableNumber += ' ' + arrStrings[number % 100];
      return HumanReadableNumber;
    } else {
      HumanReadableNumber += ' ' + arrDozensNumbers[arrNumber[1]];
    }

    if(arrNumber[2] !== '0') {
      HumanReadableNumber += ' ' + arrStrings[arrNumber[2]];
    }

    return HumanReadableNumber;
  }
}
