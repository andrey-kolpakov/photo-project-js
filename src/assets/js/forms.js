import { cardRender } from './cards.js'

import { closeAllPopups } from './popup.js'

const { CreateNewCard } = require("./cards")

let validating = {

    onLength: function (inputContainerID, neededLengthStartOfRange, neededLengthEndOfRange) {
        let inputContainer = document.getElementById(inputContainerID)
        let input = inputContainer.getElementsByTagName('input')[0]

        if (input.value.length < neededLengthStartOfRange || input.value.length > neededLengthEndOfRange) {
            makeAnError(true, inputContainerID, `Введите не менее ${neededLengthStartOfRange} символов и не более, чем ${neededLengthEndOfRange} символов!`)
            // console.log(inputContainerID, ' is not validated')

            return false
        } else {
            // console.log(inputContainerID, ' is validated')
            makeAnError(false, inputContainerID)
            return true
        }
    },
    isLink: function (inputContainerID,) {
        let inputContainer = document.getElementById(inputContainerID)
        let input = inputContainer.getElementsByTagName('input')[0]

        let regExpLink = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

        if (!input.value.match(regExpLink)) {
            makeAnError(true, inputContainerID, `Введите ссылку!`)
            // console.log('link is not validated')
            return false
        } else {
            makeAnError(false, inputContainerID)
            // console.log('link is validated')
            return true
        }

    }
}


// Edit profile form

let formEditProfile = document.getElementById('form-edit-profile')

let userName = document.getElementById('user-name')
let inputName = document.getElementById('input-name')

let userDescription = document.getElementById('user-description')
let inputDescription = document.getElementById('input-description')

let buttonUserData = document.getElementById('buttonUserData')

document.addEventListener("DOMContentLoaded", function () {
    inputName.value = userName.textContent
    inputDescription.value = userDescription.textContent
});

function formSubmitHandler(evt) {
    evt.preventDefault();

    let nameIsValidated = validating.onLength('input-description-container', 2, 40)
    let descriptionIsValidated = validating.onLength('input-name-container', 2, 15)

    if (nameIsValidated && descriptionIsValidated) {
        userName.textContent = inputName.value
        userDescription.textContent = inputDescription.value

        makeAnError(false, 'input-name-container')
        makeAnError(false, 'input-description-container')
        closeAllPopups()
    }
}
formEditProfile.addEventListener('submit', formSubmitHandler)

document.addEventListener("DOMContentLoaded", function () {
    inputName.addEventListener('input', function () {
        checkInputs()
    })

    inputDescription.addEventListener('input', function () {
        checkInputs()
    })

    function checkInputs() {
        if (validating.onLength('input-name-container', 2, 15) == false || validating.onLength('input-description-container', 2, 40) == false) {
            buttonUserData.classList.add('button--black-full-width--inactive')
        } else {
            buttonUserData.classList.remove('button--black-full-width--inactive')
        }
    }
});

// New place form

let formAddNewPlace = document.getElementById('form-add-new-place')

let newPlaceNameInput = document.getElementById('input-name-of-new-place')
let newPlaceLinkInput = document.getElementById('input-link-on-new-place')

let buttonAddNewPlace = document.getElementById('buttonAddNewPlace')

function formAddNewPlaceHandler(evt) {
    evt.preventDefault();

    let linkIsValidated = validating.isLink('input-link-on-new-place-container')
    let nameIsValidated = validating.onLength('input-name-of-new-place-container', 2, 15)

    if (linkIsValidated && nameIsValidated) {

        CreateNewCard(newPlaceNameInput.value, newPlaceLinkInput.value)
        cardRender(true)
        makeAnError(false, 'input-name-of-new-place-container')
        makeAnError(false, 'input-link-on-new-place-container')
        closeAllPopups()

        newPlaceNameInput.value = ''
        newPlaceLinkInput.value = ''
    } else {
        buttonAddNewPlace.classList.add('button--black-full-width--inactive')
    }
}

document.addEventListener("DOMContentLoaded", function () {
    newPlaceNameInput.addEventListener('input', function () {
        checkInputs()
    })

    newPlaceLinkInput.addEventListener('input', function () {
        checkInputs()
    })

    function checkInputs() {
        if (validating.isLink('input-link-on-new-place-container') == false || validating.onLength('input-name-of-new-place-container', 2, 15)) {
            buttonAddNewPlace.classList.add('button--black-full-width--inactive')
        } else {
            buttonAddNewPlace.classList.remove('button--black-full-width--inactive')
        }
    }
});

function makeAnError(thereIsAnError, idOfInputContainer, textOfError) {
    let parrent = document.getElementById(idOfInputContainer)

    let errorCaption = parrent.querySelector('.popup__input-error')
    let errorBorder = parrent.querySelector('.popup__input-border')

    if (thereIsAnError === true) {
        errorCaption.classList.add('popup__input-error--error')
        errorBorder.classList.add('popup__input-border--error')
        errorCaption.textContent = textOfError
    } else {
        errorCaption.classList.remove('popup__input-error--error')
        errorBorder.classList.remove('popup__input-border--error')
    }
}

formAddNewPlace.addEventListener('submit', formAddNewPlaceHandler)

