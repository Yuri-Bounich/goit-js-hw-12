import axios from 'axios';
const API_KEY = '46054867-15d582c16d4d1b2cce4772636'
const BASE_URL = 'https://pixabay.com/api/'
axios.defaults.baseURL = BASE_URL; 


  export const fetchImages = async query => {
    try {
        const response = await axios.get(
          `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=1`
        );
    
        const data = response.data;
    
        if (data.hits.length === 0) {
          throw new Error('No images found for this query.');
        }
    
        return data.hits;
      } catch (error) {
        console.error(`Error fetching images: ${error.message}`);
        throw error; // Перепіднімаємо помилку, щоб її можна було обробити в іншому місці
      }
    };
