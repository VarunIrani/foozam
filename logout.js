/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable no-undef */
function logout() {
  let googleLoggedIn = parseInt(sessionStorage.getItem('googleLoggedIn'));
  let userLoggedIn = parseInt(sessionStorage.getItem('userLoggedIn'));
  if (googleLoggedIn) {
    googleLoggedIn = 0;
    sessionStorage.setItem('googleLoggedIn', googleLoggedIn);
  } else if (userLoggedIn) {
    userLoggedIn = 0;
    sessionStorage.setItem('userLoggedIn', userLoggedIn);
  }
  location.reload();
}
const $logoutButton = $('#logoutButton');
const $logoutLink = $('#logoutLink');
$logoutButton.click(() => {
  logout();
});

$logoutLink.click(() => {
  logout();
});
