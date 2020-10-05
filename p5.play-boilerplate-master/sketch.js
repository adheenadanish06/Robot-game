


//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var player;
var ncPlayer;
var Ground;
//background

var bg;
var bg1;
var bg2;
var bg3;
var bg4, pimage, ncPimage;

var player, ncPlayer,ground;

var bullets;

//score
var count = 0;
var ncCount =  0;

function preLoad(){
    bg = loadImage("battlegrond2.png");
    bg1 = loadImage("battlegrond3.png");
    bg2 = loadImage("battlegrond4.png");;
    pimage = loadImage("robot.jpg");
    ncPimage = loadImage("robot.jpg");
}

function setup (){

    createCanvas(displayWidth-30,displayHeight-20);

    player = createSprite(60,600,70,70);
    player.debug = true;
     ncPlayer = createSprite(displayWidth-100,675,70,70);
     ncPlayer.debug = true;
     ground = createSprite(displayWidth/2,displayHeight - 20,displayWidth,20);
     ground.debug = true;
     bullet = createSprite(60,650,10,5);

}


function draw(){

    background(0); 

    bullet.x = player.x;     
    //do not remove these comments Adheena :ok
    bullet.y =  player.y;// how should I realese the bullet 
    //if keydown letter b then bullet.velocityX = 5;
    //if bullet.istouching enemy then reduce health of enemy.

    //if player touches enemy reduce health of player

    

    




    if(gameState === PLAY){


      if(keyDown("space")&& player.y >= 650){
        player.velocityY = -12 ;

      }
      
      
    // enemy

      if(ncCount < 200){
        ncCount = Math.round(World.frameCount/8);
      }

    
      
      text(" Enemy's health:"+ ncCount, ncPlayer.x - 50  , 600);
       

      //player

      if(count< 200){
        count = Math.round(World.frameCount/8);
      }
      
        text("health:"+ count, player.x - 20, 600);

        

        if (count>0 && count%100 === 0){
            text("checkpoint", 200,200);
        }
        
        
         //jump when the space key is pressed
      
        if(keyDown("b") ){
          bullet.velocityX = 5;

        }

         //moves left

         if(keyWentDown(LEFT_ARROW) ){
            player.velocityX = -3 ;
  
          }

          // moves right
          if(keyWentDown(RIGHT_ARROW) ){
            player.velocityX = 3 ;
  
          }

          if(keyWentUp(LEFT_ARROW)){
            player.velocityX = 0;
          }
          

          if(keyWentUp(RIGHT_ARROW)){
            player.velocityX = 0 ;
          }
        
      
        //add gravity
        player.velocityY = player.velocityY + 0.8;

        if(bullet.isTouching(ncPlayer) ){
          ncCount = ncCount - 20;
        }
        
         
        }
      
      else if(gameState === END) {
        
        textSize(32);
        text("Game Over", 200, 200);

        //jump when the space key is pressed
        if(keyDown("space") && player.y >= 650){
            player.velocityY = 0 ;
  
          }
          
  
           //moves left
           if(keyWentDown(LEFT_ARROW)){
              player.velocityX = 2 ;
    
            }
            if(keyWentUp(LEFT_ARROW)){
              player.velocityX = 0 ;
            }
  
            // moves right
            if(keyWentWentDown(RIGHT_ARROW) ){
              player.velocityX = 0 ;
    
            }

            if(keyWentUp(RIGHT_ARROW)){
              player.velocityX = 0 ;
            }
          
        
        
          }

      player.collide(ground);
      ncPlayer.collide(ground);
      
    
    drawSprites();
   
}





