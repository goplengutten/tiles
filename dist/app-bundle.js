/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const canvas = document.getElementById('canvas');
const width = 800;
const height = 600;
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, width, height);
const squareSize = 50;
const numSquaresX = 20;
const numSquaresY = 20;
const scrollSpeed = 5;
const board = createBoard();
let mouseX = null;
let mouseY = null;
let offsetX = 0;
let offsetY = 0;
let left = false;
let right = false;
let up = false;
let down = false;
run();
function run() {
    update();
    drawBoard();
    setTimeout(() => {
        run();
    }, 20);
}
function createBoard() {
    const b = [];
    for (let j = 0; j < numSquaresY; j++) {
        for (let i = 0; i < numSquaresX; i++) {
            b.push({ x: i, y: j, value: Math.random() >= 0.7 ? 'red' : 'blue' });
        }
    }
    return b;
}
function update() {
    if (up && offsetY < 0) {
        offsetY += scrollSpeed;
    }
    if (down && Math.abs(offsetY) < numSquaresY * squareSize - height) {
        offsetY -= scrollSpeed;
    }
    if (left && offsetX < 0) {
        offsetX += scrollSpeed;
    }
    if (right && Math.abs(offsetX) < numSquaresY * squareSize - width) {
        offsetX -= scrollSpeed;
    }
}
function drawBoard() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
    ctx.lineWidth = 1;
    for (const s of board) {
        const x = s.x * squareSize + offsetX;
        const y = s.y * squareSize + offsetY;
        ctx.fillStyle = s.value;
        ctx.fillRect(x, y, squareSize, squareSize);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(x, y, squareSize, squareSize);
    }
    if (mouseX != null && mouseY != null) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'yellow';
        let x = Math.floor(mouseX / squareSize) * squareSize + offsetX % squareSize;
        x = x < mouseX - squareSize ? x + squareSize : x;
        x = x >= mouseX + squareSize ? x - squareSize : x;
        let y = Math.floor(mouseY / squareSize) * squareSize + offsetY % squareSize;
        y = y < mouseY - squareSize ? y + squareSize : y;
        y = y >= mouseY + squareSize ? y - squareSize : y;
        ctx.strokeRect(x, y, squareSize, squareSize);
    }
}
canvas.addEventListener("mousemove", e => {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
});
canvas.addEventListener("mouseleave", () => {
    mouseX = null;
    mouseY = null;
});
document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") {
        left = true;
    }
    if (e.key === "ArrowRight") {
        right = true;
    }
    if (e.key === "ArrowUp") {
        up = true;
    }
    if (e.key === "ArrowDown") {
        down = true;
    }
});
document.addEventListener("keyup", e => {
    if (e.key === "ArrowLeft") {
        left = false;
    }
    if (e.key === "ArrowRight") {
        right = false;
    }
    if (e.key === "ArrowUp") {
        up = false;
    }
    if (e.key === "ArrowDown") {
        down = false;
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQyx3QkFBd0IsaUJBQWlCO0FBQ3pDLHFCQUFxQiwwREFBMEQ7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWxlcy8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG5jb25zdCB3aWR0aCA9IDgwMDtcbmNvbnN0IGhlaWdodCA9IDYwMDtcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG5jdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5jb25zdCBzcXVhcmVTaXplID0gNTA7XG5jb25zdCBudW1TcXVhcmVzWCA9IDIwO1xuY29uc3QgbnVtU3F1YXJlc1kgPSAyMDtcbmNvbnN0IHNjcm9sbFNwZWVkID0gNTtcbmNvbnN0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbmxldCBtb3VzZVggPSBudWxsO1xubGV0IG1vdXNlWSA9IG51bGw7XG5sZXQgb2Zmc2V0WCA9IDA7XG5sZXQgb2Zmc2V0WSA9IDA7XG5sZXQgbGVmdCA9IGZhbHNlO1xubGV0IHJpZ2h0ID0gZmFsc2U7XG5sZXQgdXAgPSBmYWxzZTtcbmxldCBkb3duID0gZmFsc2U7XG5ydW4oKTtcbmZ1bmN0aW9uIHJ1bigpIHtcbiAgICB1cGRhdGUoKTtcbiAgICBkcmF3Qm9hcmQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcnVuKCk7XG4gICAgfSwgMjApO1xufVxuZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgYiA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtU3F1YXJlc1k7IGorKykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNxdWFyZXNYOyBpKyspIHtcbiAgICAgICAgICAgIGIucHVzaCh7IHg6IGksIHk6IGosIHZhbHVlOiBNYXRoLnJhbmRvbSgpID49IDAuNyA/ICdyZWQnIDogJ2JsdWUnIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiO1xufVxuZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICh1cCAmJiBvZmZzZXRZIDwgMCkge1xuICAgICAgICBvZmZzZXRZICs9IHNjcm9sbFNwZWVkO1xuICAgIH1cbiAgICBpZiAoZG93biAmJiBNYXRoLmFicyhvZmZzZXRZKSA8IG51bVNxdWFyZXNZICogc3F1YXJlU2l6ZSAtIGhlaWdodCkge1xuICAgICAgICBvZmZzZXRZIC09IHNjcm9sbFNwZWVkO1xuICAgIH1cbiAgICBpZiAobGVmdCAmJiBvZmZzZXRYIDwgMCkge1xuICAgICAgICBvZmZzZXRYICs9IHNjcm9sbFNwZWVkO1xuICAgIH1cbiAgICBpZiAocmlnaHQgJiYgTWF0aC5hYnMob2Zmc2V0WCkgPCBudW1TcXVhcmVzWSAqIHNxdWFyZVNpemUgLSB3aWR0aCkge1xuICAgICAgICBvZmZzZXRYIC09IHNjcm9sbFNwZWVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRyYXdCb2FyZCgpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgZm9yIChjb25zdCBzIG9mIGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IHggPSBzLnggKiBzcXVhcmVTaXplICsgb2Zmc2V0WDtcbiAgICAgICAgY29uc3QgeSA9IHMueSAqIHNxdWFyZVNpemUgKyBvZmZzZXRZO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gcy52YWx1ZTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIHNxdWFyZVNpemUsIHNxdWFyZVNpemUpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCBzcXVhcmVTaXplLCBzcXVhcmVTaXplKTtcbiAgICB9XG4gICAgaWYgKG1vdXNlWCAhPSBudWxsICYmIG1vdXNlWSAhPSBudWxsKSB7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAneWVsbG93JztcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKG1vdXNlWCAvIHNxdWFyZVNpemUpICogc3F1YXJlU2l6ZSArIG9mZnNldFggJSBzcXVhcmVTaXplO1xuICAgICAgICB4ID0geCA8IG1vdXNlWCAtIHNxdWFyZVNpemUgPyB4ICsgc3F1YXJlU2l6ZSA6IHg7XG4gICAgICAgIHggPSB4ID49IG1vdXNlWCArIHNxdWFyZVNpemUgPyB4IC0gc3F1YXJlU2l6ZSA6IHg7XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihtb3VzZVkgLyBzcXVhcmVTaXplKSAqIHNxdWFyZVNpemUgKyBvZmZzZXRZICUgc3F1YXJlU2l6ZTtcbiAgICAgICAgeSA9IHkgPCBtb3VzZVkgLSBzcXVhcmVTaXplID8geSArIHNxdWFyZVNpemUgOiB5O1xuICAgICAgICB5ID0geSA+PSBtb3VzZVkgKyBzcXVhcmVTaXplID8geSAtIHNxdWFyZVNpemUgOiB5O1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCBzcXVhcmVTaXplLCBzcXVhcmVTaXplKTtcbiAgICB9XG59XG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICBtb3VzZVggPSBlLm9mZnNldFg7XG4gICAgbW91c2VZID0gZS5vZmZzZXRZO1xufSk7XG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgIG1vdXNlWCA9IG51bGw7XG4gICAgbW91c2VZID0gbnVsbDtcbn0pO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGxlZnQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIHJpZ2h0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICB1cCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICBkb3duID0gdHJ1ZTtcbiAgICB9XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgbGVmdCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIHJpZ2h0ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgdXAgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGRvd24gPSBmYWxzZTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==