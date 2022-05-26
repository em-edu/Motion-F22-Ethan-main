import { gsap } from "gsap";

//elements
/*
.red-box
.blue-box
.green-box
*/

const mainTL = gsap.timeline({delay:1});

//gsap.to(".blue-box",{ duration:3, rotation:360, transformOrigin:"center", repeat:-1, ease:"none"});

mainTL.to(".red-box",{duration:1, x:500, ease:"power1.out"}, "box")
.to(".blue-box",{duration:1, x:500, ease:"power3.out"}, "box")
.to(".green-box",{duration:1, x:500, ease:"back.inOut"}, "box")


;
