var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector('.info-imc');
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
    
        tdImc.textContent = "Peso inválido!";
        var pesoEhValido = false;
        paciente.style.color = "red";
    }
    
    if (!alturaEhValida){
    
        console.log("Altura inválida!");
        var alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.style.color = "red";
    }
    
    if (alturaEhValida && pesoEhValido){
        var imc = peso / (altura*altura);
        tdImc.textContent = Math.round(imc);
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <= 3.0){
        return true
    }else{
        return false
    }
}

function calculaImc (peso,altura){
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);
}


