//Поиск группы попапов
let popupGroup = document.getElementById('popupGroup')


//Выключение по клику на бэкдроп
let allPopups = document.querySelectorAll('.popup__inner')
function closeAllPopups() {
    popupGroup.classList.toggle('popup-group--popup-opened')
    allPopups.forEach(popup => {
        popup.classList.remove('popup__inner--active')
    })
}

let popupCloseButton = document.getElementById('popupCloseButton')
popupCloseButton.addEventListener('click', function () {
    closeAllPopups()
})



//Попап смены имени
let popupEditProfileToggleButtons = document.getElementsByName('popupEditProfileToggleButton')
let popupEditProfile = document.getElementById('popupEditProfile')

popupEditProfileToggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        popupGroup.classList.toggle('popup-group--popup-opened')
        popupEditProfile.classList.toggle('popup__inner--active')
    })
})



//Попап загрузки фото
let popupAddPhotoToggleButtons = document.getElementsByName('popupAddPhotoToggleButton')
let popupAddPhoto = document.getElementById('popupAddPhoto')

popupAddPhotoToggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        popupGroup.classList.toggle('popup-group--popup-opened')
        popupAddPhoto.classList.toggle('popup__inner--active')
    })
})

//Закрытие попапа с фото
let closePopupActualPhotoButton = document.getElementsByName('popupActualPhotoToggleButton')
closePopupActualPhotoButton[0].addEventListener('click', function(){
    closeAllPopups()
})

module.exports = {
    closeAllPopups, popupGroup
}