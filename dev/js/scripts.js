import { gsap } from "gsap";

//elements
/*
.red-box
.blue-box
.green-box
*/

const mainTL = gsap.timeline({delay:1});
const boxColor = gsap.utils.wrap(["red", "blue", "green"]);
const boxX = gsap.utils.wrap([200, 400, 600]);

//gsap.to(".blue-box",{ duration:3, rotation:360, transformOrigin:"center", repeat:-1, ease:"none"});

mainTL.to(".box",{duration:1, backgroundColor:boxColor, ease:"power1.out"}, "box")//x:boxX,

//without keyframes
// .to(".red-box",{duration:0.5, x:200, y:0, ease:"power1.out"})
// .to(".red-box",{duration:0.5, x:200, y:200, ease:"power1.out"})
// .to(".red-box",{duration:0.5, x:0, y:200, ease:"power1.out"})
// .to(".red-box",{duration:0.5, x:0, y:0, ease:"power1.out"})
//with keyframes
//keyframes ARRAY
// .to(".red-box",{keyframes:{
//     x:[0,200,200,0,0],
//     y:[0,0,200,200,0],
//     easeEach:"back.out"
// },
//duration:2})
//keyframes OBJECT
// .to(".red-box",{keyframes:[
//     {x:0, y:0, duration:0.5},
//     {x:200, y:0, duration:0.5},
//     {x:200, y:200, duration:0.5}
// ]})
//keyframes PERCENTs
.to(".red-box",{
    keyframes:{
    "0%":{x:0, y:0},
    "25%":{x:200, y:0},
    "50%":{x:200, y:200},
    "75%":{x:0, y:200},
    "100%":{x:0, y:0}
    },
duration:2})

;
