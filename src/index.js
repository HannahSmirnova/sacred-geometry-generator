function displayPractice(response) {
  const practiceElement = document.querySelector(".practice");

  new Typewriter(practiceElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

function generatePractice(event) {
  event.preventDefault();

  const practiceElement = document.querySelector(".practice");
  practiceElement.innerHTML = "<em>Generating your sacred practice...</em>";

  let instructionsInput = document.querySelector(".instructions");
  let apiKey = "60503d6efotf2704dfb74d90d8ce4ea6";

  let prompt = `Generate a spiritual practice involving sacred geometry shapes that aligns with the intention of the user (e.g., emotional healing, focus, creativity). The user's intention is: "${instructionsInput.value}".

Your response must follow these formatting rules:

1. Begin with a bold title using HTML <strong> tags. The title must be clearly separated from the rest of the content.
2. Provide a short introductory paragraph explaining the purpose of the practice.
3. If the practice includes steps or suggestions, format them as a clearly separated bullet-point list or numbered list. Each item must be spaced apart and easy to read — do not combine all steps into a single paragraph.
4. Include specific ways to engage with sacred geometry shapes, such as visualizing, drawing, meditating on, or arranging them.
5. Ensure the formatting is clean, readable, and visually structured — avoid dense blocks of text.
6. At the end, suggest a crystal that enhances the intended effect of the practice.

Make sure the practice is effective, applicable, and doable.
`;

  let context =
    "You are a master of spiritual practices and know everything about sacred geometry. You are pleased to share your knowledge and help people balance their lives.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Practice");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPractice);
}

const practiceFormElement = document.querySelector("#practice-generator-form");
practiceFormElement.addEventListener("submit", generatePractice);
