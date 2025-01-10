const data = require('./resources/dados.json');

const getMaxValue = (arr) => {
    const maxValue = Math.max(...arr.filter(item => item.valor > 0).map(item => item.valor));
    return `O maior valor de faturamento ocorrido em um dia do mês foi de R$ ${maxValue}`;
};

const getMinValue = (arr) => {
    const minValue = Math.min(...arr.filter(item => item.valor > 0).map(item => item.valor));
    return `O menor valor de faturamento ocorrido em um dia do mês foi de R$ ${minValue}`;
};

const getAverageValue = (arr) => {
    const averageValue = arr.filter(item => item.valor > 0).reduce((acc, current) => {
        return acc + current.valor;
    }, 0) / arr.length;
    return averageValue;
};

const getDaysAboveAverage = (arr) => {
    const daysAboveAverage = arr.filter(item => item.valor > 0).filter(item => item.valor > getAverageValue(arr));
    return `O Numero de dias em que o valor é maior que a média é: ${daysAboveAverage.length}`;
};

console.log(getMaxValue(data));
console.log(getMinValue(data));
console.log(getDaysAboveAverage(data));