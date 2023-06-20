let id;

async function logJSONData() {
  const response = await fetch("http://127.0.0.1:3000/api/v1/questions");
  const jsonData = await response.json();
  const randomIndex = Math.floor(Math.random() * jsonData.length);
  const randomData = jsonData[randomIndex];
  id = randomData.id;
  const questionContent = document.querySelector(".question-content");
  questionContent.innerHTML = randomData.content;
}
logJSONData();
function disLike() {}
function like() {
  if (!id) {
    console.error("error");
    return;
  }
  fetch(`http://127.0.0.1:3000/api/v1/questions/${id}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
