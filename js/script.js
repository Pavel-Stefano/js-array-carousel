// Consegna:
// Dati tre array contenenti:
//  - una lista ordinata di 5 immagini,
//  - una lista ordinata dei relativi 5 luoghi e
//  - una lista di 5 news,
// creare un carosello come nella foto allegata.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: 
// costruiamo il container e inseriamo l'immagine 
// grande a sinistra e le thumbnails sulla destra 
// in modo da poter stilare lo slider; avremo 
// così la struttura base e gli stili pronti per 
// poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico 
// e inseriamo le immagini dinamicamente servendoci 
// dell'array fornito e un semplice ciclo for che 
// concatena un template literal. Al termine di 
// questa fase ci ritroveremo con lo stesso slider,
//  ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sulle frecce verso l'alto 
// o verso il basso, l'immagine attiva diventa 
// visibile in formato grande a sinistra e nel 
// suo angolo in basso a destra dovranno essere
//  aggiunti i relativi:
//  - titolo e
//  - testo.
// Allo stesso tempo nelle miniature l'immagine
//  attiva dovrà apparire in evidenza rispetto 
// alle altre.
// BONUS:
// Aggiungere il ciclo infinito del carosello. 
// Ovvero se la miniatura attiva è la prima e 
// l'utente clicca la freccia verso l'alto, la
//  miniatura che deve attivarsi sarà l'ultima 
// e viceversa per l'ultima miniatura se l'utente
//  clicca la freccia verso il basso.

// metodo costruendo array 
// const immaginiArray = [
//     "img/01.jpg",
//     "img/02.jpg",
//     "img/03.jpg",
//     "img/04.jpg",
//     "img/05.jpg" 
// ];
// console.log(immaginiArray)

// let itemsContent = '';

// const itemContainer = document.querySelector('items-container');
// itemContainer.innerHTML = itemsContent

// let currentindex = 0;

// const next = document.querySelector('avanti');
// next.addEventListener('click', function(){
//     for (let i = 0; i < immaginiArray.length; i++) {
//         itemsContent +=  ` 
//         <div class="items">
//             <img src="${immaginiArray[i]}">
//     </div>`
//     }

// })

// definisco le variabili importanti
let currentindex = 0;
const listaImmagini = document.getElementsByClassName('items');
const listaMiniImmagini = document.getElementsByClassName('mini-items');
const circle = document.getElementsByClassName('circle');

// collegamento hai bottoni scorrimento immagini
const next = document.querySelector('.avanti');

next.addEventListener('click' , function(){
    listaImmagini[currentindex].classList.remove('active');
    listaMiniImmagini[currentindex].classList.remove('active');
    circle[currentindex].classList.remove('active');
    currentindex += 1 ;
    if(currentindex > 4) {
        currentindex = 0
    }
    listaImmagini[currentindex].classList.add('active');
    listaMiniImmagini[currentindex].classList.add('active');
    circle[currentindex].classList.add('active');

});

const prev = document.querySelector('.indietro');
console.log(prev)
prev.addEventListener('click' , function(){
    listaImmagini[currentindex].classList.remove('active');
    listaMiniImmagini[currentindex].classList.remove('active');
    circle[currentindex].classList.remove('active');
    currentindex -= 1;
    if(currentindex < 0) {
        currentindex = 4
    }
    listaImmagini[currentindex].classList.add('active');
    listaMiniImmagini[currentindex].classList.add('active');
    circle[currentindex].classList.add('active');
});

    
