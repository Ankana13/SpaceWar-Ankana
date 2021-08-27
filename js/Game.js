class Game{
    constructor(){

    }
    start(){
       
            form = new Form()
            form.display();
            background(bg1_img);
            
    }
       play(){
            form.hide();
            console.log(gameState);
            s = createSprite(0, 0, 640,360);
          s.addImage(s_img);
          // image(s_img,0,0,windowWidth,windowHeight)
           s.velocityX = -3
           if (s.x < 0){
            s.x = s.width/2;
           
          }
           
            drawSprites();


        }
    
}