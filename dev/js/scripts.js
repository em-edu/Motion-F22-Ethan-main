import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
//register all plugins
gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline({id:"mainTL"});


function ballOne(){
    let tl = gsap.timeline();

    tl.to("#ball-1", {duration:1, scale:3})
    .to("#ball-1", {duration:1, y:"-=200"})
    ;

    return tl;

    
}

function ballTwo(){
    let tl = gsap.timeline();

    tl.to("#ball-2", {duration:1, scale:6})
    ;

    return tl;

    
}



//ballOne();




mainTL.add(ballOne(),"somelabel")
.add(ballTwo(),"somelabel")
;


GSDevTools.create();