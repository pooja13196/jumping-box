var fixSprite1,fixSprite2,fixSprite3,fixSprite4;
var movingSprite;
var canvas;
var music;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    fixSprite1 = createSprite(0,580,360,30);
    fixSprite1.shapeColor = rgb(0,0,255);

    fixSprite2 = createSprite(295,580,200,30);
    fixSprite2.shapeColor = rgb(255,128,0);

    fixSprite3 = createSprite(515,580,200,30);
    fixSprite3.shapeColor = rgb(153,0,76);

    fixSprite4 = createSprite(740,580,220,30);
    fixSprite4.shapeColor = rgb(0,100,0);

    movingSprite = createSprite(random(20,750),100, 40,40);
    movingSprite.shapeColor = rgb(255,255,255);
    movingSprite.velocityX = 4;
    movingSprite.velocityY = 9;


   
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    movingSprite.bounceOff(edges);

    if(fixSprite1.isTouching(movingSprite) && movingSprite.bounceOff(fixSprite1)){
        movingSprite.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(fixSprite2.isTouching(movingSprite)){
                movingSprite.shapeColor = rgb(255,128,0);
        movingSprite.velocityX = 0;
        movingSprite.velocityY = 0;
        music.stop();
    }

    if(fixSprite3.isTouching(movingSprite) && movingSprite.bounceOff(fixSprite3)){
        movingSprite.shapeColor = rgb(153,0,76);
    }

    if(fixSprite4.isTouching(movingSprite) && movingSprite.bounceOff(fixSprite4)){
        movingSprite.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}