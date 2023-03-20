const selectionButtons = document.querySelector("data-selection")
const SELECTION = [
    {
        name: 'rock',
        img: 'https://emojio.ru/images/apple-b/1f5ff.png',
        beats: 'scissors'
    },
    {
        name: 'papper',
        img: 'https://emojio.ru/images/apple-b/11.0/1f9fb.png',
        beats: 'rock'
    },
    {
        name: 'scissors',
        img: 'https://emojio.ru/images/apple-b/2702-fe0f.png',
        beats: 'papper'
    }
]

selectionButtons.array.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
});

let makeSelection = (selection) =>{
    console.log(selection)
}