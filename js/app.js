const userName = document.querySelector("#user");
const password = document.querySelector("#pwd");
const form = document.querySelector("#submit");

const emptySpace = () => {
  if ((userName.value.length = -1) || (password.value.length = -1)) {
    alert("Please complete the form");
  }
};
const trim = () => {
  userName.value.trim();
  console.log(userName.value);
  password.value.trim();
  console.log(password.value);
};

button.addEventListener("submit", (e) => {
  // e.preventDefault();
  userName.value;
  password.value;
  // trim();
  // emptySpace();
});
