function isDivisable(n, m){
    return n % m == 0;
}

function printNumbers(){
    for (i = 500; i <= 512; i++){
        let print = "";
        if (isDivisable(i, 3)){
            print += "Fizz"
        }
        if (isDivisable(i, 5)){
            print += "Buzz"
        } 
        if (isDivisable(i, 7)){
            print += "Bang"
        }
        if (isDivisable(i, 11)){
            print = "Bong"
        }
        if (isDivisable(i, 13)){
            if(print.startsWith('B')){
                print = 'Fezz' + print.substring(0)
            }
            else if(print.startsWith('F')){
                let printArr = print.split('')
                printArr.splice(4,0,'Fezz')
                print = printArr.join('');
            }
            else print = 'Fezz'
        }
        if (isDivisable(i, 17) && print.length > 4){
                const arr = [...print.matchAll(/.{4}/g)].reverse()
                print = arr.join('')
        }
        else if (print === "")   {
            print = i;
        }  
        console.log(print) 
    }
    
}
printNumbers();
