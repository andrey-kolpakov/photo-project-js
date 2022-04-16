console.log('file 1');

function toggleNewPopupContainer(name){
    let newPopup = document.querySelector(name)
    newPopup.classList.toggle(name.slice(1)+'--visible')
}

let popup = document.querySelector('.popup')
let toggleEditProfile = document.getElementsByName('toggle-popup-edit-profile')
let addPhoto = document.getElementsByName('toggle-popup-add-photo')




toggleEditProfile.forEach(element => {
    element.addEventListener('click', function(){
        popup.classList.toggle('popup--popup_opened')
        toggleNewPopupContainer('.popup__container--edit-profile')
    })
})

addPhoto.forEach(element => {
    element.addEventListener('click', function(){
        popup.classList.toggle('popup--popup_opened')
        toggleNewPopupContainer('.popup__container--add-photo')
    })
}) 

//asdasdasd