function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO!] Verifique os dados e tente novamente.")
    }else{
        //window.alert("Tudo ok")
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        //cria uma tag img na segunda div dentro do html
        var img = document.createElement('img')
        //define um id='foto' dentro tag img criada acima
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 7){
                //criança
                img.setAttribute('src','bebe-menino250.bmp')
            }else if(idade < 18){
                //Jovem
                img.setAttribute('src','jovem-homem250.bmp')
            }else if(idade < 59){
                //Adulto
                img.setAttribute('src','adulto-homem250.bmp')
            }else{
                //idoso
                img.setAttribute('src','idoso-homem250.bmp')
            }
                
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 7){
                //criança
                img.setAttribute('src','bebe-menina250.bmp')

            }else if(idade < 18){
                //Jovem
                img.setAttribute('src','jovem-mulher250.bmp')
            }else if(idade < 59){
                //Adulto
                img.setAttribute('src','adulto-mulher250.bmp')
            }else{
                //idoso
                img.setAttribute('src','idosa-mulher250.bmp')
            }

        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //adiciona a imagem após a frase acima
        res.appendChild(img)

    }

}
