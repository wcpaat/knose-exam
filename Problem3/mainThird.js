/*  The approach I'm thinking of using to sort a set of integers from lowest to highest is to compare each value which is the higher number. I will then move 
    the higher value number into its next index and move the lower number to the previous index. I will then loop through the list to continuously rearrange the numbers
    until I reach the last index of the array.
    1. I created a function that will serve as the main program. It will first have a validation if the input is an array consisting of only numbers, otherwise
        it will prompt that Input must be an array or must only contain numbers.
    2. After the validation, I implemented my approach using a nested while loop. I stored the value with index 1 as the keyValue since the rearranging must 
        first occur in the index 1 value to validate if the index 0 is greater or not with index 1 value.
    3. This process must repeat until we reach the last value of the array.
*/
function newSort(list) {
    if (Array.isArray(list) == true) {
        if (onlyNumbers(list) == true) {
            let listLength = list.length;
            let keyIndex = 1;
            while (keyIndex < listLength) {
                let keyValue = list[keyIndex];
                let newIndex = keyIndex - 1;
                while (newIndex >= 0 && list[newIndex] > keyValue) {
                    list[newIndex + 1] = list[newIndex];
                    newIndex = newIndex - 1;
                    console.log(newIndex);
                }
                list[newIndex+1] = keyValue;
                keyIndex = keyIndex + 1;
            }
            console.log(list)
        }
        else {
            console.log("Input must only contain numbers");
        }
    }
    else {
        console.log("Input must be an array");
    }
}

function onlyNumbers(array) {
    return array.every(element => {
      return typeof element === 'number';
    });
  }

module.exports = {newSort};