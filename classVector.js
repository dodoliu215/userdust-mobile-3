class Vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

class DustVector{
  constructor(x, y){
    this.pos = new Vector(x, y);
    this.ani = 0.0;
    this.a = random(-1, 1);
    this.b = random(-1, 1);
  }
  draw(){
    this.ani = this.ani + 0.01;
    let dotX = map(noise(this.ani), 0, 1, -5, 5);
    let dotY = map(noise(this.ani), 0, 1, -5, 5);
    
    this.pos.x = this.pos.x + dotX * this.a;
    this.pos.y = this.pos.y + dotY * this.b;
  }
}