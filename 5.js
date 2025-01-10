
const getReversedString = (str) => {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
};

// Alterar para o texto que quer reverter
const stringToReverse = "target-teste";

console.log(getReversedString(stringToReverse));