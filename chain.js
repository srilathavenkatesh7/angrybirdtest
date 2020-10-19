class Chain {
constructor (BodyA,BodyB){
    var options ={
        bodyA:BodyA,
    bodyB:BodyB,
    stiffness: 0.6,
    length:8,
    }
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
}
display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;
strokeWeight(5);
line (pointA.x,pointA.y,pointB.x,pointB.y);


}
}