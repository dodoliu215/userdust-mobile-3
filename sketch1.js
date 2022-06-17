function sliderSetUp(){
  sizeText = createDiv();
  sizeSlider = createSlider(5, 400, 400);
  numText = createDiv();
  numSlider = createSlider(3, 100, 55);
  roughText = createDiv();
  roughSlider = createSlider(1, 5, 4, 0.01);
  tightText = createDiv();
  tightSlider = createSlider(-30, 30, 13);
  faceInput = createInput('');

  sizeText.hide()
  sizeSlider.hide()
  numText.hide()
  numSlider.hide()
  roughText.hide()
  roughSlider.hide()
  tightText.hide()
  tightSlider.hide()
  faceInput.hide()
  
  cx = width/2; //灰塵的中心
  cy = height/2;
  
  pushbtn = createButton("push");
  savebtn = createButton("save");
  savebtn.mousePressed(function(){
    saveCanvas(canvas, 'dust', 'png');
  })
  // gifbtn = createButton("gif");
  // gifbtn.mousePressed(record);
  //color
  colorMode(RGB, 255, 255, 255);
  colorNum = colors.length;
  console.log('color length:'+ colorNum);
  dust_color = int(random(colorNum));

  pushbtn.hide()
  savebtn.hide()
}