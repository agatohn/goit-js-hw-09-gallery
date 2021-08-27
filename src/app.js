const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const imgContainer = document.querySelector('.js-gallery');
const imgGallery = createGalleryItem(galleryItems);
const modal = document.querySelector('.js-lightbox');
const imgModal = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
const overlay = document.querySelector('div.lightbox__overlay');


imgContainer.insertAdjacentHTML('beforeend', imgGallery);

imgContainer.addEventListener('click', onImgContainerClick);


function createGalleryItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
   <li  class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img      
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
    })
    .join('');
}


function onImgContainerClick(e) {
  e.preventDefault();
    if (e.target === e.currentTarget) {
        return;
    }
  imgModal.src = e.target.dataset.source;
  imgModal.alt = e.target.getAttribute('alt');
  modal.classList.add('is-open');
  closeModalBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  window.addEventListener('keydown', handlePressEsc);
  window.addEventListener('keydown', handlePressArrowRight);
  window.addEventListener('keydown', handlePressArrowLeft);
}

function closeModal() {
  imgModal.src = '';
  imgModal.alt = '';
  modal.classList.remove('is-open');
  closeModalBtn.removeEventListener('click', closeModal);
  overlay.removeEventListener('click', closeModal);
  window.removeEventListener('keydown', handlePressEsc);
  window.removeEventListener('keydown', handlePressArrowRight);
  window.removeEventListener('keydown', handlePressArrowLeft);
}

function handlePressEsc(e) {
    if (e.code !== 'Escape') {
        return;
    }
    closeModal();
}

function handlePressArrowRight(e) {
  e.preventDefault();
    if (e.code !== 'ArrowRight') {
        return;
    }
  const currentImg = document.querySelector(`[data-source="${imgModal.src}"]`);
  
  const sibling = currentImg.closest('li').nextElementSibling;
  
  if (sibling === null) {
     return;
  }
  const nextImg = sibling.querySelector('img');
  
  imgModal.src = nextImg.dataset.source;
  imgModal.alt = nextImg.getAttribute('alt');
  
}

function handlePressArrowLeft(e) {
  e.preventDefault();
    if (e.code !== 'ArrowLeft') {
        return;
    }
  const currentImg = document.querySelector(`[data-source="${imgModal.src}"]`);
 
  const sibling = currentImg.closest('li').previousElementSibling;
  
  if (sibling === null) {
     return;
  }
  const nextImg = sibling.querySelector('img');
  
  imgModal.src = nextImg.dataset.source;
  imgModal.alt = nextImg.getAttribute('alt');
  
}