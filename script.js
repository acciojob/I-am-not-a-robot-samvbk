
const targetImg = document.getElementById("img");
const container = document.querySelector(".flex");
const verify = document.getElementById("verify");
const reset = document.getElementById("reset");
const heading = document.getElementById("h");

const imgs = ["img1", "img2", "img3", "img4", "img5"];

let selected = [];
let tileImages = [];

function setupCaptcha() {
  selected = [];
  tileImages = [...imgs];

  const duplicateIndex = Math.floor(Math.random() * imgs.length);
  tileImages.push(imgs[duplicateIndex]);

  for (let i = tileImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tileImages[i], tileImages[j]] = [tileImages[j], tileImages[i]];
  }

  container.innerHTML = "";

  tileImages.forEach((image, index) => {
    const tile = document.createElement("div");
    tile.className = `${image} options`;
    tile.dataset.image = image;
    tile.dataset.index = index;
    container.appendChild(tile);

    tile.addEventListener("click", () => {
      if (selected.length >= 2 || selected.includes(tile)) {
        return;
      }

      selected.push(tile);
      tile.classList.add("selected");

      reset.style.display = "inline-block";
      verify.style.display =
        selected.length === 2 ? "inline-block" : "hidden";
    });
  });

  heading.textContent =
    "Please click on the identical tiles to verify that you are not a robot.";

  verify.style.display = "hidden";
  reset.style.display = "hidden";
}

verify.addEventListener("click", () => {
  if (selected.length !== 2) {
    return;
  }

  if (selected[0].dataset.image === selected[1].dataset.image) {
    heading.textContent = "You are a human. Congratulations!";
  } else {
    heading.textContent =
      "We can't verify you as a human. You selected the non-identical tiles.";
  }

  verify.style.display = "hidden";
});

reset.addEventListener("click", setupCaptcha);

setupCaptcha();
