
var inicio = window.document.querySelector('input#txti')
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')

var n1 = Number(inicio.value)
function contar(){
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    } else{
        res.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido!')
        }
        if (i < f){
            //contagem crescente
            for(let c = i; c <=f; c += p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
            //contagem regressiva
        } else {
            for(let c = 1; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
    res.innerHTML += `\u{1f3c1}`
    }
}