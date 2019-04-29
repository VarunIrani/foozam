/* eslint-disable no-undef */

const loader = document.getElementById('loader');

function showBody() {
  $('body').removeClass('fade-out');
}

function hideLoader() {
  loader.style.visibility = 'hidden';
  $('body').addClass('fade-out');
  setTimeout(showBody, 0.1 * 1000);
}

window.addEventListener('load', () => {
  setTimeout(hideLoader, 3 * 1000);
  $('body').removeClass('fade-out');
});
