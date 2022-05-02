//Поиск контейнера всех попапов
let popupGroup = document.getElementById('popupGroup')


//Выключение по клику на бэкдроп
function closeAllPopups() {
    let allPopups = document.querySelectorAll('.popup__inner')
    popupGroup.classList.toggle('popup-group--popup-opened')
    allPopups.forEach(popup => {
        popup.classList.remove('popup__inner--active')
    })
}

let popupCloseButton = document.getElementById('closeAllPopupButton')
popupCloseButton.addEventListener('click', function () {
    closeAllPopups()
})


// Функция, которая вешает события на кнопки открытия/закрытия попапов
function addEventListenerForButtons(buttons, popup) {
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            popupGroup.classList.toggle('popup-group--popup-opened')
            popup.classList.toggle('popup__inner--active')
        })
    })
}


//Попап смены имени
let popupEditProfileToggleButtons = document.getElementsByName('popupEditProfileToggleButton')
let popupEditProfile = document.getElementById('popupEditProfile')
addEventListenerForButtons(popupEditProfileToggleButtons, popupEditProfile)


//Попап загрузки фото
let popupAddPhotoToggleButtons = document.getElementsByName('popupAddPhotoToggleButton')
let popupAddPhoto = document.getElementById('popupAddPhoto')
addEventListenerForButtons(popupAddPhotoToggleButtons, popupAddPhoto)


//Закрытие попапа с фото
let closePopupActualPhotoButton = document.getElementsByName('popupActualPhotoToggleButton')
let popupActualPhoto = document.getElementById('popupActualPhoto')
addEventListenerForButtons(closePopupActualPhotoButton, popupActualPhoto)


module.exports = {
    closeAllPopups, popupGroup
}