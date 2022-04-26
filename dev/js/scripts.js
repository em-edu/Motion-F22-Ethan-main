import { gsap } from "gsap";


const mainTL = gsap.timeline();



function ballOne(){
    let tl = gsap.timeline();

    tl.to("#ball-1", {duration:1, scale:1})
    ;

    return tl;

    
}



//ballOne();





mainTL.add(ballOne())
;