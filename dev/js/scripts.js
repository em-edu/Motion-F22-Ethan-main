import { gsap } from "gsap";


const mainTL = gsap.timeline();
//Percent
let PERC = {num:0};
let PERC_num = document.querySelector("#percentage_txt tspan");



function setStage(){
    let tl = gsap.timeline();

    tl.set("#titletop",{x:"-=175", alpha:0})
    .set("#titlebottom",{x:"+=175", alpha:0})

    ;

    return tl;
}
//CLIPPATH
function showTitle(){
    let tl = gsap.timeline({onComplete:showBolts});

    tl.to("#titletop",{duration:0.5, x:"+=175", alpha:1, ease:"back.out"},0)
    .to("#titlebottom",{duration:0.5, x:"-=175", alpha:1, ease:"back.out"},0)

    ;

    return tl;
}

function showBolts(){

    gsap.to(".bolt", {duration:3, y:"-=255", repeat:-1, stagger:0.6});

}

function countUpNumbers(){
    let tl = gsap.timeline();

    tl.to(PERC,{duration:4, num:"+=39", roundProps:"num", onUpdate:percentHandler, ease:"expo.out"})

    ;

    return tl;
}

function percentHandler(){

        //console.log("percentHandler ran");
        PERC_num.textContent = PERC.num;

}



mainTL.add(setStage())
.add(showTitle())
.add(countUpNumbers())

;