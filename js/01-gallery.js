import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class='gallery__item'>
        <a class='gallery__link' href='${original}'>
          <img
            class='gallery__image'
            src='${preview}'
            data-source='${original}'
            alt='${description}'
          />
        </a>
      </div>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const onImageClick = e => {
  e.preventDefault();
  if (e.target.classList.contains('gallery__image')) {
    const instance = basicLightbox.create(`
	<img src='${e.target.dataset.source}'>
`);
    instance.show();

    if (basicLightbox.visible()) {
      document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
          instance.close();
        }
        return;
      });
    }
    return;
  }
  return;
};

galleryContainer.addEventListener('click', onImageClick);
