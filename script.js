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
		if (option.classList.contains("selected")) {
			option.classList.remove("selected");
			selectedCnt --;
		}
		else{
			option.classList.add("selected");
			selectedCnt++;
		}

		if (selectedCnt === 1) {
			verify.style.display = "block";
			reset.style.display = "block";
		} else {
			verify.style.display = "none";
			reset.style.display = "none";
		}
	});
});

reset.addEventListener("click",() =>{
	options.forEach((option) => {
		option.classList.remove("selected");
	});

	selectedCnt = 0;

	verify.style.display = "none";
	reset.style.display = "none";
});