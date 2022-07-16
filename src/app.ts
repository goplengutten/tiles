import { Square } from "./interfaces/square";

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const width = 800;
const height = 600;
canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, width, height);

const squareSize = 50;
const numSquaresX = 20;
const numSquaresY = 20;
const scrollSpeed = 5;
const board = createBoard();
let mouseX: number | null = null;
let mouseY: number | null = null;
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

function createBoard(): Square[] {
  const b: Square[] = [];
  for (let j = 0; j < numSquaresY; j++) {
    for (let i = 0; i < numSquaresX; i++) {
      b.push({ x: i, y: j, value: Math.random() >= 0.7 ? 'red' : 'blue' });
    }  
  }
  return b;
}

function update(): void {
  if (up && offsetY < 0) {
    offsetY += scrollSpeed;
  }
  if (down && Math.abs(offsetY) < numSquaresY*squareSize - height) {
    offsetY -= scrollSpeed
  }
  if (left && offsetX < 0) {
    offsetX += scrollSpeed;
  }
  if (right && Math.abs(offsetX) < numSquaresY*squareSize - width) {
    offsetX -= scrollSpeed
  }
}

function drawBoard(): void {

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
    let x = Math.floor(mouseX/squareSize)*squareSize + offsetX%squareSize;
    x = x < mouseX - squareSize ? x + squareSize : x;
    x = x >= mouseX + squareSize ? x - squareSize : x;
    let y = Math.floor(mouseY/squareSize)*squareSize + offsetY%squareSize;
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






