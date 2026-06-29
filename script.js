function corregir() {
    var respostes = {
        resposta1: 'a',
        resposta2: 'a',
        resposta3: 'c',
        resposta4: 'b',
        resposta5: 'a'
    };
    var correctes = 0;
    var errades = 0;

    for (var nom in respostes) {
        var seleccionada = document.querySelector('input[name="' + nom + '"]:checked');
        if (seleccionada && seleccionada.value === respostes[nom]) {
            correctes++;
        } else {
            errades++;
        }
    }

    var text = 'Correctes: ' + correctes + '. Errades: ' + errades + '.';
    document.getElementById('resultat').textContent = text;
}
