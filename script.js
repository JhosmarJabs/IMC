document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let peso = parseFloat(document.getElementById('Peso').value);
    let estatura = parseFloat(document.getElementById('Estatura').value) / 100; 

    let imc = peso / (estatura * estatura);

    let tipoIMC = '';
    if (imc < 18.5) {
        tipoIMC = 'Bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        tipoIMC = 'Normal';
    } else if (imc >= 25 && imc < 29.9) {
        tipoIMC = 'Sobrepeso';
    } else {
        tipoIMC = 'Obesidad';
    }

    document.getElementById('Resultado').innerHTML = `IMC: ${imc.toFixed(2)}, Tipo IMC: ${tipoIMC}`;
});