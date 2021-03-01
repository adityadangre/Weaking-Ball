class Building{
    constructor(x,y,width,height){
      var options={
        isStatic:false,
        restitution:0.8,
        friction:1.0,
        density:0.1
      }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }

    display(){
          var pos =this.body.position;
          push();
          rectMode(CENTER);
          stroke ("white");
          strokeWeight(4);
          rect(pos.x, pos.y, this.width, this.height);
          pop();
    }
}