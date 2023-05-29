function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 14){
                img.setAttribute('src','homemcrianca.png')
                //crianca
            } else if (idade < 30){
                img.setAttribute('src','homemjovem.png')
                //jovem
            } else if (idade < 50){
                img.setAttribute('src','homemcoroa.png')
                //coroa
            } else{
                img.setAttribute('src','homemvelho.png')
                //velho
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 14){
                img.setAttribute('src','mulhercrianca.png')
                //crianca
            } else if (idade < 30){
                img.setAttribute('src','mulherjovem.png')
                //jovem
            } else if (idade < 50){
                img.setAttribute('src','mulhercoroa.png')
                //coroa
            } else{
                img.setAttribute('src','mulhervelha.png')
                //velho
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}