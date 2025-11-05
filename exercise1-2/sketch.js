let myFont

function preload(){
    myFont = loadFont("assets/BeautifulPeoplePersonalUse-dE0g.ttf")
    myFont1 = loadFont("exercise1-2/assets/MomoSignature-Regular.ttf")
}

function setup(){
    createCanvas(600, 600)
}

function draw(){
    background(0)
    fill(255)
    textSize(40)
    textFont(myFont)
    text("Lorem ipsum dolor sit amet", 300, 300, 40, 600)
    textAlign(RIGHT, BOTTOM)
}

function keyPressed(){
    
}
