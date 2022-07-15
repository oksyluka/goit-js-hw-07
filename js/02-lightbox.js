import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li>
        <a class='gallery__item' href='${original}'>
          <img
            class='gallery__image'
            src='${preview}'
            alt='${description}'
          />
        </a>
      </li>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
