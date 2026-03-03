//your JS code here. If required.

const textInput= document.getElementById("text");
const delayInput= document.getElementById("delay");
const button = document.getElementById("btn");
const outputDiv= document.getElementById("output");

//function to create delay
function wait(ms) {
    return new Promise((resolve) =>{
        setTimeout(resolve,ms);
    });
}

//async function
async function showMessage() {
    const message= textInput.ariaValueMax;
    const delay=Number(delayInput.value);

    await wait(delay);
    outputDiv.textContent=message;
}

//button click
button.addEventListener("Click", showMessage);