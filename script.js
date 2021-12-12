/* PokeApi */
const form = document.getElementById('form')
const searchInput = document.getElementById('search')
const card = document.getElementById('cardApi')

form.addEventListener('submit', handleClick)

 function handleClick (event) {
    event.preventDefault()

    const searchValue = searchInput.value.trim()

    getPokemon(searchValue)
}

function getPokemon (searchValue) {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}/`)
    .then((response) => {
         return response.json()
    }).then((body) => {
        console.log(body)
       return card.innerHTML = `
                            <div class="contentApi">
                                <div class="imgBox">
                                    <img src="${body.sprites.front_default}" alt="" width="350px" height="150px">
                                </div>

                                <div class="textApi">

                                    <h3>${body.name}</h3>

                                    <div class="status">
                                        <p>
                                            Type<br>
                                         ${body.types[0].type.name}
                                         
                                        </p>
                                        <p>
                                            Id<br>
                                            ${body.id}
                                        </p>
                                        <p>
                                            BaseExp<Br>
                                            ${body.base_experience}xp
                                        </p>
                                    </div>
                                </div>
                            </div>`
    })

}




/* Mobile Menu */

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
