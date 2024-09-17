/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

- Ler os dados do faturamento diário;
- Calcular o menor e maior faturamento;
- Calcular a média do faturamento mensal;
- Contar o número de dias em que o faturamento diário foi superior à média mensal; */

// Arquivo JSON
const faturamento = [
    { dia: 1, valor: 200 },
    { dia: 2, valor: 0 },
    { dia: 3, valor: 300 },
    { dia: 4, valor: 0 },
    { dia: 5, valor: 500 },
    
];


function menorValor(faturamento) {
    return Math.min(...faturamento.map(f => f.valor));
}


function maiorValor(faturamento) {
    return Math.max(...faturamento.map(f => f.valor));
}


function calcularMedia(faturamento) {
    const diasComFaturamento = faturamento.filter(f => f.valor > 0);
    const totalFaturamento = diasComFaturamento.reduce((acc, f) => acc + f.valor, 0);
    const quantidadeDias = diasComFaturamento.length;
    return totalFaturamento / quantidadeDias;
}


function contarDiasAcimaDaMedia(faturamento, media) {
    return faturamento.filter(f => f.valor > media).length;
}


const menor = menorValor(faturamento);
const maior = maiorValor(faturamento);
const media = calcularMedia(faturamento);
const diasAcimaDaMedia = contarDiasAcimaDaMedia(faturamento, media);

console.log(`Menor valor de faturamento: ${menor}`);
console.log(`Maior valor de faturamento: ${maior}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
