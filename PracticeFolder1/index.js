const gp = document.querySelector(".grandparent");
const pa = document.querySelector(".parent");
const ch = document.querySelector(".child");
gp.addEventListener("click", e => {
  e.target.classList.add("turn");
  setTimeout(function(){
    e.target.classList.remove("turn");
  },100);
  console.log(e);
})

pa.addEventListener("click", e => {
  changeColour(e.target,'cyan')
  setTimeout(()=>{
    changeColour(e.target,'yellow');
  },100)
})

ch.addEventListener("click", e => {
  changeColour(e.target,'green')
  setTimeout(()=>{
    changeColour(e.target,'blue');
  },100)
})

function changeColour(className,color){
  className.style.backgroundColor = color;
}
