function init() {
    
    animal_item()
    anime();
}
function reinit() {
    animal_item()
  
}
var anime_state;
addEventListener("load", init);
addEventListener("resize", reinit);


function animal_item(){
    anime_state =(calss("home_header_pic")[0].attributes.class.ownerElement.clientWidth);

    if (window.innerWidth<=767) {
        calss("home_animal_01")[0].style.height=anime_state/100*15+"px";
        calss("home_animal_01")[0].style.width =anime_state/100*15+"px";
    
        calss("home_animal_02")[0].style.height=anime_state/100*15+"px";
        calss("home_animal_02")[0].style.width =anime_state/100*15+"px";
    
        calss("home_animal_03")[0].style.height=anime_state/100*15+"px";
        calss("home_animal_03")[0].style.width =anime_state/100*15+"px";
    
        calss("home_animal_04")[0].style.height=anime_state/100*15+"px";
        calss("home_animal_04")[0].style.width =anime_state/100*15+"px";
    
        
        calss("home_animal_05")[0].style.height=anime_state/100*15+"px";
        calss("home_animal_05")[0].style.width =anime_state/100*15+"px";
    }
    if (window.innerWidth>767) {
        calss("home_animal_01")[0].style.height=anime_state/100*10+"px";
        calss("home_animal_01")[0].style.width =anime_state/100*10+"px";
    
        calss("home_animal_02")[0].style.height=anime_state/100*10+"px";
        calss("home_animal_02")[0].style.width =anime_state/100*10+"px";
    
        calss("home_animal_03")[0].style.height=anime_state/100*10+"px";
        calss("home_animal_03")[0].style.width =anime_state/100*10+"px";
    
        calss("home_animal_04")[0].style.height=anime_state/100*10+"px";
        calss("home_animal_04")[0].style.width =anime_state/100*10+"px";
    
        
        calss("home_animal_05")[0].style.height=anime_state/100*10+"px";
        calss("home_animal_05")[0].style.width =anime_state/100*10+"px";
   }
   



 


}
function calss(e){
   return document.getElementsByClassName(e);
}
var test =30 ;
function anime() {
    CustomEase.create("hop", "M0,0.005 C0,0.005 0.056,0.445 0.175,0.445 0.294,0.445 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0");
    CustomEase.create("jump", "M0,0,C0,0,0.035,1.006,0.052,1,0.062,1.029,0.12,0,0.12,0,0.12,0,0.16,1,0.16,1,0.16,1,0.228,0,0.228,0,0.228,0,0.26,1,0.26,1,0.26,1,0.33,0,0.33,0,0.33,0,0.357,1.031,0.36,1,0.366,1,0.45,-0.002,0.46,0,0.495,0.079,0.472,0.938,0.5,1,0.507,0.997,0.594,0.007,0.6,0,0.602,-0.003,0.634,1,0.634,1,0.634,1,0.749,0.004,0.754,0,0.755,0.018,0.785,0.99,0.786,1,0.788,0.994,0.88,0,0.88,0,0.88,0,0.901,0.921,0.926,1,0.941,0.992,1,1,1,1");
       
    var  home_animal=new TimelineMax({
        //repeat:-1,
        
    });
    var  home_animal_2=new TimelineMax({
       // repeat:-1,
    });
    var  home_animal_3=new TimelineMax({
      //  repeat:-1,
    });
    var home_animal_4=new TimelineMax({
      //  repeat:-1,
    });
    var  home_animal_5=new TimelineMax({
       // repeat:-1,
    });
 
        home_animal.to(".home_animal_01",0,{
            x:0,
            yPercent:-400,
            //scaleX:-1
        }).to('.home_animal_01', 2, {   
            x:0,
            yPercent: 0,
            // delay: 1,
            ease: Bounce.easeOut,
        })
        // .to('.home_animal_01', 5, { 
            
        //     yPercent: -60,
         
        // },)
        // .to('.home_animal_01',5,{
        //     // transformOrigin
        //     xPercent:350,
        //     scaleX:0.6,
        //     scaleY:0.6,
       
        //  },2)
        // .to('.home_animal_01',2,{
        //    // transformOrigin
        //    xPercent: 800,
        //    y:anime_height-80,
        //    autoAlpha:0,
        // })

        home_animal_2.to(".home_animal_02",0,{
            x:0,
            yPercent:-400,
            //scaleX:-1
        }).to('.home_animal_02', 2, {   
            x:0,
            yPercent: 0,
            // delay: 1,
            ease: Bounce.easeOut,
        })
        // .to('.home_animal_02', 5, { 
            
        //     yPercent: -60,
         
        // },)
        // .to('.home_animal_02',5,{
        //     // transformOrigin
        //     xPercent:350,
        //     scaleX:0.6,
        //     scaleY:0.6,
       
        //  },2)

        home_animal_3.to(".home_animal_03",0,{
            x:0,
            yPercent:-400,
            //scaleX:-1
        }).to('.home_animal_03', 2, {   
            x:0,
            yPercent: 0,
            // delay: 1,
            ease: Bounce.easeOut,
        })
        // .to('.home_animal_03', 5, { 
            
        //     yPercent: -60,
         
        // },)
        // .to('.home_animal_03',5,{
        //     // transformOrigin
        //     xPercent:350,
        //     scaleX:0.6,
        //     scaleY:0.6,
       
        //  },2)
         home_animal_4.to(".home_animal_04",0,{
            x:0,
            yPercent:-400,
            //scaleX:-1
        }).to('.home_animal_04', 2, {   
            x:0,
            yPercent: 0,
            // delay: 1,
            ease: Bounce.easeOut,
        })
        // .to('.home_animal_04', 5, { 
            
        //     yPercent: -60,
         
        // },)
        // .to('.home_animal_04',5,{
        //     // transformOrigin
        //     xPercent:350,
        //     scaleX:0.6,
        //     scaleY:0.6,
       
        //  },2)
         home_animal_5.to(".home_animal_05",0,{
            x:0,
            yPercent:-400,
            //scaleX:-1
        }).to('.home_animal_05', 2, {   
            x:0,
            yPercent: 0,
            // delay: 1,
            ease: Bounce.easeOut,
        })
        // .to('.home_animal_05', 5, { 
            
        //     yPercent: -60,
         
        // },)
        // .to('.home_animal_05',5,{
        //     // transformOrigin
        //     xPercent:350,
        //     scaleX:0.6,
        //     scaleY:0.6,
       
        //  },2)
        //  home_animal_2.to(".home_animal_02",0,{
        //     x:0,
        //     yPercent:-400,
        //     //scaleX:-1
        // }).to('.home_animal_02', 2, {   
        //     x:0,
        //     yPercent: 0,
        //     // delay: 1,
        //     ease: Bounce.easeOut,
        // })
        // .to('.home_animal_02', 5, { 
            
        //     yPercent: -60,
         
        // },)
        // .to('.home_animal_02',5,{
        //     // transformOrigin
        //     xPercent:350,
        //     scaleX:0.6,
        //     scaleY:0.6,
       
        //  },2)
  


  

        home_animal.restart();
    //home_animal.restart();
    // home_animal_01=TweenMax.fromTo('.home_animal_01', 5, {y: 0,},{y: anime_height,})
    ;
  
  
}