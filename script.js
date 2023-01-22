let n=document.querySelectorAll(".drum").length
for(let i=0; i<n;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function(){
    let bu=this.innerHTML;
    makesound(bu)
    banimation(bu)
});

}
document.addEventListener("keypress",function(event){
    makesound(event.key)
    banimation(event.key)
})
function makesound(bu)
{
    switch (bu){
        case "w":
            let t1=new Audio("tom-1.mp3");
            t1.play();
            break;
        case "a":
            let t2=new Audio("tom-2.mp3");
            t2.play();
            break;
        case "s":
            let t3=new Audio("tom-3.mp3");
            t3.play();
            break;
        case "d":
            let t4=new Audio("tom-4.mp3");
            t4.play();
            break;
        case "j":
            let sn=new Audio("snare.mp3");
            sn.play();
            break;
        case "k":
            let c=new Audio("crash.mp3");
            c.play();
            break;
        case "l":
            let k=new Audio("kick-bass.mp3");
            k.play();
            break;
        default:
            console.log(bu)
    }
}
function banimation(but)
{
    let act=document.querySelector("."+but)
    act.classList.add("pressed")
    setTimeout(function()
    {
        act.classList.remove("pressed")
    },100)
}