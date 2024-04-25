
const imageGalerie = document.getElementById('allImages');

let title = 'Titre';
let imageUrl = '../images/bouteille.png';
let myImage = getImage(title, imageUrl);

imageGalerie.innerHTML = myImage

function getImage(title, imageUrl){
    title = sanitizeHtml(title);
    imageUrl = sanitizeHtml(imageUrl);
    return `<div class="col p-3">
    <div class="image-card text-white">
      <img src="${imageUrl}" class="w-100 rounded" alt=""/>
      <p class="titre-image">${title}</p>
      <div class="action-image-buttons" data-show="admin">
        <button type="button" class="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#editImageModal"> <i class="bi bi-pencil-square"> </i></button>
        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal"data-bs-target="#deleteImageModal"> <i class="bi bi-trash"></i> </button>
      </div>
    </div>
  </div>`;
}