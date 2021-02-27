class Stone{
 constructor(){


 var options = {   

'restitution':0.4,
'density':2.5,
'friction':0.5,

 }
 this.body=Bodies.rectangle(500,100,100,20)
 World.add(world,this.body)
 }


display(){
    rectMode(CENTER);
}







}
