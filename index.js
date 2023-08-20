window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  // all icons from -- https://win98icons.alexmeub.com/
  fetch("links.json").then((r) => r.json()).then((res) => {
    console.log(res);
  })
});