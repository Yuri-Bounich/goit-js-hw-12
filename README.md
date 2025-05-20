# Javascript Project

## Image Gallery Project 🖼️

**Image gallery with search functionality built using Vite and Pixabay API.**

![image](https://github.com/user-attachments/assets/1a1427a7-e440-4955-833d-1671a8f2d840)


## 🛠 Technologies & Tools
 - Build Tool: Vite

 - HTTP Client: Axios

 - Async Code: async/await

 - Code Formatting: Prettier

 - Design Mockup: Figma

 - Notifications: iziToast

 - Lightbox: SimpleLightbox

## 📌 Key Features
### API Implementation
 - Integrated with Pixabay public API

 - Implemented pagination (page and per_page parameters)

 - Selected only necessary properties from response objects

### UI/UX
 - Image search by keywords

 - Smooth scrolling after loading new images

 - Loading indicator

 - "Load more" button (hidden until results are received)

 - End of collection notification

 - Lightbox for enlarged view (SimpleLightbox)

### Additional Functionality
 - refresh() method for lightbox updates

 - Error handling and notifications (iziToast)

## 💻 Code Samples

*javascript*

      // API request example

      `async function fetchImages(query, page = 1) {`

`const response = await axios.get('https://pixabay.com/api/', {`

`params: {`

`  key: 'your-api-key',`

`  q: query,`

`  image_type: 'photo',`

`  orientation: 'horizontal',`

`  safesearch: true,`

`  page,`

`  per_page: 15,` 

`}, 
});  
return response.data;  
}`

# 🚀 Installation & Setup
**1. Clone repository:**
 
git clone https://github.com/Yuri-Bounich/goit-js-hw-12.git

**2. Install dependencies:**

npm install

**3. Run project:**

npm run dev


## 📩 Contact Information

*For questions or suggestions:*

**📧 Email:** b52ybunich@gmail.com

**💼 LinkedIn:** Yuri Bounich

**👨💻 GitHub:** Yuri-Bounich
