const buttons = document.querySelectorAll(".rating-buttons button");
const submit = document.getElementById("submit");
const selectionMessage = document.getElementById("selection-message");
const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
let selected = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        selected = e.target.textContent;
        e.target.style.backgroundColor = "hsl(25, 97%, 53%)";
    });
})

submit.addEventListener('click', (e) => {
    if(selected === "") {
        addError();
        setTimeout (() => {
            removeError()
        }, 3000);

        return;
    }
    
    selectionMessage.textContent = "You selected " + selected + " out of 5";
    box1.classList.add("hide-display");
    box2.classList.remove("hide-display");
});

function addError() {
    alert("Please select a rating before hitting submit");
}

box1.classList.remove("hide-display");
box2.classList.add("hide-display");