function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      reject('Input should be an array');
      return;
    }

    const lowerCasedWords = mixedArray.filter(element => typeof element === 'string')
                                      .map(stringElement => stringElement.toLowerCase());

    resolve(lowerCasedWords);
  });
}

// Example usage
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then(result => console.log(result))
  .catch(error => console.log('Error:', error));
