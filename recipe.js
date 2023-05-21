try {
    const fetchData = async () => {
        const results = await fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch')
        const data = await results.json()
        console.log(data.results)
        return data.results
    
    }
    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    data.results.map((character) => {

        // creating cards
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.setAttribute('style', 'width:18rem;')
    })

    // add image
    const image = document.createElement('img')
    image.setAttribute('alt', character.name)
    image.setAttribute('src', character.image)
    image.setAttribute('class', 'card-img-top')

    // create card body
    const cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')

    // create card title
    const cardTitle = document.createElement('h4')
    cardTitle.setAttribute('class', 'class-title')
    cardTitle.textContent = character.name
    
    // creat card text
    const cardText = document.createElement('p')
    cardText.setAttribute('class', 'card-text')
    cardText.innerText = character.type

    // append image to card
    card.appendChild(image)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)

    container.appendChild(card)

    document.body.appendChild(container)


    const getUserData = async () => {
        const data = await fetchData()
        console.log(data.map((character) => `Name: ${character.name} | Status: ${character.status} | Species: ${character.species}`))
    }
    getUserData()
    fetchData()
} catch (error) {
    console.log(error)
}