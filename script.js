let musicas = [
    {titulo:'Clarão', artista:'Jão', src:'musicas/Clarão.mp3', img:'image-content/JAO-CAPA.jpg'},
    {titulo:'Não Te Amo', artista:'Jão', src:'musicas/Não Te Amo.mp3', img:'image-content/JAO-CAPA.jpg'},
    {titulo:'Idiota', artista:'Jão', src:'musicas/Idiota.mp3', img:'image-content/JAO-CAPA.jpg'},
    {titulo:'Santo', artista:'Jão', src:'musicas/Santo.mp3', img:'image-content/JAO-CAPA.jpg'},
    {titulo:'Acontece', artista:'Jão', src:'musicas/Acontece.mp3', img:'image-content/JAO-CAPA.jpg'},
    {titulo:'Você Me Perdeu', artista:'Jão', src:'musicas/Você Me Perdeu.mp3', img:'image-content/JAO-CAPA.jpg'},
    {titulo:'Meninos e Meninas', artista:'Jão', src:'musicas/Meninos e Meninas.mp3', img:'image-content/JAO-CAPA.jpg'},
    {titulo:'Coringa', artista:'Jão', src:'musicas/Coringa.mp3', img:'image-content/JAO-CAPA.jpg'},
    {titulo:'Doce', artista:'Jão', src:'musicas/Doce.mp3', img:'image-content/JAO-CAPA.jpg'},
    {titulo:'Tempos de Glória', artista:'Jão', src:'musicas/Tempos de Glória.mp3', img:'image-content/JAO-CAPA.jpg'},
    {titulo:'Olhos Vermelhos', artista:'Jão', src:'musicas/Olhos Vermelhos.mp3', img:'image-content/JAO-CAPA.jpg'},
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.foto-capa');
let nomeMusica = document.querySelector('.nome-musica');
let nomeArtista = document.querySelector('.nome-artista');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.play').addEventListener('click', tocarMusica, tocarMusica);

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.pause').addEventListener('click', pausarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 10;
    }
    renderizarMusica(indexMusica);
    tocarMusica()
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 10){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    tocarMusica()
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}
function tocarMusica2(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
    
}

function pausarMusica2(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}
function tocarMusica(){
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
    tocarMusica2()
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block';
    pausarMusica2()
}


function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
let menu = document.querySelector('.menu-conta') 

function verificarBotão(){
    if(menu.style.display === "none"){
        menu.style.display = "flex"
    }else{
        menu.style.display = "none"
    }    
}

function clarão(index){
    musica.setAttribute('src', musicas[0].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[0].titulo;
        nomeArtista.textContent = musicas[0].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    tocarMusica()
}
function naoTeAmo(index){
    musica.setAttribute('src', musicas[1].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[1].titulo;
        nomeArtista.textContent = musicas[1].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    tocarMusica()
}
function idiota(index){
    musica.setAttribute('src', musicas[2].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[2].titulo;
        nomeArtista.textContent = musicas[2].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    tocarMusica()
}
function santo(index){
    musica.setAttribute('src', musicas[3].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[3].titulo;
        nomeArtista.textContent = musicas[3].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    tocarMusica()
}
function acontece(index){
    musica.setAttribute('src', musicas[4].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[4].titulo;
        nomeArtista.textContent = musicas[4].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    tocarMusica()
}
function voceMePerdeu(index){
    musica.setAttribute('src', musicas[5].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[5].titulo;
        nomeArtista.textContent = musicas[5].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    tocarMusica()
}
function meninosEMeninas(index){
    musica.setAttribute('src', musicas[6].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[6].titulo;
        nomeArtista.textContent = musicas[6].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    tocarMusica()
}
function coringa(index){
    musica.setAttribute('src', musicas[7].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[7].titulo;
        nomeArtista.textContent = musicas[7].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    tocarMusica()
}
function doce(index){
    musica.setAttribute('src', musicas[8].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[8].titulo;
        nomeArtista.textContent = musicas[8].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    tocarMusica()
}
function temposDeGloria(index){
    musica.setAttribute('src', musicas[9].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[9].titulo;
        nomeArtista.textContent = musicas[9].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    tocarMusica()
}
function olhosVermelhos(index){
    musica.setAttribute('src', musicas[10].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[10].titulo;
        nomeArtista.textContent = musicas[10].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    tocarMusica()
}
