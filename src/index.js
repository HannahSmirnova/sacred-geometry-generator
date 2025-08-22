function generatePractice(event) {
  event.preventDefault();
  alert("Generating Practice");
}
let practiceFormElement = document.querySelector("#practice-generator-form");
practiceFormElement.addEventListener("submit", generatePractice);
