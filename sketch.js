let startScene = true;
let blackScene = false;
let blackScene2 = false;
let didiScene = false;
let grassScene = false;
let grassScene2 = false;
let grassScene3 = false;
let grassScene4 = false;
let popScene = false;
let zeroScene = false;
let endScene = false;

let scene = 1;

let btnSize = 120;
let pointSize = 60;
let didiInput1, didiInput2;
let eyeSelect1, eyeSelect2, mouthSelect, faceSelect1, faceSelect2, otherSelect1, otherSelect2;
let popRadio;
let zeroRadio;
let gifBtn;
let recordCount = 0;
// let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;
// let btn1_h, btn2_h, btn3_h, btn4_h, btn5_h, btn6_h, btn7_h, btn8_h, btn9_h;

let w, h;

function preload(){
  startBG = loadImage('image/p01.png')
  blackBG = loadImage('image/p02.png')
  blackBG2 = loadImage('image/p03.png')
  didiBG = loadImage('image/didiBG.png')
  popBG = loadImage('image/popBG.png')
  grassBG1 = loadImage('image/grassBG-1.png')
  grassBG2 = loadImage('image/grassBG-2.png')
  grassBG3 = loadImage('image/grassBG-3.png')
  grassBG4 = loadImage('image/grassBG-4.png')
  zeroBG = loadImage('image/01.png')
  endBG = loadImage('image/end.png')
  loadImage('image/point.png')
  loadImage('image/startbtn.png')
  logo = loadImage('image/logotype.png')

  SetoFont = loadFont('font/setofont.ttf');
}

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  w = windowWidth;
  h = windowHeight;
  // console.log(w+','+h)
  gifSetUp();
  sliderSetUp();
  NewDust()
  
  startBG.resize( w, 3518*(w/1626) )
  blackBG.resize( w, 3518*(w/1626) )
  blackBG2.resize( w, 3518*(w/1626) )
  didiBG.resize( w, 3518*(w/1626) )
  grassBG1.resize( w, 3518*(w/1626) )
  grassBG2.resize( w, 3518*(w/1626) )
  grassBG3.resize( w, 3518*(w/1626) )
  grassBG4.resize( w, 3518*(w/1626) )
  popBG.resize( w, 3518*(w/1626) )
  zeroBG.resize( w, 3518*(w/1626) )
  endBG.resize( w, 3518*(w/1626) )
  logo.resize(979*0.2, 392*0.2)

  gifBtn = createButton('saveGIF')
  gifBtn.addClass('gifbutton')
  gifBtn.mousePressed(function(){
    recording = true
  });
  gifBtn.hide()

  startBtn = createImg('image/startbtn.png', 'startBtn');
  startBtn.size(btnSize, 814*(btnSize/ 1477));
  startBtn.position(width/2 - 55, height/2-70);
  startBtn.mouseClicked(function(){
    startScene = false;
    blackScene = true;
  })
  startBtn.show();

  pointBtn = createImg('image/point.png', 'pointBtn');
  pointBtn.size(pointSize, 496*(pointSize / 601));
  pointBtn.position(width/2-20, height-100);
  pointBtn.mouseClicked(function(){
    scene++;
    if(scene == 2){
      blackScene = false;
      blackScene2 = true;
    }else if(scene == 3){
      blackScene2 = false;
      didiScene = true;
    }else if(scene == 4){
      didiScene = false;
      grassScene = true;
    }else if(scene == 5){
      grassScene = false;
      grassScene2 = true;
    }else if(scene == 6){
      grassScene2 = false;
      grassScene3 = true;
    }else if(scene == 7){
      grassScene3 = false;
      grassScene4 = true;
    }else if(scene == 8){
      grassScene4 = false;
      popScene = true;
      mixTheFace();
    }else if(scene == 9){
      popScene = false;
      zeroScene = true;
    }else if(scene == 10){
      zeroScene = false;
      endScene = true;
      NewDust()
    }
  })
  pointBtn.hide();

  didiInput1 = createInput('');
  didiInput1.attribute('placeholder', ' 「 跟誰 」    ex.自己?朋友?家人?');
  didiInput1.position(width/2 - 160, height/2 + 100)
  didiInput1.style('font-size', '16px');
  didiInput1.style('height', '35px');
  didiInput1.style('width', '300px');
  didiInput2 = createInput('');
  didiInput2.attribute('placeholder', ' 「 做什麼 」    ex.喝酒?聊天?運動?');
  didiInput2.position(width/2 - 160, height/2 + 160)
  didiInput2.style('font-size', '16px');
  didiInput2.style('height', '35px');
  didiInput2.style('width', '300px');

  didiInput1.hide();
  didiInput2.hide();

  eyeSelect1= createSelect();
  eyeSelect1.position(width/2-100, height/2+90);
  eyeSelect1.option('◉');
  eyeSelect1.option('✷');
  eyeSelect1.option('≧');
  eyeSelect1.option('ᗒ');
  eyeSelect1.option('ʘ');
  eyeSelect1.option('ಠ');
  eyeSelect1.option('@');
  eyeSelect1.option('Φ');
  eyeSelect1.option('￣');
  eyeSelect1.style('font-size', '40px');

  eyeSelect2= createSelect();
  eyeSelect2.position(width/2+30, height/2+90);
  eyeSelect2.option('◉');
  eyeSelect2.option('✷');
  eyeSelect2.option('≦');
  eyeSelect2.option('ᗕ');
  eyeSelect2.option('ʘ');
  eyeSelect2.option('ಠ');
  eyeSelect2.option('@');
  eyeSelect2.option('Φ');
  eyeSelect2.option('￣');
  eyeSelect2.style('font-size', '40px');

  eyeSelect1.hide();
  eyeSelect2.hide();

  mouthSelect= createSelect();
  mouthSelect.position(width/2-20, height/2+90);
  mouthSelect.option('▽');
  mouthSelect.option('(ｴ)');
  mouthSelect.option('θ');
  mouthSelect.option('3');
  mouthSelect.option('ɞ');
  mouthSelect.option('w');
  mouthSelect.style('font-size', '40px');

  mouthSelect.hide();

  faceSelect1= createSelect();
  faceSelect1.position(width/2-100, height/2+90);
  faceSelect1.option('(');
  faceSelect1.option('°(');
  faceSelect1.option('|');
  faceSelect1.option('ɾ');
  faceSelect1.option('ᶘ');
  faceSelect1.option('●');
  faceSelect1.option('{');
  faceSelect1.option('₍₍');
  faceSelect1.style('font-size', '40px');

  faceSelect2= createSelect();
  faceSelect2.position(width/2+30, height/2+90);
  faceSelect2.option(')');
  faceSelect2.option(')°');
  faceSelect2.option('|');
  faceSelect2.option('ɹ');
  faceSelect2.option('ᶅ');
  faceSelect2.option('●');
  faceSelect2.option('}');
  faceSelect2.option('₎₎');
  faceSelect2.style('font-size', '40px');

  faceSelect1.hide();
  faceSelect2.hide();

  otherSelect1= createSelect();
  otherSelect1.position(width/2-100, height/2+90);
  otherSelect1.option('ヘ');
  otherSelect1.option('ψ');
  otherSelect1.option('~');
  otherSelect1.option('↑_');
  otherSelect1.option('ლ');
  otherSelect1.option('୧');
  otherSelect1.style('font-size', '40px');

  otherSelect2= createSelect();
  otherSelect2.position(width/2+30, height/2+90);
  otherSelect2.option('ﾉ');
  otherSelect2.option('ψ');
  otherSelect2.option('~');
  otherSelect2.option(';Ψ');
  otherSelect2.option('ლ');
  otherSelect2.option('୨');
  otherSelect2.style('font-size', '40px');

  otherSelect1.hide();
  otherSelect2.hide();

  let radioText=[
    ' 再過不久就要出社會了呢...是不是該開始找實習了？    ',
    ' 天!!!我會不會被這個社會淘汰...!!!    ',
    ' 克制克制再吃會胖起來ㄛ～    ',
    ' 你真的很無聊誒！難怪沒有人要跟你講話哈哈～    ',
    ' 我講話很沒邏輯嗎？大家好像都聽不懂...    ',
    ' 誒你這樣很怪誒！你看大家都在看你！    ',
    ' 穩穩地走，跟著自己的步調不要急...    ',
    ' 你還不夠好，在這樣下去會落後別人！    '
  ];

  popRadio= createRadio();
  popRadio.position(50 , height/2-100);
  popRadio.option('1',radioText[int(random(2))]);
  popRadio.option('2',radioText[int(random(2, 4))]);
  popRadio.option('3',radioText[int(random(4, 6))]);
  popRadio.option('4',radioText[int(random(6, 8))]);
  popRadio.selected('2');
  popRadio.style('width', `${width*0.8}px`);
  popRadio.style('font-size', '17px');
  popRadio.style('line-height', '30px');
  popRadio.style('letter-spacing', '2px');
  popRadio.style('color', 'white');

  popRadio.hide();

  zeroRadio= createSelect();
  zeroRadio.position(width-190, height-220);
  zeroRadio.option('想逃離地球');
  zeroRadio.option('ㄜ還是別問了');
  zeroRadio.option('烏煙瘴氣');
  zeroRadio.option('百感交集');
  zeroRadio.option('如坐針氈');
  zeroRadio.option('乒乒乓乓');
  zeroRadio.option('心神蕩漾');
  zeroRadio.option('像個怪人');
  zeroRadio.option('霹哩啪啦');
  zeroRadio.style('font-size', '23px');

  zeroRadio.hide();
}

