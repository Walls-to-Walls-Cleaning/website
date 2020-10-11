// If banner cookie is not set, show the popup
if (!document.body.classList.contains('cms-editor-active') && Cookies.get('notice-cookie')) {
  document.querySelector('.cookie-notice').classList.add('d-none');
}

// Once accepted, add cookie and close the banner
document.querySelector('.cookie-notice .button').addEventListener('click', function(){
  // Set cookie
  Cookies.set('notice-cookie', 'true');
  // Hide top banner
  document.querySelector('.cookie-notice').className += ' d-none';
});
