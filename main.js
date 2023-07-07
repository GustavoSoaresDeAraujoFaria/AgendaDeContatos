
const form = document.getElementById('form-agenda');
const corpoTabela = document.querySelector('tbody');
let linhas = '';

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputNome = document.getElementById('Nome');
    const inputNumero = document.getElementById('Numero');

    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    corpoTabela.innerHTML = linhas;

    inputNome.value = '';
    inputNumero.value = '';
});

function clicar(){
    var Corpo = document.querySelector('body');
    Corpo.style.background = ' #e7e7e7';
    Corpo.style.color = 'black';

    var Nome = document.getElementById('Nome');
    Nome.style.background = '#e7e7e7';
    Nome.style.color = 'black';


    var Numero = document.getElementById('Numero');
    Numero.style.background = '#e7e7e7';
    Numero.style.color = 'black';


    var BotaoAdd= document.getElementById('Botao');
    BotaoAdd.style.background = '#ddddddeb';
    BotaoAdd.style.color = 'black'     

    var ModoClaro = document.getElementById('ModoClaro')
    ModoClaro.style.background = '#ddddddeb';
    ModoClaro.style.color = 'black';


    var ModoEscuro = document.getElementById('ModoEscuro')
    ModoEscuro.style.background ='#e7e7e7';
    ModoEscuro.style.color = 'black';
}


function clicar2(){
    var Corpo2 = document.querySelector('body');
    Corpo2.style.background = ' black';
    Corpo2.style.color = 'white';


    var Nome2 = document.getElementById('Nome');
    Nome2.style.background = 'black';
    Nome2.style.color = 'white';


    var Numero2 = document.getElementById('Numero');
    Numero2.style.background = 'black';
    Numero2.style.color = 'white';



    var BotaoAdd2 = document.getElementById('Botao');
    BotaoAdd2.style.background = 'black';
    BotaoAdd2.style.color = '#ddddddeb';



    var ModoEscuro = document.getElementById('ModoEscuro')
    ModoEscuro.style.background = 'black';
    ModoEscuro.style.color = '#ddddddeb';
    

    var ModoClaro = document.getElementById('ModoClaro')
    ModoClaro.style.background = 'black';
    ModoClaro.style.color = '#ddddddeb';
}


/* (fail, mas vale guardar)
var AnimacaoBotao = document.getElementById('ModoEscuro');
    AnimacaoBotao.addEventListener('mouseenter', dentro)
    function dentro(){
        AnimacaoBotao.style.color = 'black';
        AnimacaoBotao.style.background = 'white';
    }
        AnimacaoBotao.addEventListener('mouseout', fora)
    function fora(){
        AnimacaoBotao.style.color = 'black';
        AnimacaoBotao.style.background = '#f2f2f2';
    }
    */