
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoader, hideLoader, showLoaderNext } from './js/render-functions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector('.form');
const galleryElement = document.querySelector('.gallery');
const gallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250, 
});
const fetchNextImagesBtn = document.querySelector('.btn'); 
let page = 1;
let query = '';

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  
  query = event.target.elements.query.value.trim(); // Зберігаємо запит
  
  if (!query) return;

   // Скидаємо галерею та сторінку при новому запиті
  galleryElement.innerHTML = ''; // Очищуємо попередні результати тільки при новому запиті
  page = 1; // Скидаємо сторінку при новому запиті

  showLoader();
  
  fetchImages(query, page)
    .then(images => {
      page += 1; // Збільшуємо сторінку після завантаження
      renderImages(images);
      gallery.refresh();
    
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    })
    .finally(() => {
      hideLoader();
      showLoaderNext(); 
    });
  
  searchForm.reset(); // Очищення поля вводу після подачі форми
});

fetchNextImagesBtn.addEventListener('click', async () => {
  page += 1; 
  try {
    const images = await fetchImages(query, page);

    if (images.length === 0) {
      return iziToast.error({
          title: 'Error',
          message: 'No more images to load.',
      });
  }
    // Додаємо отримані зображення в галерею
    renderImages(images);
    gallery.refresh();

     
    // Отримати висоту першої картки галереї
    const firstCard = document.querySelector('.gallery-item');
    if (firstCard) {
      const cardHeight = firstCard.getBoundingClientRect().height; // Висота картки
      // Прокрутити сторінку на подвоєну висоту картки
      window.scrollBy({
        top: cardHeight * 2,      // Прокрутка вниз на дві висоти картки
        left: 0,                   // Прокрутка по горизонталі не змінюється
        behavior: 'smooth'         // Плавна прокрутка
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader(); 
  }
});

// galleryElement.innerHTML = ''; // Очищуємо попередні результати
 