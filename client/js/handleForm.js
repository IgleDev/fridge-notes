const form = document.getElementById("form");

const formUrl = `${window.location.protocol}//${window.location.hostname}:8000/`;

form.action = formUrl + "login";

const loginButton = document.getElementById("login");
const registerButton = document.getElementById("register");

loginButton.onclick = () => {
  form.action = formUrl + "login";
  form.submit();
};

registerButton.onclick = () => {
  form.action = formUrl + "register";
  form.submit();
};
