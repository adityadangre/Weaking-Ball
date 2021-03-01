class Ball {
    constructor(x,y,r) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':1.0,
          isStatic:false
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //translate(pos.x,pos.y);
      strokeWeight(3);
      stroke("green");
      fill("yellow");
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y,this.r*2, this.r*2)
      pop();
    }
  }