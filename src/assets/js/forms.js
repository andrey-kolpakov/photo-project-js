import { cardRender } from './cards.js'

import { closeAllPopups } from './popup.js'

const { CreateNewCard } = require("./cards")



// Edit profile form

let formEditProfile = document.getElementById('form-edit-profile')

let userName = document.getElementById('user-name')
let inputName = document.getElementById('input-name')

let userDescription = document.getElementById('user-description')
let inputDescription = document.getElementById('input-description')

document.addEventListener("DOMContentLoaded", function(){
    inputName.value = userName.textContent
    inputDescription.value = userDescription.textContent
});

function formSubmitHandler(evt) {
    evt.preventDefault();

    userName.textContent = inputName.value
    userDescription.textContent = inputDescription.value

    closeAllPopups()
}
formEditProfile.addEventListener('submit', formSubmitHandler)



// New place form

let formAddNewPlace = document.getElementById('form-add-new-place')

let newPlaceNameInput = document.getElementById('input-name-of-new-place')
let newPlaceLinkInput = document.getElementById('input-link-on-new-place')

function formAddNewPlaceHandler(evt) {
    evt.preventDefault();

    if (newPlaceNameInput.value && newPlaceLinkInput.value) {

        CreateNewCard(newPlaceNameInput.value, newPlaceLinkInput.value)
        cardRender(true)
        closeAllPopups()

        newPlaceNameInput.value = '' 
        newPlaceLinkInput.value = ''
    } else {
        if(!newPlaceNameInput.value){
            validateIsLose('input-name-of-new-place-container')
        }
        if(!newPlaceLinkInput.value){
            validateIsLose('input-link-on-new-place-container')
        }
    }
}

function validateIsLose(id){
    let parrent = document.getElementById(id)

    let errorCaption = parrent.querySelector('.popup__input-error')
    let errorBorder = parrent.querySelector('.popup__input-border')

    errorCaption.classList.add('popup__input-error--error')
    errorBorder.classList.add('popup__input-border--error')
}

formAddNewPlace.addEventListener('submit', formAddNewPlaceHandler)