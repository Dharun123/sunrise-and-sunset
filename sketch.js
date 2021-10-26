const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    {
      background(backgroundImg);
    }
    
       
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var d1 = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
     
    //change the data in JSON format
    var d2 = await d1.json(); 
    
    // write code slice the datetime
    var d3 = d2.datetime;
    var d4 = d3.slice(11,13)
    console.log(d4);

    // add conditions to change the background images from sunrise to sunset
    if(d4>6&&d4<=18)
    {
    backgroundImg = loadImage("sunrise1.png");
    }
    else
    {
    backgroundImg = loadImage("sunset10.png");
    }
    

    //load the image in backgroundImg variable here

}
