class B{
    constructor(a,b,c,d){
        var box_options ={
            'restitution': true,
             'friction' : 0.3,
             'density' : 1
        }
        this.body = Bodies.rectangle(a,b,c,d,box_options);
        this.c=c;
        this.d=d;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle
        var dis = this.body.position;
        push();
        translate(dis.x,dis.y);
        rotate(angle);
        fill("blue");
        rectMode(CENTER);
        rect(0,0,this.c,this.d);
        pop();
    }
    }








