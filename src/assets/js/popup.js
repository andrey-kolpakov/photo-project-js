import { addNewPhotoPopup } from './forms'

let popupGroup = document.querySelector('.popup-group')
let toggleEditProfile = document.getElementsByName('toggle-popup-edit-profile')
let addPhoto = document.getElementsByName('toggle-popup-add-photo')

let userName = document.getElementById('user-name')
let inputName = document.getElementById('input-name')

let userDescription = document.getElementById('user-description')
let inputDescription = document.getElementById('input-description')

function toggleNewPopupInner(name) {
    let newPopup = document.querySelector(name)
    newPopup.classList.toggle(name.slice(1) + '--visible')
}

console.log('addNewPhotoPopup', addNewPhotoPopup);

toggleEditProfile.forEach(element => {
    element.addEventListener('click', function () {
        popupGroup.classList.toggle('popup-group--popup_opened')
        toggleNewPopupInner('.popup__inner--edit-profile')

        inputName.value = userName.textContent

        inputDescription.value = userDescription.textContent
    })
})

addPhoto.forEach(element => {
    element.addEventListener('click', function () {
        popupGroup.classList.toggle('popup-group--popup_opened')
        toggleNewPopupInner('.popup__inner--add-photo')
    })
}) 