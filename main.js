var select = document.querySelector("#direction");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var changebg = document.querySelector("#changebg");
var scriptpara = document.querySelector("#scriptpara");
var body = document.body;
var randomgb = document.querySelector("#randombg");


function changeBackground() {
    body.style.background = "linear-gradient(to " + select.value + ", " + color1.value + ", " + color2.value + ")";
    body.style.backgroundSize="cover";
    body.style.backgroundRepeat="no-repeat";
    body.style.backgroundAttachment="fixed";
    scriptpara.textContent = "background-color: " + "linear-gradient(to " + select.value + ", " + color1.value + ", " + color2.value + ");";
    //scriptpara.textContent=body.style.background + ";";
}


select.addEventListener("change", changeBackground);
color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
randomgb.addEventListener("click", function(){
    var randc1= "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});;
    var randc2= "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});;
    color1.value=randc1;
    color2.value=randc2;
    changeBackground();
})