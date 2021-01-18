class Paper{

    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.ellipse(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}