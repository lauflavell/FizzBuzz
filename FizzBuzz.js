function isDivisable(n, m){
    return n % m == 0;
}

function printNumbers(){
    for (i = 1; i <= 100; i++){
        if (isDivisable(i, 3) && isDivisable(i, 5)){
            console.log("FizzBuzz")
        } else if (isDivisable(i, 3)){
            console.log("Fizz")
        } else if (isDivisable(i, 5)){
            console.log("Buzz")
        } else console.log(i);      
    }
}
printNumbers();
