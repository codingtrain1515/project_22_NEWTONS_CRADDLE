class Chain{
    constructor(bodyA,pointB){
let options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.05,
    lengtht:100
}

this.pointB=pointB
this.chain = Constraint.create(options);
World.add(world,this.chain);
    }
    show(){
        if(this.chain.bodyA){
            let pointA = this.chain.bodyA.position;
            let pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}