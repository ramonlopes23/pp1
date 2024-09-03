let memory = 0;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        // Calcula a raiz quadrada e porcentagem
        expression = expression.replace(/√\(/g, 'Math.sqrt(').replace(/%/g, '/100');
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

function addToMemory() {
    try {
        let current = parseFloat(document.getElementById('display').value);
        memory += isNaN(current) ? 0 : current;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

function subtractFromMemory() {
    try {
        let current = parseFloat(document.getElementById('display').value);
        memory -= isNaN(current) ? 0 : current;
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

function recallMemory() {
    document.getElementById('display').value = memory;
}

function clearMemory() {
    memory = 0;
}
    