function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE);
  
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  
  // drawingContext.strokeStyle = gradient;
  drawingContext.strokeStyle = gradient;
}

function linearGradient(sX, sY, eX, eY, colorS, colorM, colorE){
  let gradient = drawingContext.createLinearGradient(sX, sY, eX, eY, colorS, colorM, colorE);
  
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(0.5, colorM);
  gradient.addColorStop(1, colorE);
  
  // drawingContext.strokeStyle = gradient;
  drawingContext.fillStyle = gradient;
}



//pickColor
let colorbtn;
let dust_color;

let colorNum;

//colors --> 主色票
let colors = [
  {
    r : 130,
    g : 214,
    b : 252

  },
  {
    r : 92,
    g : 70,
    b : 235
  },
  {
    r : 177,
    g : 147,
    b : 251
  },
  {
    r : 158,
    g : 47,
    b : 251
  },
  {
    r : 76,
    g : 62,
    b : 163
  },
  {
    r : 55,
    g : 42,
    b : 141
  },
  {
    r : 240,
    g : 244,
    b : 166
  },
  {
    r : 255,
    g : 219,
    b : 50
  },
  {
    r : 251,
    g : 166,
    b : 43
  },
  {
    r : 255,
    g : 113,
    b : 66
  },
  {
    r : 192,
    g : 125,
    b : 85
  },
  {
    r : 152,
    g : 113,
    b : 58
  },
  {
    r : 165,
    g : 85,
    b : 26
  },
  {
    r : 105,
    g : 181,
    b : 104
  },
  {
    r : 34,
    g : 188,
    b : 157
  },
  {
    r : 23,
    g : 128,
    b : 106
  },
  {
    r : 0,
    g : 136,
    b : 68
  },
  {
    r : 91,
    g : 92,
    b : 20
  },
  {
    r : 33,
    g : 93,
    b : 109
  },
  {
    r : 46,
    g : 92,
    b : 18
  },
  {
    r : 255,
    g : 141,
    b : 220
  },
  {
    r : 231,
    g : 49,
    b : 219
  },
  {
    r : 188,
    g : 34,
    b : 139
  },
  {
    r : 188,
    g : 34,
    b : 62
  }
]