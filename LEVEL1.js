class LEVEL1{
    constructor(){
        this.abc=createButton("abc");
    }
    display(){
       // background(bgimg4);

        
        map.level1.hide();
        map.level2.hide();
        map.level3.hide();
        map.level4.hide();
        map.level5.hide();
        map.level6.hide();
        map.level7.hide();
        map.level8.hide();
        map.level9.hide();
        map.level10.hide();
        map.back.hide();
        //food.back.hide();
        //gunshop.previous.hide();
        //character.previous.hide();
        map.level11.hide();
        map.level12.hide();
        map.level13.hide();
        map.level14.hide();
        map.level15.hide();
        map.level16.hide();
        map.level17.hide();
        map.level18.hide();
        map.level19.hide();
        map.level20.hide();
        map.level21.hide();
        map.level22.hide();
        map.level23.hide();
        map.level24.hide();
        map.level25.hide();

        player1=createSprite(1000,650);
        player1.addAnimation("STANDINGp",player1img);
        player1.addAnimation("FIRING",player1fire);
        player1.scale=0.5;
    
      //  player2=createSprite(200,650);
      //  player2.addAnimation("STANDING",player2img);
      //  player2.scale=0.5;
       // player2.debug = true
       // player2.depth=player2.depth+1;

      //  var fire=createButton("FIRE !!");
       //  fire.position(50,50);

     /*  fire.mousePressed(()=>{
           // background(bgimg4);
            bullet1=createSprite(1010,660);
            bullet1.addImage(bullet1img);
            bullet1.scale=0.1;
            bullet1.debug=true
           bullet1.depth=bullet1.depth-1;
            bullet1.velocityX=-3;
            
console.log("MousePResed");
            leaf=leaf-1;
            console.log(bullet1.x);
            if(bullet1.x === 200 )
            {
                diamond=diamond-5;
                console.log(bullet1.x);
            } 

          
        })*/

        this.forward=createButton("<<");
        this.forward.position(850,400);
        this.forward.style("width",'60px');
        this.forward.style('height','60px');
        this.forward.style('color','orange');
        this.forward.style('background','black');

        this.backward=createButton(">>");
        this.backward.position(950,400);
        this.backward.style("width",'60px');
        this.backward.style('height','60px');
        this.backward.style('color','orange');
        this.backward.style('background','black');

        this.upward=createButton("^");
        this.upward.position(900,320);
        this.upward.style("width",'60px');
        this.upward.style('height','60px');
        this.upward.style('color','orange');
        this.upward.style('background','black');


        
        this.forward.mousePressed(()=>{
            background(bgimg4);
            player1.x=player1.x-30;
        })
    
        this.backward.mousePressed(()=>{
            background(bgimg4);
            player1.x=player1.x+30;
        })

        this.upward.mousePressed(()=>{
            background(bgimg4);
            player1.y=player1.y-30;
        })
        player1.y=player1.y+1;
    
    
        this.abc.position(200,300);
        this.abc.style("border-radius","100%");

        this.abc.mousePressed(()=>{
            map.display();

            this.abc.hide();
            this.forward.hide();
            this.backward.hide();
            this.upward.hide();
            player1.visible=false;
            player2.visible=false;
        })
    }
}