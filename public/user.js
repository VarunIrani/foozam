/* eslint-disable no-undef */
/* eslint-disable func-names */
export default function previewImg() {
  const preview = document.getElementById('userProfilePhoto'); // selects the query named img
  const file = document.querySelector('input[type=file]').files[0]; // sames as here
  const reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file); // reads the data as a URL
  } else {
    preview.src = './assets/img/anime3.jpg';
  }
}
