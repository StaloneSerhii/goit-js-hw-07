import { galleryItems } from './gallery-items.js';
// Change code below this line



const allImg = document.querySelector('.gallery');
const listImg = onGallery(galleryItems);
allImg.insertAdjacentHTML("beforeend", listImg);

function onGallery (galleryItems) {

    return galleryItems.map(({description,original,preview}) => {
return `<a  class="gallery__item" href="${original}">
<img onclick="return false"; class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("")
}

var lightbox = new SimpleLightbox('.gallery a', {}); 

