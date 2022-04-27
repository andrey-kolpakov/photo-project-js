let formEditProfile = document.querySelector('.popup__form-edit-profile')
let inputName = document.getElementById('input-name')
let inputDescription = document.getElementById('input-description')

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    console.log(inputName.value)
    console.log(inputDescription.value)
}
formEditProfile.addEventListener('submit', formSubmitHandler)


