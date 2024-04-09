function handleChangeMenuOrientation() {
  const menuGroupElement = document.querySelector('#menu')

  menuGroupElement.classList.remove('btn-group-vertical')
  menuGroupElement.classList.add('btn-group-horizontal')
  menuGroupElement.setAttribute('aria-label', 'Horizontal button group')
}

function handleChangeHeaderStyle() {
  const headerGroupElement = document.querySelector('#header')

  const headerBtnElement = headerGroupElement.querySelector('.btn')
  const hrElement = headerGroupElement.querySelector('hr')
  const descriptionElement = headerGroupElement.querySelector('.header-text-content')

  headerGroupElement.classList.add('d-flex', 'flex-column', 'align-items-end', 'bg-secondary', 'text-light')
  headerBtnElement.classList.add('bg-success', 'text-white', 'border-0')
  hrElement.classList.add('w-100')
  descriptionElement.classList.add('text-right')
}

function handleSortCards() {
  const cardContainers = document.querySelectorAll('div.card-container')
  const cardTitles = Array.from(cardContainers).map(card => card.querySelector('.card-title').textContent)
  const newOrder = ['Natureza', 'Animais', 'Pessoas', 'Tecnologia']

  cardTitles.sort((a, b) => newOrder.indexOf(a) - newOrder.indexOf(b))

  cardTitles.forEach((title) => {
    const cardContainer = Array.from(cardContainers).find(card => card.querySelector('.card-title').textContent === title)
    document.querySelector('#card-container').appendChild(cardContainer)

    if (title.includes('Animais')) {
      const button = cardContainer.querySelector('a.btn')
      button.classList.add('bg-success', 'border-0')
    }
  })
}

function handleAddElementsToList() {
  const listContainer = document.getElementById('list-container')
  const list = listContainer.querySelector('ul')
  
  const activeItem = list.querySelector('li.active')
  if (activeItem) {
    activeItem.classList.remove('active')
  }

  const fourthItem = createListItem('Quarto item', true)
  const fifthItem = createListItem('Quinto item', false)

  list.appendChild(fourthItem)
  list.appendChild(fifthItem)
}

function createListItem(text, isActive) {
  const listItem = document.createElement('li')
  listItem.className = 'list-group-item'
  listItem.textContent = text

  if (isActive) {
    listItem.classList.add('active')
  }

  return listItem
}

document.addEventListener('DOMContentLoaded', function() {
  handleChangeMenuOrientation()
  handleChangeHeaderStyle()
  handleSortCards()
  handleAddElementsToList()
})