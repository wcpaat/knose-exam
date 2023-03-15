/*
    1. I created a function that will serve as the main program. It will first have a validation if the input number is an integer otherwise it will
        prompt an Invalid Input message.
    2. After the validation, there will be another checking if the input is 0.
    3. The program will then proceed into a loop if the input is not 0.
    4. The program will use the repeat function of a string to consecutively print the necessary '-' and '*'.
*/
function mpSolution2(number) {
    if (Number.isInteger(parseInt(number)) === true) {
        let result = (n) => {
            if (n == 0){
                console.log("Input n must be greater than 0.");
            }
            else {
                let firstString = '-';
                let secondString = '*';
                for (i = 1; i <= n; i++){
                    console.log(firstString.repeat(n-i) + secondString.repeat(i));
                }
            }
        };
        
        result(number);

    }
    else {
        console.log("Invalid Input");
    }
}

module.exports = {mpSolution2};