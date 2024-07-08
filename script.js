

let gridSize = ''
let canvasCreated = false
const container = document.querySelector("#container")

function generateGridSize(value) {
    let size = (800 / value).toString()
    //console.log("size", size);
    return size
}

function createDiv() {
    if (!canvasCreated) {

        canvasCreated = true
        let noOfGridsInARow = document.getElementById("input").value
        if (noOfGridsInARow) {
            console.log("value assigned");
            if (noOfGridsInARow > 100) {
                noOfGridsInARow = 100
                alert("maximum no:of grids in a row=100")
            }
        }
        else {
            noOfGridsInARow = 16
        }
        //console.log("no.of grids=",noOfGridsInARow);

        gridSize = generateGridSize(noOfGridsInARow)
        //console.log(gridSize);

        container.style.cssText = `
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items:center;
        justify-contents:center;
        width: 800px;
        height: 800px;
        margin: 0 auto;
        background-color:#e6f4f7;`


        // creating grids

        for (let i = 0; i < (noOfGridsInARow ** 2); i++) {
            const div = document.createElement("div");
            div.classList.add("grid")
            div.style.cssText = `background-color:transparent;
             width:${gridSize}px;
             height:${gridSize}px;`
            container.appendChild(div);
        }
    }
    else {
        alert("please press the reset button before creating a new canvas")
    }
}

function reset() {

    let grids = document.querySelectorAll(".grid")
    grids.forEach((grid) => { container.removeChild(grid) })
    document.getElementById("input").value = 0
    canvasCreated = false

}

createDiv()

container.addEventListener('mouseover', (event) => {
    if (canvasCreated) {
        event.target.style.background = "#ed671f";

    }
})
