const form = document.querySelector('#formulario');

form.addEventListener('submit', function (recall) { // Quando enviar o resultado o mesmo recarregar a página
    recall.preventDefault();
    
    const inputPrimeiroNumero = recall.target.querySelector('#primeiroNumero'); // Criando as variaveis 

        const primeiroNumero = Number(inputPrimeiroNumero.value); // Convertendo o valor do usuário para Number

            if (!primeiroNumero) {
                setResultadoCalc('Primeiro Número Inválido', false) // Caso o valor do usuário for diferente de number, vai exibir essa mensagem
                return;
            }

    const inputOutroNumero = recall.target.querySelector('#outroNumero'); // Criando as variaveis 

        const outroNumero = Number(inputOutroNumero.value); // Convertendo o valor do usuario para Number

            if (!outroNumero) {
                setResultadoCalc('Segundo Número Inválido', false) // Caso o valor do usuário for diferente de number, vai exibir essa mensagem
                return;
            }
        
            const retornoCalcSomar = calcSomar(primeiroNumero, outroNumero);

            const retornoCalcSub = calcSub(primeiroNumero, outroNumero);

            const retornoCalcDiv = calcDiv(primeiroNumero, outroNumero)
    
                const msgCalc = `${retornoCalcSomar}`;

                const msgSub = `${retornoCalcSub}`;

                const msgDiv = `${retornoCalcDiv}`


          //if (setResultadoCalc ===) {

          //}

    
            //console.log(msgCalc)

            //console.log(msgSub)

            //console.log(msgDiv)

                //const msg = `Soma ${retornoCalcSomar} Sub ${retornoCalcSub} Div ${retornoCalcDiv}`
     
        setResultadoCalc(msgCalc, true);

        setResultadoSub(msgSub, true);

        setResultadoDiv(msgDiv, true)

});

//

function calcSomar (primeiroNumero, outroNumero) {
    const retornoCalcSomar = primeiroNumero + outroNumero;
    return retornoCalcSomar;
}

function calcSub (primeiroNumero, outroNumero) {
    const retornoCalcSub = primeiroNumero - outroNumero;
    return retornoCalcSub;
}

function calcDiv (primeiroNumero, outroNumero) {
    const retornoCalcDiv = primeiroNumero / outroNumero;
    return retornoCalcDiv;
}

// 

function criaCacl() { 
    const pCalc = document.createElement('pCalc');
    return pCalc;
}

function setResultadoCalc(msgCalc, isValid) { 
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;

    const pCalc = criaCacl();

    if (isValid) {
        pCalc.classList.add('paragrafo-resultado');
    } else {
        pCalc.classList.add('bad');
    }

    pCalc.innerHTML = msgCalc;  
    
    resultado.appendChild(pCalc);
}

function criaSub() {
    const pSub = document.createElement('pSub');
    return pSub;
}

function setResultadoSub(msgSub, isValid) { 
    const resultadosub = document.querySelector('#resultadosub');
    resultadosub.innerHTML = ``;

    const pSub = criaSub();

    if (isValid) {
        pSub.classList.add('paragrafo-resultado');
    } else {
        pSub.classList.add('bad');
    }

    pSub.innerHTML = msgSub;  
    
    resultadosub.appendChild(pSub);
}

function criaDiv() {
    const pDiv = document.createElement('pDiv');
    return pDiv;
}

function setResultadoDiv(msgDiv, isValid) { 
    const resultadodiv = document.querySelector('#resultadodiv');
    resultadodiv.innerHTML = ``;

    const pDiv = criaDiv();

    if (isValid) {
        pDiv.classList.add('paragrafo-resultado');
    } else {
        pDiv.classList.add('bad');
    }

    pDiv.innerHTML = msgDiv;  
    
    resultadodiv.appendChild(pDiv);
}