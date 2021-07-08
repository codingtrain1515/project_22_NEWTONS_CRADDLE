class Bob{
    constructor(x,y,r){
let options = {
    "restitution":1.0,
    "density":1.0,
    "friction":1.0
}
this.x = x
this.y=y;
this.r = r;
this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
World.add(world,this.body);
    }
show(){
    var pos = this.body.position.x;
    push()
    var pos1 = this.body.position.y;
    rectMode(CENTER);
    fill(0, 199, 196)
    ellipse(pos,pos1,this.r)
pop();
}
    
}