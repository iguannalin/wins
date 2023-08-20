window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  let links;

  function reset() {
    container.innerHTML = "";
    for (let i = 0; i < 12; i++) {
      const button = document.createElement("button");
      const img = document.createElement("img");
      img.src = links[getRandomInt(0, links.length)];
      button.appendChild(img);
      button.onclick = () => {audio.play(); reset;}
      container.appendChild(button);
    }
  }

  let audio = new Audio("msn-sound_1.mp3");
  // all icons from -- https://win98icons.alexmeub.com/
  fetch("links.json").then((r) => r.json()).then((res) => {
    links = res;
    audio.addEventListener("canplaythrough", (event) => {
      /* the audio is now playable; play it if permissions allow */
      reset();
    });
  })
});