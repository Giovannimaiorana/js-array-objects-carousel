// CREO LISTA ARRAY DI IMMAGINI PRESENTI 
const imgArray = [
    {
        image: 'img/1.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/2.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/3.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/4.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/5.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//COLLEGHIAMO JS A HTML 
 const imgListDom = document.querySelector('.list_img');

 //INSERIAMO DINAMICAMENTE LE IMMAGINI IN HTML

 let containerImg = "";

 for ( let i=0; i < imgArray.length; i++ ) {
    const ImgWrapper = ` <div class="wrap_img ">
                               <img class="image" src="${imgArray[i].image}" > 
                               <div class="container_write">
                               <h3>${imgArray[i].title}</h3>
                               <p>${imgArray[i].text}</p>
                           </div>
                           </div>`;

   containerImg += ImgWrapper;      
              
 }
 imgListDom.innerHTML = containerImg;  

 const imgDom = document.getElementsByClassName('wrap_img');
 let positionImg = 0;
 imgDom[positionImg].classList.add('d-block');
 const next = document.getElementById('next');
 const prev = document.getElementById('prev');

 next.addEventListener('click', 
       function() {
        imgDom[positionImg].classList.remove('d-block');
        if (positionImg < imgDom.length - 1){
            positionImg++;
        }else if(positionImg == imgDom.length - 1 ){
            positionImg = 0;
        }
        imgDom[positionImg].classList.add('d-block');
       }
 )

 prev.addEventListener('click', 
       function() {
        imgDom[positionImg].classList.remove('d-block');
        if (positionImg > 0){
        positionImg--;
        } else if (positionImg == 0){
            positionImg = imgDom.length - 1;
        }
        imgDom[positionImg].classList.add('d-block');
       }
 )
