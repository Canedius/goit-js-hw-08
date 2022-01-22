import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallaryEl = document.querySelector('.gallery');
const create = galleryItems.map(
  ({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`,
);
gallaryEl.insertAdjacentHTML('afterbegin', create.join(''));
var lightbox = new SimpleLightbox('.gallery a', {});
console.log(galleryItems);
