const button = document.getElementById("btn");

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

button.addEventListener("click", async function () {
  const text = document.getElementById("text").value;
  const delayTime = parseInt(document.getElementById("delay").value);
  const output = document.getElementById("output");

  // Clear previous output
  output.textContent = "";

  // Basic validation
 if (text === "" || delayValue === "" || isNaN(delayTime) || delayTime < 0) {
  output.textContent = "Please enter valid text and delay.";
  return;
  }

  // Wait for the delay using async/await
  await delay(delayTime);

  // Display the message
  output.textContent = text;
});