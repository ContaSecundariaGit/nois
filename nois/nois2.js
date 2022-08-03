const divCards = document.getElementsByClassName('div-cards')[0]

const cards = document.createElement('ul')
cards.classList.add('cards')

function listaItensCard(itens) {
  for (let i = 0; i < itens.length; i++) {
    let coisas = itens[i]

    criarCards(coisas)
  }
}

function criarCards(array) {
  let titulo = array.titulo
  let descricao = array.descricao
  let imagem = array.imagem

  const card = document.createElement('li')
  card.classList.add('card')

  const tituloCard = document.createElement('h2')
  tituloCard.innerHTML = titulo

  const descricaoCard = document.createElement('p')
  descricaoCard.innerText = descricao

  const imagemCard = document.createElement('img')
  imagemCard.setAttribute('src', imagem)

  card.appendChild(tituloCard)
  card.appendChild(descricaoCard)
  card.appendChild(imagemCard)

  cards.appendChild(card)
}
divCards.appendChild(cards)

listaItensCard(cardsLista)
