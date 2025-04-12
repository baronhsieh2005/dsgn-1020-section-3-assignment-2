let hi = 0;
let popupCount = 0;
let starterPopup;

function setup() {
  noCanvas(); 
  frameRate(5);

}

function draw() {
  if (hi === 1 && popupCount < 30) {
    let popup = createImg('download_1.svg', 'Download Icon');
    popup.position(random(0, windowWidth - 300), random(0, windowHeight - 150));
    popup.style('width', random(50, 200) + 'px');
    popup.class('popup');
    popupCount++;
  }

  if (popupCount >= 30) {
    noLoop(); 
  }
}

function download_popup() {
  //create the starter image once
  if (!starterPopup) {
    starterPopup = createImg('download_1.svg', 'Click Me!');
    starterPopup.position(windowWidth/2 - 100, windowHeight/2 - 100);
    starterPopup.style('width', '200px');
    starterPopup.class('popup');

    // When user clicks it -> start the chaos lol
    starterPopup.mousePressed(() => {
      hi = 1;
      popupCount = 0;
      loop();
      // starterPopup.remove(); 
    });
  }
}
