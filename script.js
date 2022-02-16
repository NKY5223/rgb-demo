let RADIUS = 125;
const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");

const a = [r, g, b];
let dragging = null;
let dragX = 0;
let dragY = 0;

a.forEach(el => el.addEventListener("mousedown", e => {
    dragging = el;
    dragX = e.offsetX;
    dragY = e.offsetY;
}));
document.addEventListener("mouseup", _ => dragging = null);
window.addEventListener("blur", _ => dragging = null);
document.addEventListener("mousemove", e => {
    if (dragging) {
        dragging.style.left = e.clientX - dragX + RADIUS + "px";
        dragging.style.top = e.clientY - dragY + RADIUS + "px";
    }
});

{
    let w = document.documentElement.clientWidth / 2;
    let h = document.documentElement.clientHeight / 2;
    let x = RADIUS / 2;
    let y = RADIUS * Math.sqrt(3) / 3;
    let y2 = y / 2;

    r.style.left = w + "px";
    r.style.top = h - y + "px";

    g.style.left = w - x + "px";
    g.style.top = h + y2 + "px";

    b.style.left = w + x + "px";
    b.style.top = h + y2 + "px";
}


/** @type {HTMLInputElement} */
const radiusInput = document.getElementById("radius");
radiusInput.addEventListener("input", e => {
    RADIUS = Number(radiusInput.value);
    document.documentElement.style.setProperty("--radius", radiusInput.value + "px");
});
radiusInput.addEventListener("wheel", e => {
    if (e.deltaY > 0) radiusInput.value = Number(radiusInput.value) - 5;
    else radiusInput.value = Number(radiusInput.value) + 5;

    RADIUS = Number(radiusInput.value);
    document.documentElement.style.setProperty("--radius", radiusInput.value + "px");
});

/** @type {HTMLInputElement} */
const rBrInput = document.getElementById("rBr");
rBrInput.addEventListener("input", e => {
    document.documentElement.style.setProperty("--rBr", rBrInput.value);
});
/** @type {HTMLInputElement} */
const gBrInput = document.getElementById("gBr");
gBrInput.addEventListener("input", e => {
    document.documentElement.style.setProperty("--gBr", gBrInput.value);
});
/** @type {HTMLInputElement} */
const bBrInput = document.getElementById("bBr");
bBrInput.addEventListener("input", e => {
    document.documentElement.style.setProperty("--bBr", bBrInput.value);
});