const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

let firstRow = document.getElementById('firstRow')

function loadInitialCards() {
    initialCards.forEach(card => {
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

        newCard.appendChild(newImage)
        newCard.appendChild(newCardTextWrapper)
        
        newCardTextWrapper.appendChild(newText)
        newCardTextWrapper.appendChild(cardLikeButton)

        newCol.appendChild(newCard)
        firstRow.appendChild(newCol)
    })
}

document.addEventListener("DOMContentLoaded", loadInitialCards);