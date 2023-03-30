const hamburger = document.querySelector('.hamburger');
const showNav = document.querySelector('.links');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  showNav.classList.remove('d-none');
  showNav.classList.add('show-nav');
  showNav.classList.remove('hide-nav');
  console.log('click');
});
closeBtn.addEventListener('click', () => {
  showNav.classList.remove('show-nav');
  showNav.classList.toggle('hide-nav');
  showNav.classList.add('d-none');
});
