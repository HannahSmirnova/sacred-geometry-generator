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
  practiceElement.innerHTML = "";

  let instructionsInput = document.querySelector(".instructions");
  let apiKey = "60503d6efotf2704dfb74d90d8ce4ea6";

  let prompt = `Generate a spiritual practice involving sacred geometry shapes that aligns with the intention of the user (e.g., emotional healing, focus, creativity) following the entered request ${instructionsInput.value}. Include specific ways to engage with sacred geometry shapes — such as visualizing, drawing, meditating on, or arranging them. Make sure to follow user instructions and bring effective, applicable and doable practice. Format the response with a bold title at the top (use HTML <strong> for that), clearly separated from the rest of the text. Then provide the practice as a paragraph. If the practice includes steps or suggestions, format them as a bullet-point list or numbered list, clearly separated from the paragraph. Ensure the formatting is clean and easy to read. At the end, suggest a crystal that enhances the intended effect of the practice.`;
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
