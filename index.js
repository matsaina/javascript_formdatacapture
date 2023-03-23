// manipulate the dom
let body = document.querySelector("body");
body.style.backgroundColor = "blue";

function changeTopic(topic) {
  let h2 = document.querySelector("h2");
  h2.id = "mine'";
  h2.textContent = topic;
  h2.style.color = "red";
}
changeTopic("Restaurant");

function collectData() {
  //collect form data
  let form = document.querySelector("#record");

  form.addEventListener("submit", () => {
    // logic

    event.preventDefault();

    let formData = {
      fullName: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(formData);
  });
}
collectData();

function displayFeedback() {
  let feedbackforn = document.querySelector(".feedbackForm");

  feedbackforn.addEventListener("submit", () => {
    event.preventDefault();
    let feedbackInput = event.target.feedback.value;
    let p = document.createElement("p");
    p.textContent = feedbackInput;
    let section = document.querySelector("section");
    section.appendChild(p);
  });
  feedbackforn.reset();
}
displayFeedback();
