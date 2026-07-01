var bancPreguntes = {
    aritmetica: [
        {
            text: 'Racionalitza l\'expressió 3/√2. Quina és la forma correcta?',
            options: ['3√2/2', '3/(2√2)', '√6', '6/√2'],
            correcta: 0
        },
        {
            text: 'Factoritza √18 + √8.',
            options: ['3√2 + 2√2', '√2(3 + 2)', '5√2', '√16 + √10'],
            correcta: 2
        },
        {
            text: 'Quina és la simplificació de √50 / √2?',
            options: ['5', '5√2', '√25', '√25/2'],
            correcta: 0
        },
        {
            text: 'Expressa 12√3 com a producte de factor real.',
            options: ['6√12', '2√27', '4√9', '12√3'],
            correcta: 0
        },
        {
            text: 'Quin és el factor comú extraïble de 6√5 + 3√20?',
            options: ['3√5', '6√5', '√5', '3√20'],
            correcta: 0
        }
    ],
    equacions: [
        {
            text: 'Resol x^2 - 5x + 6 = 0 mitjançant factorització.',
            options: ['x = 2 o x = 3', 'x = 1 o x = 6', 'x = -2 o x = -3', 'x = 5'],
            correcta: 0
        },
        {
            text: 'Resol l\'equació racional (x + 1) / (x - 2) = 3.',
            options: ['x = 5', 'x = 1', 'x = -1', 'x = 2'],
            correcta: 0
        },
        {
            text: 'Resol l\'equació irracional √(x + 1) = 3.',
            options: ['x = 8', 'x = 2', 'x = 9', 'x = 4'],
            correcta: 0
        },
        {
            text: 'Resol l\'equació exponencial 2^x = 8.',
            options: ['x = 3', 'x = 4', 'x = 2', 'x = 1/3'],
            correcta: 0
        },
        {
            text: 'Resol l\'equació logarítmica log_2(x - 1) = 3.',
            options: ['x = 9', 'x = 8', 'x = 7', 'x = 4'],
            correcta: 0
        }
    ],
    sistemes: [
        {
            text: 'Resol el sistema no lineal: x^2 + y = 5 i x + y = 3. Quin és x?',
            options: ['1', '2', '3', '0'],
            correcta: 1
        },
        {
            text: 'En el sistema xy = 4 i x + y = 5, quin parell de valors és una solució?',
            options: ['(1,4)', '(2,2)', '(4,1)', '(0,5)'],
            correcta: 0
        },
        {
            text: 'Resol x^2 + y^2 = 13 i x - y = 1. Quin és x?',
            options: ['3', '2', '4', '1'],
            correcta: 0
        },
        {
            text: 'Resol el sistema x^2 + y = 7 i x - y = 1. Quin és x?',
            options: ['2', '3', '1', '4'],
            correcta: 0
        }
    ],
    inequacions: [
        {
            text: 'Quina és la solució de (2x - 1) / (x - 2) > 0?',
            options: ['x < 1/2 o x > 2', 'x > 2', '0 < x < 2', 'x < 1/2'],
            correcta: 0
        },
        {
            text: 'Quina és la solució de x^2 - 4x + 3 < 0?',
            options: ['1 < x < 3', 'x < 1', 'x > 3', 'x < 1 o x > 3'],
            correcta: 0
        },
        {
            text: 'Quina és la solució de (x + 2) / (x + 1) ≤ 0?',
            options: ['-2 ≤ x < -1', 'x < -2', 'x > -1', '-1 < x < -2'],
            correcta: 0
        },
        {
            text: 'Quina és la solució de x^2 - 2x - 3 ≥ 0?',
            options: ['x ≤ -1 o x ≥ 3', '-1 < x < 3', 'x ≥ 3', 'x ≤ -1'],
            correcta: 0
        }
    ],
    funcions: [
        {
            text: 'Quin és el domini de f(x) = 1 / (x - 2)?',
            options: ['x ≠ 2', 'x > 2', 'x ≥ 2', 'x < 2'],
            correcta: 0
        },
        {
            text: 'Quins són els punts de tall amb els eixos de f(x) = x^2 - 4?',
            options: ['(0,-4) i (-2,0), (2,0)', '(0,4) i (2,0)', '(0,0) i (2,-4)', '(-2,0), (2,0) només'],
            correcta: 0
        },
        {
            text: 'Quina afirmació sobre la continuïtat de f(x) = √(x - 1) és correcta al seu domini?',
            options: ['És contínua per a x ≥ 1', 'No és contínua en cap punt', 'Només és contínua en x = 1', 'És contínua per a x > 1 i discontínua en x = 1'],
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
