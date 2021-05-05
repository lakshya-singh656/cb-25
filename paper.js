class Paper{
    constructor(x,y){
        var option = {
        restitution:0.5,
        density:1.2,
        friction: 0,
      
        }
        
        this.paperBody=Bodies.circle(x,y,25,option)
        World.add(world,this.paperBody)
        this.paperImage=loadImage("paper.png");

        this.x=x
        this.y=y



    }
    display(){
    var pos = this.paperBody.position;
    
    

    //push();
    //translate(pos.x, pos.y);
    
    imageMode(CENTER)
    image(this.paperImage,pos.x,pos.y, 25,25);
    //pop();



    }
}