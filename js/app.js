console.log('campo minato')


const playButtonEl = document.querySelector('.play-button');
const gridElement = document.querySelector('.grid');
const difficoltàSelectEl = document.querySelector('select[name="difficoltà"]')


playButtonEl.addEventListener('click', creaGriglia);

function creaGriglia() {
    // reset game 
    resetGame()

    //generare la griglia
    console.log('creo la griglia');
    const difficoltàSelezionata = difficoltàSelectEl.value
    console.log(difficoltàSelezionata)

    let dimensione = calcolaCelleGriglia(difficoltàSelezionata)
    const cellePerRiga = dimensione**2
    console.log(numeroCelle, dimensione)

    // creare 100 celle della griglia
    for(let i = 0; i < numeroCelle; i++) {
        const cella = creaCella()

        gridElement.append(cella)
    }
}


function creaCella() {
    // creare l'elemento del dom 
    const el = document.createElement('div')
    // aggiungerer la classe cella
    el.classList.add('cella')
    // ritornare l'elemento del dom
    return el
}

function resetGame() {
    // svuotare la griglia
    gridElement.innerHTML = ''
}

function calcolaCelleGriglia(difficoltà) {

    let dimensione = 10

    if(difficoltà === 'Difficile') {
        dimensione = 9
    } else if (difficoltà === 'Impossibile') {
        dimensione = 7
    }
    return dimensione
}