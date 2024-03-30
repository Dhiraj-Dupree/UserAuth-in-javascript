const prompt = require("prompt-sync")();
//similar to the python account creation made
//basically going to follow the same route as my python version

function CreateProfile() {
  let takenUsers = ["user123456", "userAbcdefg", "user6654321"];
  let createOrLogin = prompt(
    "Welcome, create or login to your account with us! (enter 'create' or 'login): "
  ).toLowerCase();

  while (createOrLogin !== "create") {
    console.log("invalid prompt!");
    createOrLogin = prompt(
      "Welcome, create an account with us! (enter 'create'): "
    ).toLowerCase();
  }

  if (createOrLogin === "create") {
    let username = prompt(
      "Enter a username for your new account: "
    ).toLowerCase();
    while (/[^a-zA-Z0-9]/.test(username) || username.length < 8) {
      console.log(
        "Username invalid, only use letters and numbers and make sure its 8+ characters!"
      );
      username = prompt("Enter a username for your new account: ");
    }

    if (takenUsers.includes(username)) {
      console.log("Username taken! try again");
      return;
    }

    console.log("Account created!! Welcome, " + username + "!");
    takenUsers.push(username);
  }
}

function newPassword(username) {
  let usernamesAndPasswords = {
    user123456: "UserPw12345",
    userAbcdefg: "12Password",
    user6654321: "99pass",
  };
  let newUserPw = prompt(
    "Alright, " + username + "! Time to make a password: "
  );

  while (newUserPw.length < 8) {
    console.log("Invalid Password, make it 8+ characters!");
    newUserPw = prompt("Alright,! Time to make a password: ");
  }

  usernamesAndPasswords[username] = newUserPw;

  console.log("Account created successfully");
  return username;
}

let username = CreateProfile();
newPassword(username);
