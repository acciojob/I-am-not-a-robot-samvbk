
const targetImg = document.getElementById("img");
const options = document.querySelectorAll(".options");
const verify = document.getElementById("verify");
const reset = document.getElementById("reset");
const heading = document.getElementById("h");

const imgs = ["img1", "img2", "img3", "img4", "img5"];

let correctImg;
let selectedOption = null;

verify.style.display = "none";
reset.style.display = "none";

function setupCaptcha() {
  const randomIndex = Math.floor(Math.random() * imgs.length);
  correctImg = imgs[randomIndex];

  targetImg.className = correctImg;

  const shuffledImgs = [...imgs];

  for (let i = shuffledImgs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledImgs[i], shuffledImgs[j]] =
      [shuffledImgs[j], shuffledImgs[i]];
  }

  options.forEach((option, index) => {
    option.className = shuffledImgs[index] + " options";
    option.classList.remove("selected");
  });

  selectedOption = null;
  verify.style.display = "none";
  reset.style.display = "none";

  heading.textContent =
    "Please click on the identical tiles to verify that you are not a robot.";
}

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((item) => {
      item.classList.remove("selected");
    });

    option.classList.add("selected");
    selectedOption = option;

    verify.style.display = "inline-block";
    reset.style.display = "inline-block";

    heading.textContent = "Click Verify to check your selection.";
  });
});

verify.addEventListener("click", () => {
  if (!selectedOption) {
    heading.textContent = "Please select an image first.";
    return;
  }

  if (selectedOption.classList.contains(correctImg)) {
    heading.textContent = "Verification successful!";
  } else {
    heading.textContent = "Incorrect image. Please try again.";
  }
});

reset.addEventListener("click", setupCaptcha);

setupCaptcha();
