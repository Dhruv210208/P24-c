class Paper extends BaseClass {
	constructor(x,y){
	  super(x,y,50,50);
	  this.image = loadImage("sprites/paper.png");
	}
  
	display() {
	  //this.body.position.x = mouseX;
	  //this.body.position.y = mouseY;
	  super.display();
  
	image[this.body.position.x,this.body.position.y]
	//this.trajectory.push(position)
  }

	
	}
  
  
  