// script.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('lightbox');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const photos = document.querySelectorAll('.photo img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;

    photos.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            currentIndex = index;
            showModal(photo);
        });
    });

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    }

    prevBtn.onclick = function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : photos.length - 1;
        showModal(photos[currentIndex]);
    }

    nextBtn.onclick = function () {
        currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1 : 0;
        showModal(photos[currentIndex]);
    }

    function showModal(photo) {
        modal.style.display = 'block';
        modalImg.src = photo.src;
        captionText.innerHTML = photo.alt;
    }
});
