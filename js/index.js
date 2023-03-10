const body = document.querySelector('body');
const nav = document.querySelector('nav');



window.addEventListener('scroll', (e) => {
    if (body.scrollTop == 0){
        nav.className = "home";
    }
    else{
        nav.className = "normal";
    }
    
})


//careers section
const view_member_button = document.querySelector('#view-member-button');
const hiddenDiv = document.querySelector('#members');
view_member_button.onclick = () => {
    if (view_member_button.textContent == 'VIEW ALL MEMBERS'){
        view_member_button.textContent = 'HIDE MEMBERS';
        hiddenDiv.className = "show";
    }
    else{
        view_member_button.textContent = 'VIEW ALL MEMBERS';
        hiddenDiv.className = "hide";
    }
}


//carousel 
const carousel = document.getElementById('carouselExampleControls')
const items = carousel.querySelectorAll('.carousel-item');
const indicators = carousel.querySelectorAll('.carousel-indicators li');
let currentItem = 0;
let isActive = true;

function setCurrentItem(index) {
  currentItem = (index + items.length) % items.length;
}

function hideItem(direction) {
  isActive = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active', direction);
  });
  indicators[currentItem].classList.remove('active');

}

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isActive = true;
  });
  indicators[currentItem].classList.add('active');
}

document.getElementById('carouselPrev').addEventListener('click', function(e) {
  e.preventDefault()
  if (isActive) {
    hideItem('to-right');
    setCurrentItem(currentItem - 1);
    showItem('from-left');
  }
});

document.getElementById('carouselNext').addEventListener('click', function(e) {
  e.preventDefault()
  if (isActive) {
    hideItem('to-left');
    setCurrentItem(currentItem + 1);
    showItem('from-right');
  }
});