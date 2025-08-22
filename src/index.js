function generatePractice(event) {
  event.preventDefault();

  const practiceElement = document.querySelector(".practice");
  practiceElement.innerHTML = "";

  new Typewriter(practiceElement, {
    strings: [
      "Chakra balancing includes breathwork and intention.",
      "Focus on grounding through sacred geometry visualization.",
      "Align your energy with the tetrahedron's elemental stability.",
    ],
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

const practiceFormElement = document.querySelector("#practice-generator-form");
practiceFormElement.addEventListener("submit", generatePractice);
