//your JS code here. If required.
// script.js

function delayMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

async function updateText() {
  const outputElement = document.getElementById('output');
  
  try {
    const message = await delayMessage();
    outputElement.textContent = message;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to update the text after the promise resolves
updateText();
