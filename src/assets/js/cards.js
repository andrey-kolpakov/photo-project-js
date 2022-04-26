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

let generalRow = document.getElementById('generalRow')
console.log(generalRow)

function cardRender(card, row, prepend = false) {
    let newCol = document.createElement('div')
    newCol.classList.add('col-xlg-4', 'col-md-12')

    let newCard = document.createElement('div')
    newCard.classList.add('card')

    let newImage = document.createElement('div')
    newImage.classList.add('card__image')
    newImage.style.backgroundImage = `url('${card.link}')`;

    let newCardTextWrapper = document.createElement('div')
    newCardTextWrapper.classList.add('card__text-wrapper')

    let deleteButton = document.createElement('div')
    deleteButton.classList.add('card__delete')
    deleteButton.addEventListener('click', function(){
        let thisCard = document.getElementById(card.name)
        thisCard.remove()
    })

    let newText = document.createElement('div')
    newText.classList.add('card__text')
    newText.textContent = card.name

    let cardLikeButton = document.createElement('button')
    cardLikeButton.classList.add('card__like-button')
    cardLikeButton.addEventListener('click', function () {
        cardLikeButton.classList.toggle('card__like-button--active')
    })

    newCard.appendChild(newImage)
    newCard.appendChild(deleteButton)
    newCard.appendChild(newCardTextWrapper)
    

    newCardTextWrapper.appendChild(newText)
    newCardTextWrapper.appendChild(cardLikeButton)

    newCol.appendChild(newCard)
    newCol.id = card.name

    if (prepend) {
        row.prepend(newCol)
    } else {
        row.appendChild(newCol)
    }
}

document.addEventListener("DOMContentLoaded", initialCards.forEach(card => {
    cardRender(card, generalRow)
}
)
);

//Что-то странное с выводом row в консоль из функции cardRender