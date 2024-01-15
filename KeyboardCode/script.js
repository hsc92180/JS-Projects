const statement = document.getElementById("statement");
const KEY = document.getElementById("key");
const KEYCODE = document.getElementById("keycode");

let keysPressed = {};
document.addEventListener("keydown", (e) => {
  keysPressed[e.key] = true;
  statement.innerHTML = "You Pressed &nbsp;";
  if (keysPressed["Control"] && e.key == "z") {
    // alert(event.key);
    document.getElementById("audio").play();

    KEY.innerHTML = `Control + z`;
    KEYCODE.innerText = "🔊";
    return;
  } else if (keysPressed["Control"] && e.key == "c") {
    document.getElementById("audio1").play();

    KEY.innerHTML = `Control + c`;
    KEYCODE.innerText = "🔊";
    return;
  } else if (keysPressed["Control"] && e.key == "x") {
    document.getElementById("audio2").play();

    KEY.innerHTML = `Control + x`;
    KEYCODE.innerText = "🔊";
    return;
  } else if (keysPressed["Control"] && e.key == "v") {
    document.getElementById("audio3").play();

    KEY.innerHTML = `Control + v`;
    KEYCODE.innerText = "🔊";
    return;
  } else if (keysPressed["Control"] && e.key == "d") {
    document.getElementById("audio4").play();

    KEY.innerHTML = `Control + d`;
    KEYCODE.innerText = "🔊";
    return;
  }

  const keyCode = e.keyCode || e.which; //handle different browser
  let key = e.key;

  if (key == " ") {
    KEY.innerHTML = "Space";
  } else {
    KEY.innerHTML = key;
  }

  KEYCODE.innerText = e.keyCode;
});


document.addEventListener("keyup", (event) => {
  delete keysPressed[event.key];
});