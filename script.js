let noClickCount = 0; // Counter for tracking "No" button clicks

function showMessage(response) {
  // Text lines to show when "No" is clicked
  const noResponseMessages = [
    "AYOS!",
    "Ay Wag Naman TT",
    "Bruh kinausap ko na kabit mo",
    "Why are you literally avoiding me???!!?!?!?",
    "Di mo na ba ako love? TT"
  ];

  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/iyak.jpg";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Change question text to the current message based on noClickCount
    document.getElementById("question").textContent = noResponseMessages[noClickCount];

    // Optionally hide name message
    document.getElementById("name").style.display = "none";

    // Increment click count, and reset if it exceeds the number of messages
    noClickCount++;
    if (noClickCount >= noResponseMessages.length) {
      noClickCount = 0;  // Reset to loop back through the messages
    }
  }

  if (response === "Yes") {
    // Remove name message and no button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "YAY! See you on the 14th (16th talaga), baby.";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/yehey.jpg";

    // Remove yes button
    document.getElementById("yesButton").remove();
  }
}
