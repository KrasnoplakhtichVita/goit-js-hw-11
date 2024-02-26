import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import icon from './img/icon.svg';

import { createMarkup } from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

const form = document.querySelector('.form');
const list = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const FETCH_KEY = '42531953-f4fd7fd73c35883c60e461dd3';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(evt) {
  evt.preventDefault();

  loader.classList.remove('hidden');
  list.innerHTML = '';
  const input = evt.target.input.value;

  fetchImages(FETCH_KEY, input)
    .then(data => {
      loader.classList.add('hidden');

      if (!data.hits.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          backgroundColor: '#ef4040',
          position: 'topRight',
          iconUrl: icon,
        });
      }

      list.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      lightbox.refresh();
      form.reset();
    })
    .catch(error => console.log(error));
}
