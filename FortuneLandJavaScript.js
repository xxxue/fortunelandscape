const gallery = document.querySelectorAll('.portfolio img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // 点击缩略图 -> 显示大图
  gallery.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src; // 显示被点击的图片
    });
  });

  // 点击背景 -> 关闭大图
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';

  });

  function showMore() {
    document.getElementById("morePortfolio").classList.remove("hidden");
    document.querySelector(".seeMore").style.display = "none"; 
  }
