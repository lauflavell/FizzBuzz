function printNumbers(){
    for (i = 1; i <= 100; i++){
        if (i % 3 == 0){
            console.log("Fizz")
            continue;
        } else console.log(i)
    }
}
printNumbers();
