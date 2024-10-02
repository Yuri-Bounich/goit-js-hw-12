// import axios from 'axios';
// const API_KEY = '46054867-15d582c16d4d1b2cce4772636'
// const BASE_URL = 'https://pixabay.com/api/'

// async function fetchImages(params = {}) {
//   const options = new URLSearchParams(params);
//   const url = {};

//   const data = await axios.get(url,options)
// }






import { hideLoaderNext } from './render-functions';
import axios from 'axios';
const API_KEY = '46054867-15d582c16d4d1b2cce4772636'
const BASE_URL = 'https://pixabay.com/api/'
axios.defaults.baseURL = BASE_URL; 
let page = 1;
let perPage = 15;

  export const fetchImages = async query => {
    try {
        const params = new URLSearchParams({
            per_page: perPage,
            page: page
          });
        
        const response = await axios.get(
          `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&${params}`
        );
    
    const data = response.data;
    const totalPages = Math.ceil(data.totalHits / perPage);

    if (page > totalPages) {
      hideLoaderNext();
      return iziToast.error({
        position: "topRight",
        message: "We're sorry, but you've reached the end of search results."
      });
  }

        if (data.hits.length === 0) {
          throw new Error('No images found for this query.');
        }
    
        return data.hits;
      } catch (error) {
        console.error(`Error fetching images: ${error.message}`);
        throw error; // Перепіднімаємо помилку, щоб її можна було обробити в іншому місці
      }
    };






