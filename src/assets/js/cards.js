const { addEventListenerForButtons } = require("./popup.js")

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
    },
    {
        name: 'Vertical',
        link: 'https://picsum.photos/100/900'
    },
];



//Рендер карточек. Если приходит true, рендерится только последняя новая в дополнение к имеющимся
function cardRender(newCard = false) {
    let row = document.getElementById('generalRow')
    let popupActualPhoto = document.getElementById('popupActualPhoto')

    if (newCard) {
        renderOneCard(initialCards[initialCards.length - 1])
    } else {
        initialCards.forEach(card => {
            renderOneCard(card)
        })
    }

    function renderOneCard(card) {
        //Создание карточки
        let newCol = document.createElement('div')
        newCol.classList.add('col-md-4', 'col-sm-12')

        let newCard = document.createElement('div')
        newCard.classList.add('card')

        let newImage = document.createElement('div')
        newImage.classList.add('card__image')
        newImage.style.backgroundImage = `url('${card.link}')`;
        newImage.addEventListener('click', function () {
            actualImage.src = card.link
            actualImage.setAttribute('width', actualImage.naturalWidth)
            actualImage.setAttribute('height', actualImage.naturalHeight)

            //Растяжение контейнера пропорционально по размерам картинки с ограничением относительно размера экрана
            let ratioOfImage = actualImage.naturalWidth / actualImage.naturalHeight
            let ratioOfScreen = screen.width / screen.height
            //Проверка разрешения экране проводиться при загрузке страницы. Сначала меняем разрешение, потом перезагружаем страницу, чтобы проверить.

            console.clear()
            console.log('Width of screen = ', screen.width)
            console.log('Height of screen = ', screen.height)
            console.log('Ratio of screen', screen.width / screen.height)
            console.log(' ')
            console.log('Width of image = ', actualImage.naturalWidth)
            console.log('Height of image = ', actualImage.naturalHeight)
            console.log('Ratio of image', actualImage.naturalWidth / actualImage.naturalHeight)
            console.log(' ')

            //Проверка экрана на соотношение сторон. Если соотношение больше одного - это десктоп (горизонтальный экран), если соотношение меньше одного - это мобилка (вертикальный экран)
            switch (true) {

                case (ratioOfScreen === 1): {
                    //Square screen
                    if (ratioOfImage > 1) {
                        //Horizontal Image
                        let safetyZone = 0.8

                        popupActualPhoto.style.maxHeight = (screen.height * safetyZone) / ratioOfImage + 'px'
                        popupActualPhoto.style.maxWidth = (screen.height * safetyZone) + 'px'
                    } 
                    
                    if (ratioOfImage < 1) {
                        //Vertical Image
                        let safetyZone = 0.8

                        popupActualPhoto.style.maxHeight = (screen.height * safetyZone)  + 'px'
                        popupActualPhoto.style.maxWidth = (screen.height * safetyZone) * ratioOfImage + 'px'
                    }
                }; break;

                case (ratioOfScreen < 1): {
                    //Mobile
                    if (ratioOfImage > 1) {
                        //Horizontal image
                        let safetyZone = 0.9

                        popupActualPhoto.style.maxHeight = (screen.width * safetyZone) / ratioOfImage  + 'px'
                        popupActualPhoto.style.maxWidth = (screen.width * safetyZone) + 'px'
                    }
                    
                    if(ratioOfImage < 1){
                        //Vertical image
                        let safetyZone = 0.8

                        popupActualPhoto.style.maxHeight = (screen.height * safetyZone) * ratioOfImage + 'px'
                        popupActualPhoto.style.maxWidth = (screen.width * safetyZone) + 'px'
                    }
                }; break;

                case (ratioOfScreen > 1): {
                    //Desktop
                    if (ratioOfImage > 1) {
                        //Horizontal image
                        let safetyZone = 0.5

                        popupActualPhoto.style.maxHeight = (screen.width * safetyZone) / ratioOfImage  + 'px'
                        popupActualPhoto.style.maxWidth = (screen.width * safetyZone) + 'px'
                    }
                    
                    if(ratioOfImage < 1){
                        //Vertical image
                        let safetyZone = 0.7

                        popupActualPhoto.style.maxHeight = (screen.height * safetyZone) + 'px'
                        popupActualPhoto.style.maxWidth = (screen.height * safetyZone) * ratioOfImage + 'px'
                    }
                }; break;
                
            }
        })

        let newCardTextWrapper = document.createElement('div')
        newCardTextWrapper.classList.add('card__text-wrapper')

        let deleteButton = document.createElement('div')
        deleteButton.classList.add('card__delete')
        deleteButton.addEventListener('click', function () {
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


        //Сбор карточки
        newCard.appendChild(deleteButton)
        newCard.appendChild(newImage)
        newCard.appendChild(newCardTextWrapper)
        newCardTextWrapper.appendChild(newText)
        newCardTextWrapper.appendChild(cardLikeButton)


        //Присоединение карточки к строке
        newCol.appendChild(newCard)
        newCol.id = card.name
        row.prepend(newCol)


        //Слушатель на кнопку картинки
        addEventListenerForButtons(newImage, popupActualPhoto);
    }
}


document.addEventListener("DOMContentLoaded", cardRender());


//Добавление карточки в массив. Нужно, чтобы добавить карточку из формы доблавления карточек на сайте
let NewCardTemplate = {
    constructor: function (name, link) {
        this.name = name
        this.link = link

        return this
    }
}

function CreateNewCard(newPlaceNameInput, newPlaceLinkInput) {
    let newCard = Object.create(NewCardTemplate).constructor(newPlaceNameInput, newPlaceLinkInput)
    initialCards.push(newCard)
}


//Экспорт
module.exports = { cardRender, initialCards, NewCardTemplate, CreateNewCard }