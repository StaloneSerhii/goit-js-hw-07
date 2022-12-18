import { galleryItems } from './gallery-items.js';


// Change code below this line



const divGallery = document.querySelector('.gallery');
const allImg = createImg(galleryItems);
divGallery.insertAdjacentHTML('beforeend', allImg)


function createImg (galleryItems) {

return galleryItems.map(({preview, description, original}) => {
return `<div class="gallery__item">
<a target="_blank" class="gallery__link" href="${original}">
  <img onclick="return false"; 
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`

} ).join("");
}

divGallery.addEventListener('click', onClickImg);

function onClickImg (evn) {

  if(evn.target.nodeName !== "IMG") {
    return
  }
    const instance = basicLightbox.create(`
    <img src="${evn.target.dataset.source}" width="800" height="600">
`)
instance.show()



document.addEventListener("keydown", event => {
    
    if (event.key === "Escape") {
      return instance.close()
        console.log("keydown", event)  
    }
   
  });
}



