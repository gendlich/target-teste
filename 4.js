const data = [
    {
        "estado": "SP",
        "valor": 67836.43
    },
    {
        "estado": "RJ",
        "valor": 36678.66
    },
    {
        "estado": "MG",
        "valor": 29229.88
    },
    {
        "estado": "ES",
        "valor": 27165.48
    },
    {
        "estado": "Outros",
        "valor": 19849.53
    },
]

const getTotalValue = (arr) => {
    return arr.reduce((acc, current) => {
        return acc + current.valor;
    }, 0);
};

const getPercentageByState = (arr) => {
    const totalValue = getTotalValue(arr);
    return arr.map(item => {
        return {
            estado: item.estado,
            percentage: (item.valor / totalValue) * 100
        }
    });
};

console.log(`O percentual de representação da distribuidora foi de:
${getPercentageByState(data).map(item => `${item.estado}: ${item.percentage.toFixed(2)}%`).join('\n')}`);
