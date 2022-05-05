const { cardRender } = require("./cards.js")

const { closeAllPopups } = require("./popup.js")

const { CreateNewCard } = require("./cards")

const { validating } = require("./validation.js")

const { makeAnError } = require("./validation.js")

const { checkInputsAndBlockButton } = require("./validation.js")



// Edit profile form

let formEditProfile = document.getElementById('form-edit-profile')

let userName = document.getElementById('user-name')
let inputName = document.getElementById('input-name')

let userDescription = document.getElementById('user-description')
let inputDescription = document.getElementById('input-description')

let inputNameContainer = document.getElementById('input-name-container')
let inputDescriptionContainer = document.getElementById('input-description-container')

let buttonUserData = document.getElementById('buttonUserData')

document.addEventListener("DOMContentLoaded", function () {
    inputName.value = userName.textContent
    inputDescription.value = userDescription.textContent
});

function formNewNameSubmitHandler(evt) {
    evt.preventDefault();

    let nameIsValidated = validating.onLength(inputNameContainer, 2, 14)
    let descriptionIsValidated = validating.onLength(inputDescriptionContainer, 2, 40)

    if (nameIsValidated && descriptionIsValidated) {
        userName.textContent = inputName.value
        userDescription.textContent = inputDescription.value

        makeAnError(false, inputNameContainer)
        makeAnError(false, inputDescriptionContainer)
        closeAllPopups()
    }
}

formEditProfile.addEventListener('submit', formNewNameSubmitHandler)

document.addEventListener("DOMContentLoaded", function () {
    let inputsOfNewNameForm = [inputName, inputDescription]

    inputsOfNewNameForm.forEach(input => {
        input.addEventListener('input', function () {
            checkInputsAndBlockButton(buttonUserData,
                { inputContainer: inputNameContainer, settings: { typeOfValidation: 'onLength', startOfRange: 2, endOfRange: 15 } },
                { inputContainer: inputDescriptionContainer, settings: { typeOfValidation: 'onLength', startOfRange: 2, endOfRange: 40 } },

            )
        })
    })

    checkInputsAndBlockButton(buttonUserData,
        { inputContainer: inputDescriptionContainer, settings: { typeOfValidation: 'onLength', startOfRange: 2, endOfRange: 40 } },
        { inputContainer: inputNameContainer, settings: { typeOfValidation: 'onLength', startOfRange: 2, endOfRange: 15 } }
    )
});



// New place form

let formAddNewPlace = document.getElementById('form-add-new-place')

let newPlaceNameInput = document.getElementById('input-name-of-new-place')
let newPlaceLinkInput = document.getElementById('input-link-on-new-place')

let inputNewPlaceNameContainer = document.getElementById('input-name-of-new-place-container')
let inputNewPlaceLinkContainer = document.getElementById('input-link-on-new-place-container')

let buttonAddNewPlace = document.getElementById('buttonAddNewPlace')

function formAddNewPlaceHandler(evt) {
    evt.preventDefault();

    let linkIsValidated = validating.isLink(inputNewPlaceLinkContainer)
    let nameIsValidated = validating.onLength(inputNewPlaceNameContainer, 2, 15)

    if (linkIsValidated && nameIsValidated) {

        CreateNewCard(newPlaceNameInput.value, newPlaceLinkInput.value)
        cardRender(true)
        clearThisInput(inputNewPlaceNameContainer, inputNewPlaceLinkContainer)
        buttonAddNewPlace.classList.add('button--black-full-width--inactive')
        closeAllPopups()

    } else {
        buttonAddNewPlace.classList.add('button--black-full-width--inactive')
    }
}

formAddNewPlace.addEventListener('submit', formAddNewPlaceHandler)

document.addEventListener("DOMContentLoaded", function () {
    let inputsOfNewPlaceForm = [newPlaceNameInput, newPlaceLinkInput]

    inputsOfNewPlaceForm.forEach(input => {
        input.addEventListener('input', function () {
            checkInputsAndBlockButton(buttonAddNewPlace,
                { inputContainer: inputNewPlaceNameContainer, settings: { typeOfValidation: 'onLength', startOfRange: 2, endOfRange: 15 } },
                { inputContainer: inputNewPlaceLinkContainer, settings: { typeOfValidation: 'isLink' } },
            )
        })
    })
});


// Очистка инпутов
function clearThisInput(...inputContainerList) {
    for (let inputContainer of inputContainerList) {
        let input = inputContainer.getElementsByTagName('input')[0]
        input.value = ''
    }
}


module.exports = {
    inputName, inputDescription
}
