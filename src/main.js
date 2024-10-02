
// // Описаний у документації
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";

// import { fetchImages } from './js/pixabay-api.js';
// import { renderImages,  showLoader, hideLoader, showLoaderNext} from './js/render-functions.js';

// // Описаний у документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

// const searchForm = document.querySelector('.form');
// const galleryElement = document.querySelector('.gallery');
// const gallery = new SimpleLightbox('.gallery a', { 
//     captionsData: 'alt',
//     captionDelay: 250, });

// const fetchNextImages = document.querySelector(".loader-next");

// // const fetchPostsBtn = document.querySelector(".btn");
// // // const postList = document.querySelector(".posts");
    
// let page = 1;
// // let perPage = 10;




// searchForm.addEventListener('submit', event => {
//     //Запобігає перезавантаженню сторінки
//     event.preventDefault();
  
//     // Отримуємо значення з поля запиту
//     const query = event.target.elements.query.value.trim();
//     // Перевіряємо, чи не є запит пустим
//     if (!query) {
//       return; // Якщо пустий, виходимо з обробника
//     }
  
//     //Очищає попередні результати в галереї
//     galleryElement.innerHTML = '';

//     //Показує лоадер і викликає функцію fetchImages(query) для отримання зображень з API
//     showLoader();
//     //Відображає отримані зображення за допомогою renderImages() або показує помилку через iziToast
//     fetchImages(query)
//       .then(images => {
//         renderImages(images);
//         gallery.refresh();
//       })
//       .catch(error => {
//         console.error(error);
//         iziToast.error({
//           title: 'Error',
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//         });
//       })
//       //Ховає лоадер після виконання
//       .finally(() => {
//         hideLoader();
//       });
//       showLoaderNext(); 
//       // Очищуємо поля форми
//       searchForm.reset(); 
//     });
    
    
//     fetchNextImages.addEventListener('click', async () => {
//       try {
//         const posts = await fetchImages();
//         renderPosts(posts);
//         // Increase the group number
//         page += 1;
//       } 
//       catch (error) {
//         console.log(error);
//       }
//     });


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

  galleryElement.innerHTML = ''; // Очищуємо попередні результати тільки при новому запиті
  page = 1; // Скидаємо сторінку при новому запиті

  showLoader();
  
  fetchImages(query, page)
    .then(images => {
      renderImages(images);
      gallery.refresh();
      page += 1; // Збільшуємо сторінку після завантаження
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
  
  searchForm.reset();
});

fetchNextImagesBtn.addEventListener('click', async () => {
  try {
    const images = await fetchImages(query, page);
    renderImages(images);
    gallery.refresh();
    page += 1; 
     
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
