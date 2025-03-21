/*
console.log('hello world');  

//atividade 1

let num = prompt ('digite um numero')
function verificarPar(num) {  
    
    if (num % 2 === 0) {  
        console.log('par');  
    } else {  
        console.log('impar');  
    }  
}  

 
verificarPar();  

//atividade 2

let num1 = parseFloat (prompt (' digite o primeiro numero'));
let num2 = parseFloat (prompt (' digite o segundo numero'));

function calcular(num1, num2){

   
   
console.log('soma'+(num1 + num2))
console.log('subtração'+(num1 - num2))
console.log('multiplicação'+(num1 * num2))
console.log('divisão'+(num1 / num2))

}

calcular(num1, num2);

//atividade 3

let n = 10;

while (n > 1){
   console.log(n--) 
}
console.log(n);

//atividade 4

const Original = prompt('digite uma palavra')

function inverterTexto(palavra) {  
    return palavra.split('').reverse().join('');  
}  


const Invertida = inverterTexto(Original);  

console.log(Invertida);





//atividade 5

const string = prompt('digite uma palavra')

function contarCaractere (string){

console.log(string.length);

}

contarCaractere(string);







//atividade 6

const fusca = 'Volksvagen, modelo fusca, 1976';

const ferrari = 'Ferrari, modelo laferrari, 1.600.998, ano 2015 '

let escolha = prompt ('escolha entre ferrari e fusca')


if (escolha === 'fusca') {  
    console.log(fusca);  
} else {  
    console.log(ferrari);  
}  






//atividade 7 

const nome = prompt('qual seu nome?')

function mensagemPersonalizada(){
    console.log('olá ' + nome);
}

mensagemPersonalizada();







//atividade 8

const num = parseFloat(prompt('escreva o numero 1'));
const num2 = parseFloat(prompt('escreva o numero 2'));
const num3 = parseFloat(prompt('escreva o numero 3'));

function media(){

    console.log((num + num2 + num3) / 3);


}

media();






//atividade 9

/*for (let i = 1; i <= 20; i++) {  
    if (i % 3 === 0) {  
        console.log(i + ": multiplo de 3");  
    } else {  
        console.log(i + ": Ñ multiplo de 3");  
    }  
} 



//atidade 10

/*const nome = prompt('Escreva uma palavra');  

function verificarPalindromo() {  
    const rev = nome.split('').reverse().join('');  
    if (nome === rev) { 
        console.log('É palíndromo');  
    } else {  
        console.log('Não é palíndromo');  
    }  
}  

verificarPalindromo();






//atividade 11


const numeroo = prompt('digite um numero');

function verificarSinal (){


    if (numeroo > 0) {  
        console.log('Positivo');  
    } else if (numeroo < 0){  
        console.log('numero negativo');  
    }  else{
        console.log('0')
    }

}
verificarSinal()







//atividade 12

const temp = parseFloat(prompt('digite uma temperatura'));

function converterTemperatura (){

    console.log((temp*1.8)+32)

}

converterTemperatura()






//atividade 13




let soma = 0;
let i = 1;

while(i<=100){
    soma += i;
    i++;
}
console.log('a soma é '+ soma);





//atividade 14


let texto = prompt('digite a sua palavra')

function substituirPalavra(text){

    console.log(text.replace (/azul/g, "vermelho"));

}

substituirPalavra(texto);



*/


//atividade 15






