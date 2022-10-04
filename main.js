var canvas=new fabric.Canvas("myCanvas");
blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
   fabric.Image.fromURL(get_image,function(Img){
    blockImageObject=Img;
    blockImageObject.scaleToWidth(blockImageWidth);
    blockImageObject.scaleToHeight(blockImageHeight);
    blockImageObject.set({
    top:blockY,
    left:blockX
    });
canvas.add(blockImageObject);
  });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

       if(keyPressed=="82"){
        new_image("rr.jpg")
        console.log("r")
       }
   }
   if(keyPressed == '86')
   {
       blockX = 200;
        new_image("gr.png")
        console.log("v")
    
   }
   
   if(keyPressed == '65')
   {
       blockX =350;
        new_image("yr.png")
        console.log("r")
       
   }
   if(keyPressed == '82')
   {
       blockX = 600;
       // enviar ranger rosa
   }
   if(keyPressed == '73')
   {
       blockX = 700;
   // enviar ranger índigo
   }
   
