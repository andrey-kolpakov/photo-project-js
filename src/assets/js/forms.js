let formEditProfile = document.querySelector('.popup__form-edit-profile')

let userName = document.getElementById('user-name')
let inputName = document.getElementById('input-name')

let userDescription = document.getElementById('user-description')
let inputDescription = document.getElementById('input-description')

let addNewPhotoPopup = document.querySelector('.popup-group')

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    userName.textContent = inputName.value
    userDescription.textContent = inputDescription.value

    console.log(addNewPhotoPopup)

    addNewPhotoPopup.classList.remove('popup-group--popup_opened') 
}
formEditProfile.addEventListener('submit', formSubmitHandler)


