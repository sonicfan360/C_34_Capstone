class ground{
     constructor(x,y,width1, height1){
        var options ={
                isStatic:true
               }
      this.body = Bodies.rectangle(x,y,width1,height1,options)
      this.width = width1;
      this.height = height1;
      World.add(world, this.body)
        
    }
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);

}
}