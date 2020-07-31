var numsquares=6;
var colors= generatingrandomcolors(numsquares);
var squares = document.querySelectorAll(".square")
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay")
var messagedisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton= document.querySelector("#reset")
var easybutton = document.getElementById("Easybtn")
var hardbutton = document.getElementById("Hardbtn")


easybutton.addEventListener("click",function(){
    easybutton.classList.add("selected")
    hardbutton.classList.remove("selected")
    numsquares=3;
    colors= generatingrandomcolors(numsquares);
  pickedcolor= pickcolor();
  colordisplay.textContent = pickedcolor;
  for(var i=0; i<squares.length; i++)
  {
      if(colors[i])
      {
          squares[i].style.backgroundColor = colors[i];
      }
      else
      {
          squares[i].style.display = "none"
      }
  }
})
hardbutton.addEventListener("click",function(){
    easybutton.classList.remove("selected")
    hardbutton.classList.add("selected")
    numsquares=6;
    colors= generatingrandomcolors(numsquares);
    pickedcolor= pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i=0; i<squares.length; i++)
    {  squares[i].style.backgroundColor = colors[i];
       squares[i].style.display = "block"
     }
})

resetButton.addEventListener("click",function(){
    
    colors= generatingrandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent= pickedcolor;
    for(var i=0; i<squares.length ;i++)
{
    squares[i].style.backgroundColor = colors[i]
}
h1.style.backgroundColor="steelblue"
messagedisplay.textContent="";
resetButton.textContent="New Colors"
})
colordisplay.textContent = pickedcolor
for(var i=0; i<squares.length ;i++)
{
    squares[i].style.backgroundColor = colors[i]

    squares[i].addEventListener("click", function(){
        var clickedcolor = this.style.backgroundColor
        if(clickedcolor===pickedcolor)
        {
            messagedisplay.textContent = "Correct"
            resetButton.textContent="Play Again?"
            changecolor(clickedcolor)
            h1.style.backgroundColor=clickedcolor
        }
        else{
           this.style.backgroundColor="#232323"
           messagedisplay.textContent = "try again";
        }
    })

}
function changecolor(color)
{
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor= color;
    }
}
function pickcolor(){
    var random = Math.floor(Math.random()*colors.length)
    return colors[random];
}
function generatingrandomcolors(num){
    var arr= [];
  for(var i=0; i<num; i++)
  {
    arr.push(randomcolors())
  }
  return arr;
}
function randomcolors(){
   var r= Math.floor(Math.random() * 256)
   var g= Math.floor(Math.random() * 256)
   var b= Math.floor(Math.random() * 256)
   return "rgb(" + r +", "+g+", "+ b +")"
}