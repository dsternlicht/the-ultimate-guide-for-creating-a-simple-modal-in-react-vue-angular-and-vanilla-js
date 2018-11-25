var btn = document.getElementById('popup_opener');
var popup = document.querySelector('.popup');

function attachPopupListeners(popupElm) {
  popupElm.querySelector('.close_popup').addEventListener('click', togglePopup);
  popupElm.querySelector('.overlay').addEventListener('click', togglePopup);
}

function detachPopupListeners(popupElm) {
  popupElm.querySelector('.close_popup').removeEventListener('click', togglePopup);
  popupElm.querySelector('.overlay').removeEventListener('click', togglePopup);
}

function togglePopup() {
  var currentState = popup.style.display;

  // If popup is visible, hide it. Else, display it.
  if (currentState === 'none') {
    popup.style.display = 'block';
    attachPopupListeners(popup);
  } else {
    popup.style.display = 'none';
    detachPopupListeners(popup);  
  }
}

btn.addEventListener('click', togglePopup);