
export const renderImages = (images, page) => {
    const gallery = document.querySelector('.gallery');
  
    if (images.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }
  
    const markup = images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }, index) => 
          `
              <li class="gallery-item">
                  <a href="${largeImageURL}" class="gallery-link">
                      <img src="${webformatURL}" alt="${tags}" class="gallery-image" id="image-${page}-${index}"/>
                  </a>
                  <div class="info">
                      <p class="info-item"><span class="info-item-total">Likes</span> ${likes}</p>
                      <p class="info-item"><span class="info-item-total">Views</span> ${views}</p>
                      <p class="info-item"><span class="info-item-total">Comments</span> ${comments}</p>
                      <p class="info-item"><span class="info-item-total">Downloads</span> ${downloads}</p>
                  </div>
              </li>
          `
      )
      .join('');
  
      gallery.insertAdjacentHTML('beforeend', markup);
      // gallery.innerHTML += markup;
    // gallery.innerHTML = markup;
  };
  
  export const showLoader = () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    
  };

  export const showLoaderNext = () => {
    const loaderNext = document.querySelector('.loader-next');
    loaderNext.style.display = 'flex';
  };
  
  export const hideLoader = () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
  };

  export const hideLoaderNext = () => {
    const loaderNext = document.querySelector('.loader-next');
    loaderNext.style.display = 'none';
  };
