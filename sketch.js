var fighterjetImg;
var stone,stoneImg;
var bullet,bulletGroup;
var stone,stoneGroup;
var bg,bachground,bgImg;
var star,starImg;
var life=5
var score=0
var bulletSound
var blastsound;
var fighterjetblastsound;
var fighterjetblastImg;
var stoneblastImg
var star,starsound;
var gunfireImg;
var fj1Img,fj2Img,fj3Img,fj4Img,fj5Img,fjImg;
var scoreImg;
var gamestate="play"
var restartImmg;



function preload(){
    bgImg=loadImage("sbg1.jpg")
    fighterjetImg=loadImage("shooter2.png")
    stoneImg=loadImage("stone.png")
    starImg=loadImage("star.png")

    fj1Img=loadImage("fjs.png")
    fj2Img=loadImage("fjs.png")
    fj3Img=loadImage("fjs.png")
    fj4Img=loadImage("fjs.png")
    fj5Img=loadImage("fjs.png")
    
    

    
    bulletSound=loadSound("bullet.mp3")
   
    stoneblastsound=loadSound("blastsound.mp3")
    fighterjetblastsound=loadSound("fightersound.mp3")
    starsound=loadSound("startouch.mp3")
}

function setup(){

 createCanvas(900,580)
 background=createSprite(0,0,900,580)
 background.addImage(bgImg)
 background.scale=8 

    fighterjet=createSprite(450,400)
    fighterjet.addImage(fighterjetImg)
    fighterjet.scale=0.1
    fighterjet.debug=false
    fighterjet.setCollider("rectangle",0,0,1600,600)

    stoneGroup=new Group()
    starGroup=new Group()
    bulletGroup=new Group()
   

    fj1=createSprite(870,30)
    fj1.addImage(fj1Img)
    fj1.scale=0.9
    fj1.visible=false


    fj2=createSprite(830,30)
    fj2.addImage(fj2Img)
    fj2.scale=0.9
    fj2.visible=false

    fj3=createSprite(790,30)
    fj3.addImage(fj3Img)
    fj3.scale=0.9
    fj3.visible=false

    fj4=createSprite(750,30)
    fj4.addImage(fj4Img)
    fj4.scale=0.9
    fj4.visible=false

    fj5=createSprite(710,30)
    fj5.addImage(fj5Img)
    fj5.scale=0.9
    fj5.visible=false

   
}

   function draw(){
   
    background.velocityY=6
 if(background.y > 700 ){
 background.y=background.height/2
    }
   
    if(keyDown('UP')){

    fighterjet.y-=4
   
    }
if(keyDown('DOWN')){
    fighterjet.y+=4
   
}
if(keyDown('Left')){
    fighterjet.x-=4
   
}
if(keyDown('Right')){
    fighterjet.x+=4
}

    if(keyWentDown('space')){
        bullet=createSprite(fighterjet.x-1,fighterjet.y-65,7,5)
        bullet.velocityY=-10
        bulletGroup.add(bullet)
       
        
        bulletSound.play() }   
        
        if(stoneGroup.isTouching(fighterjet)){
            for(i=0;i<stoneGroup.length;i++){
                if(stoneGroup[i].isTouching(fighterjet)){
                    
                    stoneblastsound.play()
                   
                     stoneGroup[i].destroy()
                            }  }  }
        
        if(stoneGroup.isTouching(bulletGroup)){
            for(i=0;i<stoneGroup.length;i++){
                if(stoneGroup[i].isTouching(bulletGroup)){
                  
                    stoneblastsound.play()
                    stoneGroup[i].destroy()
                    bulletGroup.destroyEach()
                    stoneGroup.destroyEach()
                    stone.destroy()
                    bullet.destroy()
                   
                    score++  }   }   }
                          
        stone1()
        star1()
       
    
    if(starGroup.isTouching(fighterjet)){
        for(i=0;i<starGroup.length;i++){
            if(starGroup[i].isTouching(fighterjet)){
                starGroup[i].destroy()
                starsound.play()
                    star.destroy()
                     }  }   }
            
    
                    if(life==5){
                        fj1.visible=true
                        fj2.visible=true
                        fj3.visible=true
                        fj4.visible=true
                        fj5.visible=true
                    }
                    
                        if(life==4){
                            fj1.visible=true
                            fj2.visible=true
                            fj3.visible=true
                            fj4.visible=true
                            fj5.visible=false
                        }
                    
                        if(life==3){
                            fj1.visible=true
                            fj2.visible=true
                            fj3.visible=true
                            fj4.visible=false
                            fj5.visible=false
                            
                        }
                      
                        if(life==2){
                            fj1.visible=true
                            fj2.visible=true
                            fj3.visible=false
                            fj4.visible=false
                            fj5.visible=false
                        }
                    
                        if(life==1){
                            fj1.visible=true
                            fj2.visible=false
                            fj3.visible=false
                            fj4.visible=false
                            fj5.visible=false
                        }
                    
                        if(life==0){
                            fj1.visible=false
                            fj2.visible=false
                            fj3.visible=false
                            fj4.visible=false
                            fj5.visible=false
                         }
                                                  
    drawSprites()

    
     

    textSize(48)
    fill("black")
    
   
 text(+score,810,118)

    
    
}

function stone1(){
    if(frameCount%50==0){
        stone=createSprite(random(200,600),random(5,10),20,20)
        stone.addImage(stoneImg)
        stone.velocityY=5
        stone.scale=0.3
        stone.lifetime=800
        stoneGroup.add(stone)
        stone.debug=false }  }



function star1(){
    if(frameCount%300==0){
        star=createSprite(random(100,800),random(2,5),20,20)
        star.addImage(starImg)
        star.velocityY=15
        star.scale=0.09
        star.lifetime=400
        starGroup.add(star)
        star.debug=false  } }




