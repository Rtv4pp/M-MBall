var listaTimes = [
    {classificacao: 0, time: 'Disponivel', pontos: 0, vitorias: 0, derrotas: 0, empates: 0 },
    {classificacao: 0, time: 'Disponivel', pontos: 0, vitorias: 0, derrotas: 0, empates: 0 },
    {classificacao: 0, time: 'Disponivel', pontos: 0, vitorias: 0, derrotas: 0, empates: 0 },
    {classificacao: 0, time: 'Disponivel', pontos: 0, vitorias: 0, derrotas: 0, empates: 0 },
    {classificacao: 0, time: 'Disponivel', pontos: 0, vitorias: 0, derrotas: 0, empates: 0 },
    {classificacao: 0, time: 'Disponivel', pontos: 0, vitorias: 0, derrotas: 0, empates: 0 },
    {classificacao: 0, time: 'Disponivel', pontos: 0, vitorias: 0, derrotas: 0, empates: 0 },
    {classificacao: 0, time: 'Disponivel', pontos: 0, vitorias: 0, derrotas: 0, empates: 0 },
    {classificacao: 0, time: 'Disponivel', pontos: 0, vitorias: 0, derrotas: 0, empates: 0 },
    {classificacao: 0, time: 'Disponivel', pontos: 0, vitorias: 0, derrotas: 0, empates: 0 },
];

function criaTabelaClassificacao(listaTimes) {
    for (var n = 0; n < listaTimes.length; n++) {
        // Set classificacao based on position
        if (n < 2) {
            listaTimes[n].classificacao = 1; // Top 4 teams have classificação 1
        } else if (n === 2 || n === 3) {
            listaTimes[n].classificacao = 3; // Positions 5 and 6 have classificação 3
        }

        // Check if classificacao is 1 or 3, and hide the number in those cases
        var classificacaoText =listaTimes[n].classificacao === 0 || listaTimes[n].classificacao === 1 || listaTimes[n].classificacao === 3 ? '' : listaTimes[n].classificacao;

        // Check the value of classificacao and set the dot color accordingly
        var dotColor;
        if (listaTimes[n].classificacao === 1) {
            dotColor = 'green';
        } else if (listaTimes[n].classificacao === 3) {
            dotColor = 'orange';
        } else if (listaTimes[n].classificacao === 0) {
            dotColor = 'gray';
        }

        // Add a span with a class for styling and the determined color
        var dot = '<span class="dot ' + dotColor + '"></span>';

        var tr = '<tr>\
            <td>' + dot + classificacaoText + '<td/>\
            <td>' + listaTimes[n].time + '<td/>\
            <td>' + listaTimes[n].pontos + '<td/>\
            <td>' + listaTimes[n].vitorias + '<td/>\
            <td>' + listaTimes[n].derrotas + '<td/>\
            <td>' + listaTimes[n].empates + '<td/>\
            <tr/>';
        $('#tabela-classificacao').append(tr);
    }
}


function ordenaTabelaPorPontuacao(listaTimes) {
    listaTimes.sort(function (a, b) {
        if (a.pontos < b.pontos) return -1;
        if (a.pontos > b.pontos) return 1;
        return 0;
    });

    var listaOrdenada = listaTimes.slice(0).reverse();
    criaTabelaClassificacao(listaOrdenada);
}

$(document).ready(function () {
    ordenaTabelaPorPontuacao(listaTimes);
});