// Theme toggle function
function changeTheme() {
    const body = document.body;
    if (body.style.backgroundColor === "black") {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    } else {
      body.style.backgroundColor = "black";
      body.style.color = "white";
    }
  }
  
  // Typewriter effect
  const typewriterText = `Hello! I'm Dikshya Pandey. An AI student with a curious mind and a radiant heart. Beauty, brains, and passion—I am here to make a difference.`;
  const target = document.getElementById("typewriter-text");
  let index = 0;
  
  function typeWriter() {
    if (index < typewriterText.length) {
      target.innerHTML += typewriterText.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }
  
  window.onload = typeWriter;
  