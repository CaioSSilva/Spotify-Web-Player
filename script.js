let musicas = [
    {titulo:'Clarão', artista:'Jão', src:'musicas/Clarão.mp3', img:'image-content/CAPA-JAO.png'},
    {titulo:'Não Te Amo', artista:'Jão', src:'musicas/Não Te Amo.mp3', img:'image-content/CAPA-JAO.png'},
    {titulo:'Idiota', artista:'Jão', src:'musicas/Idiota.mp3', img:'image-content/CAPA-JAO.png'},
    {titulo:'Santo', artista:'Jão', src:'musicas/Santo.mp3', img:'image-content/CAPA-JAO.png'},
    {titulo:'Acontece', artista:'Jão', src:'musicas/Acontece.mp3', img:'image-content/CAPA-JAO.png'},
    {titulo:'Você Me Perdeu', artista:'Jão', src:'musicas/Você Me Perdeu.mp3', img:'image-content/CAPA-JAO.png'},
    {titulo:'Meninos e Meninas', artista:'Jão', src:'musicas/Meninos e Meninas.mp3', img:'image-content/CAPA-JAO.png'},
    {titulo:'Coringa', artista:'Jão', src:'musicas/Coringa.mp3', img:'image-content/CAPA-JAO.png'},
    {titulo:'Doce', artista:'Jão', src:'musicas/Doce.mp3', img:'image-content/CAPA-JAO.png'},
    {titulo:'Tempos de Glória', artista:'Jão', src:'musicas/Tempos de Glória.mp3', img:'image-content/CAPA-JAO.png'},
    {titulo:'Olhos Vermelhos', artista:'Jão', src:'musicas/Olhos Vermelhos.mp3', img:'image-content/CAPA-JAO.png'},
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('.foto-capa');
let nomeMusica = document.querySelector('.nome-musica');
let nomeArtista = document.querySelector('.nome-artista');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.play').addEventListener('click', tocarMusica);

document.querySelector('.botão-jao').addEventListener('click', tocarMusica);

document.querySelector('.pause').addEventListener('click', pausarMusica);

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

function tocarMusica(){
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block';
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

function trocarMusicaBillie(){
    if(document.querySelector('')){

    }
}