# goit-js-hw-12
# Javascript Project

Image Gallery Project 🖼️
Image gallery with search functionality built using Vite and Pixabay API.

Gallery Example

🛠 Technologies & Tools
Build Tool: Vite

HTTP Client: Axios

Async Code: async/await

Code Formatting: Prettier

Design Mockup: Figma

Notifications: iziToast

Lightbox: SimpleLightbox

📌 Key Features
API Implementation
Integrated with Pixabay public API

Implemented pagination (page and per_page parameters)

Selected only necessary properties from response objects

UI/UX
Image search by keywords

Smooth scrolling after loading new images

Loading indicator

"Load more" button (hidden until results are received)

End of collection notification

Lightbox for enlarged view (SimpleLightbox)

Additional Functionality
refresh() method for lightbox updates

Error handling and notifications (iziToast)

💻 Code Samples
javascript
// API request example
async function fetchImages(query, page = 1) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: 'your-api-key',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });
  return response.data;
}
🚀 Installation & Setup
Clone repository:
bash
git clone https://github.com/Yuri-Bounich/goit-js-hw-12.git

Install dependencies:
bash
npm install

Run project:
bash
npm run dev

📩 Contact Information
For questions or suggestions:

📧 Email: b52ybunich@gmail.com

💼 LinkedIn: Yuri Bounich

👨💻 GitHub: Yuri-Bounich
