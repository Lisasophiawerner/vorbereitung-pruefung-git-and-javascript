
const circle = document.querySelector("#circ")




function start() {
    window.requestAnimationFrame(update)
}

function update() {
    let cy = parseFolat(circle.getAttribute("cy"))
    cy = cy + 1
    circle.setAttribute("cy", cy)

    window.requestAnimationFrame(update)
}