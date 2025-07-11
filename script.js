let container = document.querySelector(".container");
let show = document.querySelector("#show");
let refresh = document.querySelector("#refresh")
let img = document.querySelector(".flip-card img");
let flipCrd = document.querySelector(".flip-card");
show.addEventListener("click" , () =>{
 let random = Math.floor(Math.random() * 17)
 img.src = position[random]
 gsap.to(flipCrd , {
  width : '100%',
  height : "60%",
  duration : 0.4,
 })
})
refresh.addEventListener("click" , () => {
img.src = "a1.jpg"
 gsap.to(flipCrd , {
  width : '75%',
  height : "60%",
  duration : 0.4,
 })
})
gsap.to(".left h1" , {
 x : -100,
 opacity : 1,
 duration : 0.7,
 delay : 0.5
})
