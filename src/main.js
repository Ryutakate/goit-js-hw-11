import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, lightbox } from './js/render-functions.js';

export const elements = {
    form: document.querySelector('.search-form'),
    input: document.querySelector('#image-input'),
    gallery: document.querySelector('.gallery')
};

elements.form.addEventListener('submit', event => {
    event.preventDefault();
    const searchQuery = elements.input.value.trim();

    if (!searchQuery) {
        return;
    }

    elements.gallery.innerHTML = '<span class="loader"></span>';
    elements.form.reset();

    fetchImages(searchQuery)
        .then(({ data }) => {
            elements.gallery.innerHTML = '';

            if (!data.hits.length) {
                iziToast.info({
                    title: '',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: '#fafafb',
                    backgroundColor: '#ef4040',
                    messageSize: '16px',
                    position: 'topRight',
                    maxWidth: '432px',
                });
            } else {
                elements.gallery.innerHTML = renderGallery(data.hits);
                lightbox.refresh();
            }
        })
        .catch(() => {
            elements.gallery.innerHTML = '';
            iziToast.error({
                title: 'Error',
                message: 'Something went wrong. Please try again later.',
                position: 'topRight',
            });
        });
});
