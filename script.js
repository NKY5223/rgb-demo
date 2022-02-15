let RADIUS = 250;

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
document.addEventListener("blur", _ => dragging = null);
document.addEventListener("mousemove", e => {
    if (dragging) {
        dragging.style.left = e.clientX - dragX + "px";
        dragging.style.top = e.clientY - dragY + "px";
    }
});