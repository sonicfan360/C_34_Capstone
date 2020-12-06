class chain {
    constructor(body1,point1){
        var options = {bodyA : body1,
        pointB: point1,
        stiffness : 1,
        length: 500        
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var firstpos = this.chain.bodyA.position;
        var Secpos = this.chain.pointB;
        line(Secpos.x, Secpos.y, firstpos.x, firstpos.y);
    }
}