const { makeAnError } = require("./validation")

//Поиск контейнера всех попапов
let popupGroup = document.getElementById('popupGroup')

let inputName = document.getElementById('user-name')
let inputDescription = document.getElementById('user-description')

//Выключение по клику на бэкдроп и на ESC
function closeAllPopups() {
    let allPopups = document.querySelectorAll('.popup__inner')

    popupGroup.classList.remove('popup-group--popup-opened')
    allPopups.forEach(popupContainer => {
        popupContainer.classList.remove('popup__inner--active')

        if (popupContainer.id == 'popupAddPhoto') {
            inputsActionsList.clearAllInputsInContainer(popupContainer)

            let inputs = popupContainer.querySelectorAll('.popup__form-input')
            inputs.forEach(input => {
                makeAnError(false, input)
            })
        }

        if (popupContainer.id == 'popupEditProfile') {
            inputsActionsList.replaceValue('input-name', inputName.textContent)
            inputsActionsList.replaceValue('input-description', inputDescription.textContent)
            inputsActionsList.turnOnTheButtonsInContainer(popupContainer)

            let inputs = popupContainer.querySelectorAll('.popup__form-input')
            inputs.forEach(input => {
                makeAnError(false, input)
            })
        }
    })
}

document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') {
        closeAllPopups()
    }
})

let popupCloseButton = document.getElementById('closeAllPopupButton')
popupCloseButton.addEventListener('click', function () {
    closeAllPopups()
})


// Объект для действий с инпутами

let inputsActionsList = {
    replaceValue: function (inputID, newValue) {
        let input = document.getElementById(inputID)

        input.value = newValue
    },
    clearAllInputsInContainer: function (inputContainer) {
        let inputsList = inputContainer.getElementsByTagName('input')

        for (input of inputsList) {
            input.value = ''
        }
    },
    turnOnTheButtonsInContainer: function (inputContainer) {
        let buttonsList = inputContainer.querySelectorAll('button')

        for (button of buttonsList) {
            button.classList.remove('button--black-full-width--inactive')
        }
    }
}

// Открытие попапа
function addEventListenerForButtons(buttons, popup) {
    if (buttons[0] != undefined) {
        buttons.forEach(buttonForFunction => {
            addEventListenerForButton(buttonForFunction)
        })
    } else {
        addEventListenerForButton(buttons)
    }

    function addEventListenerForButton(buttonForEventListener) {
        buttonForEventListener.addEventListener('click', function () {
            popupGroup.classList.add('popup-group--popup-opened')
            popup.classList.add('popup__inner--active')
        })
    }
}

// Закрытие всех попапов по клику на любую кнопку "закрыть попап"
let closeButtons = document.querySelectorAll('.button--close')
closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        closeAllPopups()
    })
})


//Попап смены имени
let popupEditProfileToggleButton = document.getElementById('popupEditProfileToggleButton')
let popupEditProfile = document.getElementById('popupEditProfile')
addEventListenerForButtons(popupEditProfileToggleButton, popupEditProfile)


//Попап загрузки фото
let popupAddPhotoToggleButton = document.getElementById('popupAddPhotoToggleButton')
let popupAddPhoto = document.getElementById('popupAddPhoto')
addEventListenerForButtons(popupAddPhotoToggleButton, popupAddPhoto)


//Попап открытия фото
/* let popupActualPhotoShow = document.querySelectorAll('.card-image')
let popupActualPhoto = document.getElementById('popupActualPhoto')
addEventListenerForButtons(popupActualPhotoShow, popupActualPhoto) */

module.exports = {
    closeAllPopups, popupGroup, addEventListenerForButtons
}