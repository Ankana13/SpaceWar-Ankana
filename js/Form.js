class Form{
    constructor(){
        this.button = createButton('Start');
        this.title = createElement('h2');
        this.button2 = createButton('How To Play');

    }
    hide(){
        console.log("hideme")
        this.button.hide();
        this.title.style.visibility = "hidden";
       // this.button2.hide();

    }
    display(){
        this.title.html("SpaceWars");
        this.title.position(windowWidth/2-200,windowHeight/8);
        this.title.style('font-size','80px');
        this.title.style('color','pink');
        this.button.position(windowWidth/2-100,windowHeight/2);
        this.button.style('width','200px');
        this.button.style('height','50px');
        this.button.style('background','yellow');

        this.button2.position(windowWidth/2-(-250),windowHeight/2+200);
        this.button2.style('width','150px');
        this.button2.style('height','30px');
        this.button2.style('background',' green');

        this.button.mousePressed(()=>{
          this.hide();
            gameState = 1;
       })
    }
}