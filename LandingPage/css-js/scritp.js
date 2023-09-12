// carousel 
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

function showImage(index) {
  images[currentIndex].style.display = 'none';
  currentIndex = index;
  images[currentIndex].style.display = 'block';
}

function nextImage() {
  const newIndex = (currentIndex + 1) % images.length;
  showImage(newIndex);
}

setInterval(nextImage, 3000);
showImage(0);

const hamburger = () => {
  var showmenu = document.getElementsByClassName("navList");
  for (let i = 0; i < showmenu.length; i++) {
    if (showmenu[i].style.display === "none" || showmenu[i].style.display === "") {
      showmenu[i].style.display = "inline-block";
    } else {
      showmenu[i].style.display = "none";
    }
  }
}


