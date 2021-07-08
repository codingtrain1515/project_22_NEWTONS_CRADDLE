class Roof {
    constructor(x,y,w,h){
        let options ={
            isStatic:true,
            "restitution":1.0,
            "density":1.0,
            "friction":1.0
        }
        this.x=x;
        this.y=y;
        this.w = w;
        this.h =h;

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
    World.add(world,this.body);
    }
    show(){
        let pos= this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h);
    }

}