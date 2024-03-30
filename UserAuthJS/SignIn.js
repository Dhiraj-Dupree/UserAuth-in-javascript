const prompt = require("prompt-sync")();

function signIn() {
  let takenUsers = ["user123456", "userAbcdefg", "user6654321"];

  let usernamesAndPasswords = {
    user123456: "UserPw12345",
    userAbcdefg: "12Password",
    user6654321: "99pass",
  };

  let login = prompt(
    "Welcome, create or login to your account with us! (enter 'create' or 'login'): "
  ).toLowerCase();

  while (login !== "login" && login !== "create") {
    console.log("Please enter a valid option");
    login = prompt(
      "Welcome, create or login to your account with us! (enter 'create' or 'login'): "
    ).toLowerCase();
  }

  if (login === "login") {
    let activeUser = prompt("Enter your account name: ");
    while (!takenUsers.includes(activeUser)) {
      console.log("Make sure you enter the right account name");
      activeUser = prompt("Enter your account name: ");
    }

    let password = prompt("Enter the password of the account: ");
    while (password !== usernamesAndPasswords[activeUser]) {
      console.log("Incorrect password, please try again");
      password = prompt("Enter the password of the account: ");
    }
    console.log("Login successful. Welcome, " + activeUser + "!");
  }
}
signIn();
