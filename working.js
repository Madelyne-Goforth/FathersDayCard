const card = document.getElementById("card");

card.addEventListener("click", () => {
  const isOpen = card.classList.toggle("open");

  // Only fire confetti when the card is opening, not closing
  if (isOpen && typeof confetti === "function") {
    // Simple burst from the center-top of the card
    confetti({
      particleCount: 500,
      spread: 80,
      origin: { y: 0.8 }
    });
  }
});