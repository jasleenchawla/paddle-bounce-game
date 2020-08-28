var ball,img,paddle,ball_moving,paddle_image;
function preload() {
  
  ball_moving = loadImage("ball.png")
  paddle_image = loadImage("paddle.png")
  
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(20,120,40,40)
  ball.addImage (ball_moving)
  ball.velocityX = 9
  
  paddle = createSprite(380,120,60,50)
  paddle.addImage(paddle_image)
  
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[1])
  ball.bounceOff(edges[3])
  ball.bounceOff(paddle,randomVelocity)
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  paddle.collide(edges);
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY = -10;
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY = 10;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY=random(-8,8); 
}

