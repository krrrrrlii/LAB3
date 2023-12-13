const countOccurrences = () => {
    const searchString = document.getElementById('searchString').value;
    const inputStrings = document.getElementById('inputStrings').value.split('\n');
  
    let count = 0;
    inputStrings.forEach(text => {
      count += countOccurrencesInString(text, searchString);
    });
  
    displayResult(count);
  };
  
  const countOccurrencesInString = (text, searchString) => {
    let count = 0;
    let position = text.indexOf(searchString);
  
    while (position !== -1) {
      count++;
      position = text.indexOf(searchString, position + 1);
    }
  
    return count;
  };
  
  const displayResult = count => {
    const outputResult = document.getElementById('outputResult');
    outputResult.innerText = 'Количество вхождений: ' + count;
  };
  
