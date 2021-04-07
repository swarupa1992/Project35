//Test35 database
var balloon,database,position;

function preload(){

     backgImage = loadImage("images/Hot Air Ballon-01.png");
     balloonImage = loadImage("images/Hot Air Ballon-02.png");

}
function setup() {
  createCanvas(500,500);

  database = firebase.database();
  console.log(database);
  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage("ballo",balloonImage);
  balloon.scale = 0.4;

  var bPosition = database.ref('balloon/position');

  bPosition.on("value",readPosition);

}

function readPosition(data){

  position = data.val();
  console.log(position);
  balloon.x = position.x;
  balloon.y = position.y;

}



function draw() {
  background(backgImage); 
  
  if(keyDown(RIGHT_ARROW)){
    writePosition(5,0);
  }
  else if(keyDown(LEFT_ARROW)){
    writePosition(-5,0);
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0,-5);;
  }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0,5);;
  }



    drawSprites();
}


function writePosition(x,y){
  database.ref('balloon/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}


