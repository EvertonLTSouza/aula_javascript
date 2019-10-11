function click1() {
    document.getElementById('agradecimento').innerHTML = 'Obrigado pelo Click!';
    //alert('Legal!');
    //console.log('Legal!');
}

function redirecionar() {
    window.open('https://mail.google.com/mail/u/0/#inbox'); //Abre uma nova página.
    window.location.href = 'https://mail.google.com/mail/u/0/#inbox'; //Abre na mesma página em que se está.
}

function detectar() {
    document.getElementById('mousemove').innerHTML = 'Obrigado';
}

function chan(elemento) {
    console.log(elemento.value);
}

/*var nome = 'Everton Souza';
var idade = 26;
alert('Bem Vindo ' + nome);
alert(nome + ' tem ' + idade + ' Anos.');
console.log(nome);
console.log(idade);
console.log(nome.replace('Souza', 'Teixeira;'))
lista.pop();
console.log(lista);
console.log(lista.length);
lista.push('Uva');
console.log(lista);
console.log(lista.length);
console.log(lista.toString()); //Tranforma em String os elementos da lista, separando por virgula
console.log(lista.join(' - ')); //Tranforma em String os elementos da lista, separando pelo elemento determinado
var fruta = { nome: 'banana', cor: 'amarela' }; // declara e pupola uma lista
var lista = ['Maça', 'Banana', 'Morango']; //Declara e popula um Array

var fruta2 = { nome: 'romã', cor: 'rosa' };
var frutas = [{ nome: 'banana', cor: 'amarela' }, fruta2]; // declara e pupola uma lista
console.log(fruta2); //Exibe a lista completa
console.log(frutas[0].cor); //Exibe o elemento selecionado da lista
console.log(frutas[1].cor); //Exibe o elemento selecionado da lista

var idade = 18;

var idade = prompt('Qual sua Idade');

if (idade >= 18) {
    console.log('Maior de Idade');
} else {
    console.log('Menor de Idade');
}

var count = 0;

while (count < 5) {
    console.log(count);
    count = count + 1;
}

var count;

for (count = 0; count <= 5; count++) {
    console.log(count);
}

var d = new Date();

console.log(d.getMonth());

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(5, 10));

var valida = 0; // Variável Global

function validaIdade(idade) {
    var valida; //Variável Local
    if (idade >= 18) {
        valida = true;
    } else {
        valida = false;
    }
}

validaIdade(18); //Se não houver variável local declarada, irá alterar a global.
console.log(valida); //ira imprimir somente a variável global

*/