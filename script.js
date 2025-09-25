 import { PALAVRAS_RUINS } from "./palavrasRuins.js";
const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavrasChave = processaTexto(texto);
    campoResultado.textContent = palavrasChave.join(", ");
}


function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);

    for (let i in palavras) {
        palavras[i] = palavras[i].toLowerCase();
    }

    palavras = tiraPalavrasRuins(palavras);

    const frequencias = contaFrequencias(palavras);



    function ordenaPalavra(p1, p2) {
        return frequencias[p2] - frequencias[p1];
    }

    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);
    return ordenadas.slice(0, 10);
}
function tiraPalavrasRuins(palavras) {
    const palavrasBoas = [];
    for (let palavra of palavras) {
        if (!PALAVRAS_RUINS.has(palavra) && palavra.length > 2) {
            palavrasBoas.push(palavra);
        }
    }
    return palavrasBoas;
}

function contaFrequencias(palavras) {
    const frequencias = {};

    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i]++;
            }
        }
    }

    return frequencias;
}

Adicionar comentário para a turma...


Postada por ALEXANDRA TEREZINHA KAPUSINSKI
ALEXANDRA TEREZINHA KAPUSINSKI
Criado em: 08:4508:45 (editado: 08:49)
<!DOCTYPE html>
<html lang="pt-BT">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Extrator de Palavras-Chave</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1>Extrator de palavras-chave</h1>
        <textarea id="entrada-de-texto" placeholder="Digite ou cole seu texto aqui..."></textarea>
        <button id="botao-palavrachave">Extrair</button>
        <div id="resultado-palavrachave"></div>
    </div>
    <script type="module" src="script.js"></script>
</body>

</html>