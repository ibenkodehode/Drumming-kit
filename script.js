const drumElement = document.querySelector("#drums");
const keys = ["a", "s", "d", "f", "g", "h", "j"];
const sounds = [
  "clap.wav",
  "hihat.wav",
  "kick.wav",
  "openhat.wav",
  "ride.wav",
  "snare.wav",
  "tink.wav",
  "tom.wav",
];

for (let i in sounds) {
  let btn = document.createElement("button");
  btn.textContent = "♪";
  btn.setAttribute("src", `./sounds/${sounds[i]}`);
  btn.onclick = () => {
    new Audio(`./sounds/${sounds[i]}`).play();
  };
  window.addEventListener("keydown", (event) => {
    if (event.isComposing || event.key == keys[i]) {
      new Audio(`./sounds/${sounds[i]}`).play();
    } else null;
  });
  drumElement.append(btn);
}
