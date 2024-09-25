import axios from 'axios';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from './js/pixabay-api.js';
import { renderImages,  showLoader, hideLoader } from './js/render-functions.js';

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.form');
const galleryElement = document.querySelector('.gallery');
const gallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250, });

searchForm.addEventListener('submit', event => {
    //Запобігає перезавантаженню сторінки
    event.preventDefault();
  
    // Отримуємо значення з поля запиту
    const query = event.target.elements.query.value.trim();
    // Перевіряємо, чи не є запит пустим
    if (!query) {
      return; // Якщо пустий, виходимо з обробника
    }
  
    //Очищає попередні результати в галереї
    galleryElement.innerHTML = '';

    //Показує лоадер і викликає функцію fetchImages(query) для отримання зображень з API
    showLoader();
    //Відображає отримані зображення за допомогою renderImages() або показує помилку через iziToast
    fetchImages(query)
      .then(images => {
        renderImages(images);
        gallery.refresh();
      })
      .catch(error => {
        console.error(error);
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      })
      //Ховає лоадер після виконання
      .finally(() => {
        hideLoader();
      });
  
      // Очищуємо поля форми
      searchForm.reset(); 
    });

