//I have selected all the things which having class drum
//that means all the buttons having class drum
for(let i = 0; i<document.querySelectorAll(".drum").length;i++){
    const btn = document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}
//button click event
function handleclick(){
    //which button pressed that character
    var buttonInnerHTMl = this.innerHTML;
    //according to char we have to play sound so we send it to makeSound
    makeSound(buttonInnerHTMl); 
    buttonAnimation(buttonInnerHTMl);
}
//keypress event
document.addEventListener("keypress",function(event){
    //we send it which key press to makeSound
    makeSound(event.key);
    buttonAnimation(event.key);
})
//a common function to make sound for keypress or click
function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
    break;

    case "s":
         var tom3 = new Audio("sounds/tom-3.mp3")
        tom3.play()
    break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3")
        tom4.play()
    break;

    case "j":
        var snare = new Audio("sounds/snare.mp3")
        snare.play()
    break;
    
    case "k":
        var crash = new Audio("sounds/crash.mp3")
        crash.play()
    break;
    case "l":
        var kick = new Audio("sounds/kick-bass.mp3")
        kick.play()
    break;

    }
}
// Adding little animation by adding css
function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);     

}