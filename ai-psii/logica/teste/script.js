// primos

let num = 17
let cont = 0
let inicio = parseInt(num /2)

for(let i=inicio; i>=2; i--){
    if(num%i == 0) cont++
    console.log(i);
    
}

if(cont > 0){
    console.log('Não é primo');
}else{
    console.log('É primo');
}


// primos v2

let num = 17
let cont = 0

for(let i=num-1; i>=2; i--){
    if(num%i == 0) cont++
    console.log(i);
    
}

if(cont > 0){
    console.log('Não é primo');
}else{
    console.log('É primo');
}

// primos v3

let num = 17
let cont = 0

for(let i=2; i<num; i++){
    if(num%i == 0) cont++
    console.log(i);
    
}

if(cont > 0){
    console.log('Não é primo');
}else{
    console.log('É primo');
}