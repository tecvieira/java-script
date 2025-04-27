function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} Horas.`
    if(hora >=0 && hora < 12){
        //Bom dia
        img.src='image/manha250.png'
        document.body.style.background="#77814d"
    }else if(hora >=12 && hora <= 18){
        //boa tarde
        img.src='image/tarde250.png'
        document.body.style.background="#796049"
    }else{
        //Boa noite
        img.src='image/noite250.png'
        document.body.style.background="#8b6696"
    }
}