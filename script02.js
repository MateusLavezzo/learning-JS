function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente.');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'homem';
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'bb-homem.jpeg');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'pexels-fabian-rubilar-19.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem-adulto.jpg');
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.jpeg');
            }
        } else if (fsex[1].checked) {
            genero = 'mulher';
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'bb-mulher.jpeg');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-mulher.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulher-adulta.jpg');
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.jpeg');
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
