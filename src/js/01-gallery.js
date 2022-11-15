// import picCardTpl from '../templaytes/pic-card.hbs';
// import galleryItemTpl from '../templaytes/gallery-items.json';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// // import { galleryItems } from './gallery-items.js';

// const galleryContainerEl = document.querySelector('.gallery');
// const galleryMarkup = createGalleryMarkup(galleryItemTpl);

// galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);

// function createGalleryMarkup(galleryItemTpl) {
//   return galleryItemTpl.map(picCardTpl).join('');
// }

// galleryContainerEl.addEventListener('click', openModal);

// function openModal(event) {
//   event.preventDefault();
// }

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 100,
// });

// ===========================

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryContainerEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
     <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
    })
    .join('');
}

galleryContainerEl.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
}

// Инициализация библиотеки
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 100,
});
