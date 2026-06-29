var bancPreguntes = {
    aritmetica: [
        {
            text: 'Quin és el resultat de 125 + 76?',
            options: ['191', '201', '199', '205'],
            correcta: 0
        },
        {
            text: 'Quina és la suma de 342 i 158?',
            options: ['490', '500', '480', '510'],
            correcta: 0
        },
        {
            text: 'Quin és el 25% de 240?',
            options: ['60', '50', '70', '55'],
            correcta: 0
        }
    ],
    equacions: [
        {
            text: 'Quina és la solució de 3x - 5 = 16?',
            options: ['7', '5', '8', '11'],
            correcta: 0
        },
        {
            text: 'Resol x + 9 = 14.',
            options: ['5', '4', '6', '7'],
            correcta: 0
        },
        {
            text: 'Si 4x = 20, què val x?',
            options: ['5', '4', '6', '10'],
            correcta: 0
        }
    ],
    sistemes: [
        {
            text: 'En el sistema x + y = 7 i x - y = 3, quin és el valor de x?',
            options: ['2', '3', '5', '4'],
            correcta: 2
        },
        {
            text: 'Si x + y = 5 i x = 2, quin és y?',
            options: ['2', '3', '4', '1'],
            correcta: 1
        },
        {
            text: 'En el sistema x + y = 6 i y = 2, quin és x?',
            options: ['2', '3', '4', '1'],
            correcta: 2
        }
    ],
    inequacions: [
        {
            text: 'Quina és la solució de 2x + 1 < 7?',
            options: ['x < 3', 'x < 2', 'x < 4', 'x < 1'],
            correcta: 1
        },
        {
            text: 'Quina és la solució de x - 2 < 4?',
            options: ['x < 6', 'x < 2', 'x < 5', 'x < 4'],
            correcta: 0
        },
        {
            text: 'Quina és la solució de 3x < 12?',
            options: ['x < 4', 'x < 3', 'x < 5', 'x < 6'],
            correcta: 0
        }
    ],
    funcions: [
        {
            text: 'Si f(x) = x² - 4, quin és f(2)?',
            options: ['0', '2', '4', '6'],
            correcta: 0
        },
        {
            text: 'Si f(x) = 2x + 1, quin és f(3)?',
            options: ['7', '6', '8', '5'],
            correcta: 0
        },
        {
            text: 'Quina és la imatge de 4 per la funció f(x) = x - 1?',
            options: ['3', '4', '5', '2'],
            correcta: 0
        }
    ]
};

var provaActual = [];

function obtenirPreguntaAleatoria(tema) {
    var llista = bancPreguntes[tema];
    var index = Math.floor(Math.random() * llista.length);
    return Object.assign({ tema: tema }, llista[index]);
}

function generarProva() {
    provaActual = [
        obtenirPreguntaAleatoria('aritmetica'),
        obtenirPreguntaAleatoria('equacions'),
        obtenirPreguntaAleatoria('sistemes'),
        obtenirPreguntaAleatoria('inequacions'),
        obtenirPreguntaAleatoria('funcions')
    ];
    renderQuiz(provaActual);
    document.getElementById('resultat').textContent = '';
}

function renderQuiz(preguntes) {
    var form = document.getElementById('quizForm');
    var html = '';

    preguntes.forEach(function(pregunta, index) {
        html += '<fieldset>';
        html += '<legend>Pregunta ' + (index + 1) + ': ' + pregunta.tema + '</legend>';
        html += '<p>' + pregunta.text + '</p>';

        pregunta.options.forEach(function(opcio, opIndex) {
            var value = String.fromCharCode(97 + opIndex);
            html += '<label><input type="radio" name="resposta' + (index + 1) + '" value="' + value + '"> ' + value + ') ' + opcio + '</label>';
        });

        html += '</fieldset>';
    });

    form.innerHTML = html;
}

function corregir() {
    var correctes = 0;
    var errades = 0;

    provaActual.forEach(function(pregunta, index) {
        var nom = 'resposta' + (index + 1);
        var seleccionada = document.querySelector('input[name="' + nom + '"]:checked');
        if (seleccionada && seleccionada.value === String.fromCharCode(97 + pregunta.correcta)) {
            correctes++;
        } else {
            errades++;
        }
    });

    var text = 'Correctes: ' + correctes + '. Errades: ' + errades + '.';
    document.getElementById('resultat').textContent = text;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('checkButton').addEventListener('click', corregir);
    document.getElementById('newQuizButton').addEventListener('click', generarProva);
    generarProva();
});
