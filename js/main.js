// this is for the js
window.onload=function () {
    
    // get the reference from the canvas 
    var canvas=document.getElementById("mycanvas");
    var ctx=canvas.getContext("2d");
    // this is for the multiple circle
    var circles=[{x:100,y:200,r:10,color:"blue",vx:1,vy:-1},
                 {x:100,y:300,r:12,color:"red",vx:2,vy:-2},
                 {x:200,y:100,r:18,color:"green",vx:3,vy:-3},
                 {x:300,y:150,r:10,color:"pink",vx:1.6,vy:-1},
                 {x:340,y:250,r:15,color:"orange",vx:2,vy:2},
                 {x:200,y:120,r:25,color:"white",vx:1.9,vy:-3},
                 {x:150,y:100,r:9,color:"golden",vx:2.6,vy:-1},
                 {x:201,y:130,r:13,color:"yellow",vx:2,vy:1},
                 {x:100,y:180,r:22,color:"purple",vx:1,vy:-3},
                 {x:70,y:190,r:29,color:"red",vx:2,vy:-3},
                 {x:20,y:19,r:33,color:"orange",vx:4,vy:-1},
                 {x:380,y:250,r:17,color:"violet",vx:3,vy:1},
                 {x:300,y:90,r:25,color:"blue",vx:2,vy:2.5},
                 ];
    // create the some variables for the position x and the y
    var x=canvas.width/2;
    var y=canvas.height/2;
    // creating the two variables for the speed 
   // var vx=2;
   // var vy=-2;

    // here we call the function
    Draw();

// creating the function draw
function Draw(){
   
    // this is for refreshing the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // for multiple circle
    for(i=0;i<circles.length; i++){
    ctx.beginPath();
    // creating the red circle
    ctx.arc(circles[i].x,circles[i].y,circles[i].r,0,Math.PI*2);//for multiple circle

    ctx.fillStyle=circles[i].color;
    ctx.font = "30px Arial";//this is for the font
    ctx.fillText("Bouncing Ball",10,50);
    ctx.fill();//fill it
    ctx.closePath();


    
    
    // this is for the wall colliding conditions

if(circles[i].x+circles[i].vx>800){
    circles[i].vx=-circles[i].vx;
    
}
if(circles[i].x+circles[i].vx<0)
{
circles[i].vx=-circles[i].vx;
}

if(circles[i].y+circles[i].vy>500)
{
    circles[i].vy=-circles[i].vy;

}
if(circles[i].y+circles[i].vy<0)
{
circles[i].vy=-circles[i].vy;
}
// here we update the values
circles[i].x+=circles[i].vx;
circles[i].y+=circles[i].vy;
// to make this like animation we need ot use this method
// where we pass the function draw as an argument.
}//for multiple circle
}
setInterval(Draw,10);//this is for the animation speed


}
