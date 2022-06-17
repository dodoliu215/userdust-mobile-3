let recording = false;
let gif;

function gifSetUp(){
  setupGif();
}

function record(){
  recording = false
  if (recording == false) {
    gif.render()
  }
}

function setupGif() {
  gif = new GIF({
    workers: 2,
    quality: 200
  });

  gif.on('finished', function(blob) {
    // save gif to local file
    saveAs(blob, "userdust.gif"); 
    setupGif();
  });
}