function draw() {
  // background(220);
  push();
  translate(width/2, height/2)
  imageMode(CENTER);


  if(startScene){
    image( startBG, 0 , 0 )


  }else if(blackScene){
    image( blackBG, 0 , 0 )
    startBtn.hide();
    pointBtn.show();

  }else if(blackScene2){
    image( blackBG2, 0 , 0 )

  }else if(didiScene){
    image( didiBG, 0 , 0 )
    fill(255)
    noStroke()
    textSize(25)
    text(didiInput1.value(), -120, -130)
    text(didiInput2.value(), -120, -85)

    if( didiInput1.value() != '' && didiInput2.value() != ''){
      pointBtn.show();
    }else{
      pointBtn.hide();
    }
    didiInput1.show();
    didiInput2.show();

  }else if(grassScene){
    image( grassBG1, 0 , 0 )
    didiInput1.hide();
    didiInput2.hide();

    eyeSelect1.show();
    eyeSelect2.show();

  }else if(grassScene2){
    image( grassBG2, 0 , 0 )
    eyeSelect1.hide();
    eyeSelect2.hide();

    mouthSelect.show();

  }else if(grassScene3){
    image( grassBG3, 0 , 0 )
    mouthSelect.hide();

    faceSelect1.show();
    faceSelect2.show();
    
  }else if(grassScene4){
    image( grassBG4, 0 , 0 )
    faceSelect1.hide();
    faceSelect2.hide();

    otherSelect1.show();
    otherSelect2.show();

  }else if(popScene){
    image( popBG, 0 , 0 )
    otherSelect1.hide();
    otherSelect2.hide();

    popRadio.show();
  }else if(zeroScene){
    image( zeroBG, 0 , 0 )
    popRadio.hide();

    zeroRadio.show();

  }else if(endScene){
    zeroRadio.hide();
    pointBtn.hide();
    pixelDensity(2);
    push()
    image( endBG, width/2, height/2 );
    image( logo, width/2, 85 )
    gifBtn.show()
    pop()
    push();
    // linearGradient(
    //   width/2, 0,
    //   width/2, height,
    //   color(215, 143, 82),
    //   color(239, 200, 175),
    //   color(186, 180, 219)
    // );
    // rect(0, 0, windowWidth, windowHeight);
    pop();  


    if(dusts.length > dusts_max){ dusts.splice(0,1); }
    if(dusts_light.length > dusts_light_max){ dusts_light.splice(0,1); }
    
    if(dusts.length != 0){
      for(let i = 0; i < dusts.length; i++){
        dusts[i].draw();
        dusts_light[i].draw();
      }
    }

    if(recording){
      gifBtn.hide()
      recordCount++;
      console.log(recordCount)
      if(recordCount == 30){
        record()
        recordCount = 0
      }
    }

    // recordCount = 0
    // gifBtn.show()


    //gif record
    if (recording && frameCount % 1 == 0) {
      gif.addFrame(c.elt, {delay: 30, copy: true});
    }

  }

  pop();
}

function NewDust(){
  // clear();
  numSlider.value(random(15, 95));
  sizeSlider.value(random(200, 400));
  roughSlider.value(random(1.5, 5));
  tightSlider.value(random(-14, 23));

  dusts.push(new Dust(cx, cy, numSlider.value(), sizeSlider.value(), roughSlider.value(), tightSlider.value(), dust_color));
  dusts_light.push(new Dust_light(cx, cy, numSlider.value(), sizeSlider.value(), roughSlider.value(), tightSlider.value(), dust_color, faceInput.value()));

}