document.head.innerHTML = `<style>html, body { height: 100%; margin: 0; background: #000000; } .c { mix-blend-mode: screen; width: 100px; height: 100px; border-radius: 50%; position: absolute; cursor: pointer; } .r { background: #ff0000; } .g { background: #00ff00; } .b { background: #0000ff; }</style>`;
const [r, g, b] = new Array(3).fill(0).map(_ => document.createElement("div"));
Object.entries({ r, g, b }).forEach(([k,e]) => e.classList.add("c", k));
let dragging = null;
[r, g, b].forEach(e => e.addEventListener("mousedown", _ => { dragging = e }));
document.addEventListener("mouseup", _ => { dragging = null });
document.addEventListener("blur", _ => { dragging = null });
document.addEventListener("mousemove", e => {
    if (dragging) {
        dragging.style.left = e.clientX - 50;
        dragging.style.top = e.clientY - 50;
    }
});
[r, g, b].forEach(e => document.body.append(e));
