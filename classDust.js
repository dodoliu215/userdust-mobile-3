class Dust{
  constructor(cx, cy, dotnum, size, roughnessMax, tight, color){
    this.cx = cx;
    this.cy = cy;
    this.dots = [];
    this.roughs = [];
    this.roughmax = roughnessMax;
    this.s = size;
    this.radius = 0;
    this.num = dotnum;
    this.s = size;
    this.slice = 0;
    this.angle = 0;
    this.t = tight;
    this.color = color;
    this.ani = 0.0;

    for(let i = 0; i < this.num; i++){
      this.dots.push(new DustVector(x, y));
      this.roughs.push(random(0.1, this.roughmax * 0.1));
    }
  }
  draw(){
    this.ani += 0.002;
    
    for(let i = 0; i < this.num; i++){
      this.slice = degToRad(360 / this.num);
      this.angle = this.slice * i;
      this.radius = this.s * this.roughs[i];
    
      let breath = map(noise(this.ani), 0, 1, 0.5, 1);
      
      // console.log(n);
      this.dots[i].pos.x = this.cx + this.radius * sin(this.angle) * breath;
      this.dots[i].pos.y = this.cy + this.radius * cos(this.angle) * breath;
      this.dots[i].draw();
    }
    push();
    radialGradient(
      width/2, height/2, 0,
      width/2, width/2, 180,
      color(colors[this.color].r + 30, colors[this.color].g + 150, colors[this.color].b),
      color(colors[this.color].r, colors[this.color].g, colors[this.color].b)
    );
    //畫線
    strokeWeight(8);
    noFill();
    curveTightness(this.t);
    beginShape();
    curveVertex(this.dots[0].pos.x, this.dots[0].pos.y);
    for(let i = 0; i < this.num; i++){
      curveVertex(this.dots[i].pos.x , this.dots[i].pos.y);
    }
    curveVertex(this.dots[0].pos.x, this.dots[0].pos.y);
    curveVertex(this.dots[0].pos.x, this.dots[0].pos.y);
    endShape();
    pop();
  }
}


class Dust_light{
  constructor(cx, cy, dotnum, size, roughnessMax, tight, color, face){
    this.cx = cx;
    this.cy = cy;
    this.dots = [];
    this.roughs = [];
    this.roughmax = roughnessMax;
    this.s = size;
    this.radius = 0;
    this.num = map(dotnum, 1, 400, 10, 30);
    this.s = size - 10;
    this.slice = 0;
    this.angle = 0;
    this.t = int(random(-15, 10));
    this.color = color;
    this.face = face;

    for(let i = 0; i < this.num; i++){
      this.dots.push(new DustVector(x, y));
      this.roughs.push(random(0.1, this.roughmax * 0.1));
    }
  }
  draw(){
    for(let i = 0; i < this.num; i++){
      this.slice = degToRad(360 / this.num);
      this.angle = this.slice * i;
      this.radius = this.s * this.roughs[i];
      
      this.dots[i].pos.x = this.cx + this.radius * sin(this.angle);
      this.dots[i].pos.y = this.cy + this.radius * cos(this.angle);
      this.dots[i].draw();
    }
    // pop();
    push();
    //畫線
    strokeWeight(2);
    noFill();
    // stroke('white');
    stroke(colors[this.color].r, colors[this.color].g - 120, colors[this.color].b),
    curveTightness(this.t);
    beginShape();
    curveVertex(this.dots[0].pos.x, this.dots[0].pos.y);
    for(let i = 0; i < this.num; i++){
      curveVertex(this.dots[i].pos.x, this.dots[i].pos.y);
    }
    curveVertex(this.dots[0].pos.x, this.dots[0].pos.y);
    curveVertex(this.dots[0].pos.x, this.dots[0].pos.y);
    endShape();
    pop();
    
    push();
    fill(0);
    textFont(SetoFont);
    textAlign(CENTER, CENTER);
    textSize(40);
    strokeWeight(10);
    text(this.face, this.cx, this.cy);
    pop();
  }
}

function mixTheFace(){
  let DustFace = otherSelect1.value() + faceSelect1.value() + eyeSelect1.value() + mouthSelect.value() + eyeSelect2.value() + faceSelect2.value() + otherSelect2.value()
  // console.log(DustFace);
  faceInput.value(DustFace);
}