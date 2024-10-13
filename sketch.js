let img
let cnv
let button
let output
let cx,cy


function setup() {
cnv =createCanvas(800, 30);
cnv.parent("colorbox")
 //cx = floor((windowWidth - cnv.width) / 2);
  // cy = floor((windowHeight - cnv.height) / 2);
 // cnv.position(cx, cy);
  getStreet()
  background(128)
  textSize(30);
  textWrap(WORD);

  // Display the text.
  text('Wait for image',0, 0, 800);
  button = createButton("Click for new image, (change of color shows you have clicked)")
  button.parent("buttonholder")
  button.mousePressed(doit)
  button.size(300,300)
  
  //button.position(cx,cy+cnv.height+30)
  button.style('font-size', '30px');
  //output.position(button.x,button.y+60)
}

 async function doit(){
    background(random(255),random(255),random(255))
    await getStreet()
   

 }

async function getStreet(){
  /* 
  if (img) {
    img.remove();
    //uncomment to delete old image;
  }
   */
  img = await createImg("https://image.pollinations.ai/prompt/a%20busy%20board%20with%20many%20things%20like%20door%20handles%20and%20chains%20buttons%20bells%20electronics%20and%20natural%20things%20and%20maze%20patterns%20and%20sliding%20things%20for%20a%20people%20to%20interact%20with,%20hanging%20on%20a%20gallery%20wall?width=600&height=400&nologo=true&seed="+floor(random(1026)),"street scene")
 //img.position(cx,cy)
 img.parent("sketch-holder")
 
 //cnv.image(img,0,0)
   
}