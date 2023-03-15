/*
    1. I created a function that will serve as the main program. It will first have a validation if the input number is an integer otherwise it will
        prompt an Invalid Input message.
    2. After the validation, there will be another checking if the input is 0.
    3. The program will then proceed into a loop if the input is not 0 and will be using if-else statements for each condition provided.
*/
function mpSolution1(number) {
    if (Number.isInteger(parseInt(number)) === true) {
        let result = (n) => {
            if (n == 0){
                console.log("Input n must be greater than 0.");
            }
            else {
                for (i = 1; i <= n; i++){
                    if (i % 5 == 0 && i % 7 == 0){
                        console.log("Knose Pet Care Made Easy");
                    }
                    else if (i % 5 == 0){
                        console.log("Knose");
                    }
                    else if (i % 7 == 0){
                        console.log("Pet Care Made Easy");
                    }
                    else {
                        console.log(i);
                    }
                }
            }
            
            
        };
        
        result(number);
    }
    else {
        console.log("Invalid Input");
    }
}

module.exports = {mpSolution1};