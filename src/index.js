function displayPractice(response) {
  const practiceElement = document.querySelector("#practice");
  new Typewriter(practiceElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

function generatePractice(event) {
  event.preventDefault();

  const practiceElement = document.querySelector("#practice");
  practiceElement.classList.remove("hidden");
  practiceElement.innerHTML = "<em>Generating your sacred practice...</em>";

  const instructionsInput = document.getElementById("instructions");
  const userIntent = instructionsInput.value.trim();
  const apiKey = "60503d6efotf2704dfb74d90d8ce4ea6";
  const context =
    "You are a master of spiritual practices and know everything about sacred geometry. You are pleased to share your knowledge and help people balance their lives.";
  const prompt = `Generate a spiritual practice involving sacred geometry shapes that aligns with the intention of the user (e.g., emotional healing, focus, creativity). The user's intention is: "${userIntent}". Your response must follow these formatting rules: 1. Begin with a bold title using HTML <strong> <h2> tags, - the title must be at the top and underlined. 2. Provide a short introductory paragraph explaining the purpose of the practice using HTML <p> tags. 3. Format steps as a clearly separated numbered list using HTML <li> tags with text-align:left styling. 4. Include specific sacred geometry shapes and the ways of engagement with them such as visualizing, drawing, meditating on, or arranging them - this must be a separate paragraph, so use HTML <p> tags. 5. Ensure the formatting is clean, readable, and visually structured — avoid dense blocks of text. 6. At the end, suggest a crystal that enhances the intended effect of the practice by using <footer> tags. Make sure the practice is effective, applicable, and doable.`;

  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPractice);
}

document
  .getElementById("practice-generator-form")
  .addEventListener("submit", generatePractice);
