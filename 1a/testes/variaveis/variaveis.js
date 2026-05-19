let global = 'Sou global'

function funcao1(){
    let local = 'Sou local da funcao1'
    console.log(global);
    console.log(local);
}

function funcao2(){
    console.log(global);    // da bom
    console.log(local);     // dá ruim (Uncaught ReferenceError: local is not defined)
}

funcao1()
funcao2()