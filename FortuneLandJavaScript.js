const frontDoor = document.querySelectorAll('.frontDoorImages img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  frontDoor.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src; 
    });
  });


  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });


  
  
