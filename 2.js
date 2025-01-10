
let fibonnaciArray = [0, 1];

const getNextFibonacciNumber = (fibonnaciArr) => {
    return fibonnaciArr.reduce((acc, current) => {
        return acc + current;
    });
};

const verifyIfIsFromFibonacci = (number) => {
    let arr = fibonnaciArray;
    do {
        if(arr[1] == number) {
            console.log("O Número faz parte da sequência de Fibonacci");
            return;
        }
        arr = [arr[1], getNextFibonacciNumber(arr)];
    } while (arr[0] < number);

    console.log("O Número não faz parte da sequência de Fibonacci");
};

// Mudar o valor que quer verificar se faz parte da sequência de Fibonacci
verifyIfIsFromFibonacci(10);
verifyIfIsFromFibonacci(13);
verifyIfIsFromFibonacci(20);
verifyIfIsFromFibonacci(21);