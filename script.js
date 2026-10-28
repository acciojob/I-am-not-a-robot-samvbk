//your code here
const targetImg = document.getElementById("img");
const imgs = ["img1","img2","img3","img4","img5"];
const randomIndex = Math.floor(Math.random() * imgs.length);
const correctImg = imgs[randomIndex];

const option = document.querySelectorAll("options");
const verify = document.getElementById("verify");
const reset = document.getElementById("reset");

let selectedCnt = 0;

options.forEach((option)=>{
	option.addEventListener("click",() => {
		if (option.classList.contains) {
			
		}
	})
})