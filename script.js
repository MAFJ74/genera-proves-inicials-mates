var bancPreguntes = {
    aritmetica: [
        {
            text: 'Racionalitza l\'expressió \\(\\frac{3}{\\sqrt{2}}\\). Quina és la forma correcta?',
            options: ['\\(\\frac{3\\sqrt{2}}{2}\\)', '\\(\\frac{3}{2\\sqrt{2}}\\)', '\\(\\sqrt{6}\\)', '\\(\\frac{6}{\\sqrt{2}}\\)'],
            correcta: 0
        },
        {
            text: 'Factoritza \\(\\sqrt{18} + \\sqrt{8}\\).',
            options: ['\\(3\\sqrt{2} + 2\\sqrt{2}\\)', '\\(\\sqrt{2}(3 + 2)\\)', '\\(5\\sqrt{2}\\)', '\\(\\sqrt{16} + \\sqrt{10}\\)'],
            correcta: 2
        },
        {
            text: 'Quina és la simplificació de \\(\\frac{\\sqrt{50}}{\\sqrt{2}}\\)?',
            options: ['5', '\\(5\\sqrt{2}\\)', '\\(\\sqrt{25}\\)', '\\(\\frac{\\sqrt{25}}{2}\\)'],
            correcta: 0
        },
        {
            text: 'Expressa \\(12\\sqrt{3}\\) com a producte de factor real.',
            options: ['\\(6\\sqrt{12}\\)', '\\(2\\sqrt{27}\\)', '\\(4\\sqrt{9}\\)', '\\(12\\sqrt{3}\\)'],
            correcta: 0
        },
        {
            text: 'Quin és el factor comú extraïble de \\(6\\sqrt{5} + 3\\sqrt{20}\\)?',
            options: ['\\(3\\sqrt{5}\\)', '\\(6\\sqrt{5}\\)', '\\(\\sqrt{5}\\)', '\\(3\\sqrt{20}\\)'],
            correcta: 0
        }
    ],
    equacions: [
        {
            text: 'Resol \\(x^2 - 5x + 6 = 0\\) mitjançant factorització.',
            options: ['\\(x = 2\\) o \\(x = 3\\)', '\\(x = 1\\) o \\(x = 6\\)', '\\(x = -2\\) o \\(x = -3\\)', '\\(x = 5\\)'],
            correcta: 0
        },
        {
            text: 'Resol l\'equació racional \\(\\frac{x + 1}{x - 2} = 3\\).',
            options: ['\\(x = 5\\)', '\\(x = 1\\)', '\\(x = -1\\)', '\\(x = 2\\)'],
            correcta: 0
        },
        {
            text: 'Resol l\'equació irracional \\(\\sqrt{x + 1} = 3\\).',
            options: ['\\(x = 8\\)', '\\(x = 2\\)', '\\(x = 9\\)', '\\(x = 4\\)'],
            correcta: 0
        },
        {
            text: 'Resol l\'equació exponencial \\(2^{x} = 8\\).',
            options: ['\\(x = 3\\)', '\\(x = 4\\)', '\\(x = 2\\)', '\\(x = 1/3\\)'],
            correcta: 0
        },
        {
            text: 'Resol l\'equació logarítmica \\(\\log_{2}(x - 1) = 3\\).',
            options: ['\\(x = 9\\)', '\\(x = 8\\)', '\\(x = 7\\)', '\\(x = 4\\)'],
            correcta: 0
        }
    ],
    sistemes: [
        {
            text: 'Resol el sistema no lineal: \\(x^2 + y = 5\\) i \\(x + y = 3\\). Quin és \\(x\\)?',
            options: ['\\(1\\)', '\\(2\\)', '\\(3\\)', '\\(0\\)'],
            correcta: 1
        },
        {
            text: 'En el sistema \\(xy = 4\\) i \\(x + y = 5\\), quin parell de valors és una solució?',
            options: ['\\((1,4)\\)', '\\((2,2)\\)', '\\((4,1)\\)', '\\((0,5)\\)'],
            correcta: 0
        },
        {
            text: 'Resol \\(x^2 + y^2 = 13\\) i \\(x - y = 1\\). Quin és \\(x\\)?',
            options: ['\\(3\\)', '\\(2\\)', '\\(4\\)', '\\(1\\)'],
            correcta: 0
        },
        {
            text: 'Resol el sistema \\(x^2 + y = 7\\) i \\(x - y = 1\\). Quin és \\(x\\)?',
            options: ['\\(2\\)', '\\(3\\)', '\\(1\\)', '\\(4\\)'],
            correcta: 0
        }
    ],
    inequacions: [
        {
            text: 'Quina és la solució de \\(\\frac{2x - 1}{x - 2} > 0\\)?',
            options: ['\\(x < \frac{1}{2} \\text{o} x > 2\\)', '\\(x > 2\\)', '\\(0 < x < 2\\)', '\\(x < \frac{1}{2}\\)'],
            correcta: 0
        },
        {
            text: 'Quina és la solució de \\(x^2 - 4x + 3 < 0\\)?',
            options: ['\\(1 < x < 3\\)', '\\(x < 1\\)', '\\(x > 3\\)', '\\(x < 1 \\text{o} x > 3\\)'],
            correcta: 0
        },
        {
            text: 'Quina és la solució de \\(\\frac{x + 2}{x + 1} \\le 0\\)?',
            options: ['\\(-2 \\le x < -1\\)', '\\(x < -2\\)', '\\(x > -1\\)', '\\(-1 < x < -2\\)'],
            correcta: 0
        },
        {
            text: 'Quina és la solució de \\(x^2 - 2x - 3 \\ge 0\\)?',
            options: ['\\(x \\le -1 \\text{o} x \\ge 3\\)', '\\(-1 < x < 3\\)', '\\(x \\ge 3\\)', '\\(x \\le -1\\)'],
            correcta: 0
        }
    ],
    funcions: [
        {
            text: 'Quin és el domini de \\(f(x) = \\frac{1}{x - 2}\\)?',
            options: ['\\(x \\neq 2\\)', '\\(x > 2\\)', '\\(x \\ge 2\\)', '\\(x < 2\\)'],
            correcta: 0
        },
        {
            text: 'Quins són els punts de tall amb els eixos de \\(f(x) = x^2 - 4\\)?',
            options: ['\\((0,-4)\\) i \\((-2,0)\\), \\((2,0)\\)', '\\((0,4)\\) i \\((2,0)\\)', '\\((0,0)\\) i \\((2,-4)\\)', '\\((-2,0)\\), \\((2,0)\\) només'],
            correcta: 0
        },
        {
            text: 'Quina afirmació sobre la continuïtat de \\(f(x) = \\sqrt{x - 1}\\) és correcta al seu domini?',
            options: ['És contínua per a \\((x \\ge 1)\\)', 'No és contínua en cap punt', 'Només és contínua en \\((x = 1)\\)', 'És contínua per a \\((x > 1)\\) i discontínua en \\((x = 1)\\)'],
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
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise([form]).catch(function(err) {
            console.error('MathJax render error:', err.message);
        });
    }
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
