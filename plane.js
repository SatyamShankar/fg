class Plane{

 constructor(){

 var options={
'restitution':1.0,
 'density':1.0,
 'friction':1.0,
}

this.body=Bodies.rectangle(350,400,500,500)
World.add(world,this.body)

 }
display(){

    rectMode(CENTER);



}




}