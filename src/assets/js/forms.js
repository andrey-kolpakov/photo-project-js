// Edit profile form

let formEditProfile = document.getElementById('form-edit-profile')

let userName = document.getElementById('user-name')
let inputName = document.getElementById('input-name')

let userDescription = document.getElementById('user-description')
let inputDescription = document.getElementById('input-description')

let addNewPhotoPopup = document.querySelector('.popup-group')

function formSubmitHandler(evt) {
    evt.preventDefault();

    userName.textContent = inputName.value
    userDescription.textContent = inputDescription.value

    addNewPhotoPopup.classList.toggle('popup-group--popup_opened')
    document.querySelector('.popup__inner--edit-profile').classList.toggle('popup__inner--edit-profile--visible')
}
formEditProfile.addEventListener('submit', formSubmitHandler)



// New place form

let generalRow = document.getElementById('generalRow')

/* function cardRender(cardName, cardLink, row) {
    let newCol = document.createElement('div')
    newCol.classList.add('col-xlg-4', 'col-md-12')

    let newCard = document.createElement('div')
    newCard.classList.add('card')

    let newImage = document.createElement('div')
    newImage.classList.add('card__image')
    newImage.style.backgroundImage = `url('${cardLink}')`;

    let newCardTextWrapper = document.createElement('div')
    newCardTextWrapper.classList.add('card__text-wrapper')

    let newText = document.createElement('div')
    newText.classList.add('card__text')
    newText.textContent = cardName

    let cardLikeButton = document.createElement('button')
    cardLikeButton.classList.add('card__like-button')
    cardLikeButton.addEventListener('click', function () {
        cardLikeButton.classList.toggle('card__like-button--active')
    })

    newCard.appendChild(newImage)
    newCard.appendChild(newCardTextWrapper)

    newCardTextWrapper.appendChild(newText)
    newCardTextWrapper.appendChild(cardLikeButton)

    newCol.appendChild(newCard)
    row.prepend(newCol)
} */

function cardRender(card, row) {
    let newCol = document.createElement('div')
    newCol.classList.add('col-xlg-4', 'col-md-12')

    let newCard = document.createElement('div')
    newCard.classList.add('card')

    let newImage = document.createElement('div')
    newImage.classList.add('card__image')
    newImage.style.backgroundImage = `url('${card.link}')`;

    let newCardTextWrapper = document.createElement('div')
    newCardTextWrapper.classList.add('card__text-wrapper')

    let newText = document.createElement('div')
    newText.classList.add('card__text')
    newText.textContent = card.name

    let cardLikeButton = document.createElement('button')
    cardLikeButton.classList.add('card__like-button')
    cardLikeButton.addEventListener('click', function () {
        cardLikeButton.classList.toggle('card__like-button--active')
    })

    newCard.appendChild(newImage)
    newCard.appendChild(newCardTextWrapper)

    newCardTextWrapper.appendChild(newText)
    newCardTextWrapper.appendChild(cardLikeButton)

    newCol.appendChild(newCard)
    row.prepend(newCol)
}

let formAddNewPlace = document.getElementById('form-add-new-place')

let newPlaceNameInput = document.getElementById('input-name-of-new-place')
let newPlaceLinkInput = document.getElementById('input-link-on-new-place')

let NewCard = {
    constructor: function(name, link){
        this.name = name
        this.link = link

        return this
    }
}

function formAddNewPlaceHandler(evt) {
    evt.preventDefault();

    if (newPlaceNameInput.value && newPlaceLinkInput.value) {
        
        let newCard = Object.create(NewCard).constructor(newPlaceNameInput.value, newPlaceLinkInput.value)
        console.log(newCard)

        cardRender(newCard, generalRow)

        addNewPhotoPopup.classList.remove('popup-group--popup_opened')
        document.querySelector('.popup__inner--edit-profile').classList.toggle('popup__inner--add-photo--visible')
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


