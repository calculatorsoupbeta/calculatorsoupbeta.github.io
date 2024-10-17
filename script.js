const input = document.getElementById("searchInput");
const games = document.querySelectorAll("#games img");

input.addEventListener("input", () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach((game) => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  });
});

document.addEventListener("resize",function(){
  console.log("reloaded!")
})

// script.js
document.addEventListener("DOMContentLoaded", function () {
  var passwordBackground = document.getElementById("passwordMain");
  var passwordInput = document.getElementById("passwordInput");
  var passwordSubmit = document.getElementById("passwordSubmitButton");

  var tosPopup = document.getElementById("tosPopup");
  var closeBtn = document.querySelector(".close-btn");
  var acceptBtn = document.getElementById("acceptBtn");

  const today = new Date();
  const dayOfMonth = today.getDate();

  passwordBackground.style.display = "flex";  

  passwordSubmit.onclick = function () {
    if (passwordInput.value == "Testing Password" + dayOfMonth.toString())
    {
      passwordBackground.style.opacity = '0';
  
      passwordInput.value = "";

      // Optionally, after the fade-out completes, hide the element
      setTimeout(() => {
        passwordBackground.style.display = 'none';
      }, 500); // Match the transition duration (0.5s)
    }

    
  };

  // Show the popup when the page loads
  tosPopup.style.display = "flex";

  // Close the popup when the 'X' is clicked
  closeBtn.onclick = function () {
    tosPopup.style.display = "none";
  };

  // Close the popup when 'I Accept' is clicked
  acceptBtn.onclick = function () {
    tosPopup.style.display = "none";
  };

  // Close the popup if the user clicks outside the popup content
  window.onclick = function (event) {
    if (event.target == tosPopup) {
      tosPopup.style.display = "none";
    }
  };
});

messages = [
  "the best games website out there",
  "welcome back",
  "awww, the skrunkly :3",
  "english or spanish?",
  "play minecraft",
  "this is a random message!",
  "hi",
  "welcome",
  "GET OUT!",
  "CAR CRASH, GLASS SHATTERING, GOOD LORD!!",
  "You are SOOOOO, LAAAAAAZYYYYY!",
  "i can add games but i dont know them all, REQUEST GAMES YOU WANT!",
  "helo",
  ":3",
  "made for a 6th grade project",
  "sense 24'!",
  "TEXAS ON TOP!",
  "originated in TEXAS!",
  "DidgeCot Games Official!",
  "no, fortnite is NOT ABLE TO BE ADDED!",
  "no, roblox is NOT ABLE TO BE ADDED!",
  "not liable",
  "Lawler Middle ON TOP!",
  "war thunder",
  '"Welcome! Got some things you might find useful on your endeavour. For a price, obviously"',
  "alright, who lost their dog?",
  "dont use in school. IM SERIOUS",
  "*uses humor*",
  "lard",
  "skins",
  "Do you know how RISKY it is for me to GET THIS for you!? So ungrateful!",
  "updates each weekend",
];

randomMessage();

function randomMessage() {
  document.getElementById("randMessage").innerHTML =
    messages[Math.floor(Math.random() * messages.length)];
}
