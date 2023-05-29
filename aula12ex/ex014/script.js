function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=6 && hora < 12){
        // Bom dia!
        img.src = 'manha.png'
        document.body.style.background = '#dcb262'
    } else if (hora >= 12 && hora < 20){
        // Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#fdcca3'
    } else{
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.background = '#0f3e77'
    }
}