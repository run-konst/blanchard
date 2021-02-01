const thumbnails = document.querySelectorAll('.gal-slider__link');
const modal = document.querySelector('.gallery-modal');
const fullImage = modal.querySelector('.gallery-modal__img');
const closeButton = modal.querySelector('.gallery-modal__btn');


let openModal = function(thumbnail, i) {
    thumbnail.addEventListener('click', function(evt) {
        evt.preventDefault();
        modal.classList.remove('hidden');
        fullImage.src = 'img/gallery/gal-full-' + i + '.jpg';            
    }); 
}

for (let i = 0; i < thumbnails.length; i++) {
    openModal(thumbnails[i], i + 1);    
}

closeButton.addEventListener('click', function() {
    modal.classList.add('hidden');
});