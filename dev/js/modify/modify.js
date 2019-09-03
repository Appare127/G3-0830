
let parts_icon = document.getElementsByClassName("parts_icon");


function change_parts(e){
    console.log(e.target);
    let item = e.target.src;
    console.log(item);
}


function change0(){
    document.querySelector(".pic_box .head_pic").src = "img/modify/p_head_giraffe.png";

}
function change1(){
    document.querySelector(".pic_box .head_pic").src = "img/modify/p_head_elephant.png";

}
function change2(){
    document.querySelector(".pic_box .head_pic").src = "img/modify/p_head_lion.png";

}
function change3(){
    document.querySelector(".pic_box .head_pic").src = "img/modify/p_head_tiger.png";

}
function change4(){
    document.querySelector(".pic_box .body_pic").src = "img/modify/p_body_giraffe.png";

}
function change5(){
    document.querySelector(".pic_box .body_pic").src = "img/modify/p_body_elephant.png";

}
function change6(){
    document.querySelector(".pic_box .body_pic").src = "img/modify/p_body_zebar.png";

}
function change7(){
    document.querySelector(".pic_box .body_pic").src = "img/modify/p_body-tiger.png";

}
function change8(){
    document.querySelector(".pic_box .foot_pic").src = "img/modify/p_foot_giraffe.png";

}
function change9(){
    document.querySelector(".pic_box .foot_pic").src = "img/modify/p_foot_elephant.png";

}
function change10(){
    document.querySelector(".pic_box .foot_pic").src = "img/modify/p_foot_bird.png";

}
function change11(){
    document.querySelector(".pic_box .foot_pic").src = "img/modify/p_foot_cmel.png";

}
function change12(){
    document.querySelector(".pic_box .parts_pic").src = "img/modify/p_tail_giraffe.png";

}
function change13(){
    document.querySelector(".pic_box .parts_pic").src = "img/modify/p_tail_elephant.png";

}
function change14(){
    document.querySelector(".pic_box .parts_pic").src = "img/modify/p_tail_skunk.png";

}
function change15(){
    document.querySelector(".pic_box .parts_pic").src = "img/modify/p_tail-tiger.png";

}























function init(){
    console.log("ok1");

    let picon = document.getElementsByClassName("picon");

    picon[0].addEventListener('click',change0);
    picon[1].addEventListener('click',change1);
    picon[2].addEventListener('click',change2);
    picon[3].addEventListener('click',change3);
    picon[4].addEventListener('click',change4);
    picon[5].addEventListener('click',change5);
    picon[6].addEventListener('click',change6);
    picon[7].addEventListener('click',change7);
    picon[8].addEventListener('click',change8);
    picon[9].addEventListener('click',change9);
    picon[10].addEventListener('click',change10);
    picon[11].addEventListener('click',change11);
    picon[12].addEventListener('click',change12);
    picon[13].addEventListener('click',change13);
    picon[14].addEventListener('click',change14);
    picon[15].addEventListener('click',change15);

}



window.addEventListener("load",init,false);