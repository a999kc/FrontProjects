// console.log("working!'")

const cols = document.querySelectorAll(".col")

// console.log(cols)

// function generateRandomColor() {
//     const hexCodes ='0123456789ABCDEF'
//     let color =""
//     for (let i=0;i<6;i++){
//         color+=hexCodes[Math.floor( Math.random() * hexCodes.length)]
//     }
//     return '#'+color;
// }


document.addEventListener('click',event => {
    const type = event.target.dataset.type
    
    if(type==="lock") {
        const node = event.target.tagName.toLowerCase() === "i" ? event.target : event.target.children[0]
        //console.log(node)
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    }

    
})

document.addEventListener('keydown', event => {
    event.preventDefault()
    if (event.code.toLowerCase()==="space") {
        setRandomColors()
    }
})

function generateRandomColor() {
    const hexCodes ='0123456789ABCDEF'
    let color = []
    for (let i=0;i<6;i++){
        color.push(hexCodes[Math.floor( Math.random() * hexCodes.length)])
    }
    return '#'+color.join('');
}

function setRandomColors() {
    cols.forEach(col=> {
        // console.log(col)

        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        if (isLocked) return 

        const h2 = col.querySelector('h2')
        const button = col.querySelector('button')
        const color = generateRandomColor()
        
       

        

        h2.textContent=color
        col.style.backgroundColor=color

        setH2Color(h2,color)
        setH2Color(button,color)
    })
}

function setH2Color(h2,color){
    const luminance = chroma(color).luminance() 
    h2.style.color = luminance>0.5 ? 'black' : 'white'
}

setRandomColors()
generateRandomColor()