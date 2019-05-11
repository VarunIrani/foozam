/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-undef */
function logout() {
  let googleLoggedIn = parseInt(localStorage.getItem('googleLoggedIn'));
  let userLoggedIn = parseInt(localStorage.getItem('userLoggedIn'));
  if (googleLoggedIn) {
    googleLoggedIn = 0;
    localStorage.setItem('googleLoggedIn', googleLoggedIn);
  } else if (userLoggedIn) {
    userLoggedIn = 0;
    localStorage.setItem('userLoggedIn', userLoggedIn);
  }
  location.replace('index.html');
}
const $logoutButton = $('#logoutButton');
const $logoutLink = $('#logoutLink');
$logoutButton.click(() => {
  logout();
});

$logoutLink.click(() => {
  logout();
});
