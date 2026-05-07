function converterMetroEmPe(m){
    return m * 3.281
}
function converterPeEmMetro(p){
    return p / 3.281
}

function converterDecimalParaBinario(d){
    return d.toString(2)
}
function converterBinarioParaDecimal(b){
    return parseInt(b, 2)
}

module.exports = {
    converterMetroEmPe,
    converterPeEmMetro,
    converterDecimalParaBinario,
    converterBinarioParaDecimal
};