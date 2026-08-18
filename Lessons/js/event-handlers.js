// Select all the buttons
let buttons = document.querySelectorAll(".myButton");
// Use a for loop to add a listener to all the buttons

// for(let i = 0; i < buttons.length; i++){
//     buttons[i].onclick = function(){
//         alert(`Button ${i + 1} has been clciked!`)
//     }
// }
// Can you do the same with a .forEach loop?
// Can try?????
buttons.forEach(function (button, i) {
    //     button.onclick = function(){
    //         alert(`Button ${i} has been clicked!`)
    //     }
    // })
    button.addEventListener("click", function () {
        alert(`Button ${i} was clciked`);
    });
    // button.removeEventListener("click")
});

buttons.forEach(function (button) {
    //     button.onmouseover = function() {
    //         button.computedStyleMap.backgroundColor = "green" ;
    //     }
    // });
    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "green";
    });
    button.addEventListener("mouseout", function(){
        button.style.backgroundColor = "yellow"
    })
});


const myInput = document.getElementById("myInput")
// myInput.onchange = function(){
//     alert("Input value changed!")
// }
myInput.addEventListener("change", function(event){
    const inputValue = event.target.value
    alert(`The input value is ${event.target.value}`)
})

myInput.onkeydown = function(event){
    console.log(event.key)
}
let myWindow = window;

myWindow.onscroll = function(){
    console.log("Window scrrolled")
}