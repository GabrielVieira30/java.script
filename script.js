
console.log('hello world');  


let num = prompt ('digite um numero')
function verificarPar(num) {  
    
    if (num % 2 === 0) {  
        console.log('par');  
    } else {  
        console.log('impar');  
    }  
}  

 
verificarPar();  


let num1 = parseFloat (prompt (' digite o primeiro numero'));
let num2 = parseFloat (prompt (' digite o segundo numero'));

function calcular(num1, num2){

   
   
console.log('soma'+(num1 + num2))
console.log('subtração'+(num1 - num2))
console.log('multiplicação'+(num1 * num2))
console.log('divisão'+(num1 / num2))

}

calcular(num1, num2);


let n = 10;

while (n > 1){
   console.log(n--) 
}
console.log(n);



const Original = prompt('digite uma palavra')

function inverterTexto(palavra) {  
    return palavra.split('').reverse().join('');  
}  


const Invertida = inverterTexto(Original);  

console.log(Invertida);