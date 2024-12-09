let x,y,rad,xDir,yDir,r,g,b,angle;


function setup() {
  createCanvas(400, 400);
  
  
  angle=random(0,360);
  
  x=random(0,width);
  y=random(0,height);
  
  xDir=random(-4,4);
  yDir=random(-4,4);
  

}

function draw() {
 background(14,148,230,10);
  
  r=random(10,255);
  g=random(10,255);
  b=random(10,255);
  colorAdjust=random(30,100);
  
   fill (r+colorAdjust,g+colorAdjust,b+colorAdjust);
  noStroke();
  circle (x,y,70);
  
  
  rad=map(sin(angle),-1,1,20,60);
  
  circleDraw(r,g,b,rad);
  update(0.1);
  keepInCanvas();
  
  angle+=7;
  
  textSize(30);
  fill('pink');
  stroke('purple');
  strokeWeight(4);
  text('Sophia', 150, 50);

  describe('The text "Sophia" written in pink with a blue outline.');

  
}




////my function 

function circleDraw(ballr,ballg,ballb,radius) 
{
  let numShapes=5;
  let space=radius/numShapes;
  let offSet=space;
  
  
   strokeWeight(1);
   for (i=0;i<numShapes;i++)
    {
        if (i==0)
          {
            fill(ballr,ballg,ballb); 
          }
      else if (i==1)
          {
            fill(ballr-10,ballg,ballb); 
            
          }
       else if (i==2)
          {
            fill(ballr-30,ballg,ballb); 
           
          }
       else if (i==3)
          {
            fill(ballr-40,ballg,ballb); 
           
          }
       else if (i==4)
          {
            fill(ballr-50,ballg,ballb); 
           
          }
      else
        {
          fill(ballr-60,ballg,ballb); 
        }
        
      circle(x,y,radius-space*i);
    }
   
}

function update(speed)



{
  x+=xDir*(speed+2);
  y+=yDir*(speed+2);
}

function keepInCanvas()
{
  
  if((x<0) || (x>width))
    {
    xDir=-xDir;
    }
    if((y<0) || (y>height))
      {
      yDir=-yDir;
      }
     
}