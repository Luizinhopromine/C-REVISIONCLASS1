class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");

  }


 
  }

  function start(params) {
      form = new Form();
    form.display();

    
    dero1 = createSprite();
    dero1.addImage("dero1", dero1_img);
    dero1.scale = 1
   
    enemy = createSprite(width / 2 - 100, height - 100);
    enemy.addImage("enemy", enemy_img);
    enemy.scale = 1
    if (keyCode === 32) {
      Fireballs = createSprite(
        player.positionX,player.positionY,20,20);
      Fireballs.addImage("difficult",fireballimage);
      Fireballs.scale = 1
    }


    dero = [dero1];
  }
  

  
  

  function handleElements()
   {
    form.hide();
    if (gameover= true) {
      
    this.resetTitle.html("Reinicar Jogo");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width / 2 + 200, 40);

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 + 230, 100);
    }
  }

  function play()
   {
    this.handleElements();
    this.handleResetButton()
    this.showLife();

   handlePlayerControls();
      drawSprites();
    }
  
  


  function handlePlayerControls() 
  {
    // manipulando eventos de teclado
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10;
      
    }

   if (keyIsDown(DOWN_ARROW)) {
      player.positionY -= 10;
     
    }

    if (keyIsDown(LEFT_ARROW) && player.positionX > width / 3 - 50) {
      player.positionX -= 5;

    }

    if (keyIsDown(RIGHT_ARROW) && player.positionX < width / 2 + 300) {
      player.positionX += 5;
    
    }
  }

 function  handleResetButton() 
  {
    
      
      window.location.reload();
  ;
  }

  

  function showLife()
   {
    push();
    image(lifeImage, width / 2 - 130, height - player.positionY - 300, 20, 20);
    fill("white");
    rect(width / 2 - 100, height - player.positionY - 300, 185, 20);
    fill("#f50057");
    rect(width / 2 - 100, height - player.positionY - 300, player.life, 20);
    noStroke();
    pop();
  }