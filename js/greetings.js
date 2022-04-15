const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greetings = document.querySelector("h1.greetings");
const most = document.querySelector(".most");
const date = new Date();
let vtg = "";

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const username = localStorage.getItem(USERNAME_KEY);

function onLogInSubmit(doNotBasicPlay)
{
  const logInInputValue = logInInput.value;

  doNotBasicPlay.preventDefault();

  localStorage.setItem(USERNAME_KEY, logInInputValue);
  logInForm.classList.add(HIDDEN_CLASSNAME);
  most.classList.remove(HIDDEN_CLASSNAME);
  appearGreetings(logInInputValue);
}

function timeGreetings()
{
  if(date.getHours() < 5)
  {
    vtg = "Have a nice day";
  } else if(date.getHours() < 9)
  {
    vtg = "Good Morning";
  } else if(date.getHours() < 17)
  {
    vtg = "Good Afternoon";
  } else if(date.getHours() < 21)
  {
    vtg = "Good Evening";
  } else {
    vtg = "Good night";
  }
}
timeGreetings();

function appearGreetings(customUsername)
{
  greetings.classList.remove("hidden");
  greetings.innerText = `${vtg}, ${customUsername}`;
}

logInForm.addEventListener("submit", onLogInSubmit);

if(username == null)
{
  logInForm.classList.remove(HIDDEN_CLASSNAME);
} else
{
  appearGreetings(username);
  most.classList.remove(HIDDEN_CLASSNAME);
}
