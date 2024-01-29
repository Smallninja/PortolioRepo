let pets = ["dog","cat","mouse","lion"];

function addOne(num){
    num + 1;
    console.log(num);
}

function takeNumber (pasNumb){
    console.log(pasNumb);
}
function isItEven(passedNumber, number ){
    if (number % 2 === 0) {
        passedNumber(number);
    }
    else {
        console.log("Number is Odd");
    }
}

for(let x in pets) {
    isItEven(addOne, x);
}