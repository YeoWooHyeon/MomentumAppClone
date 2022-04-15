const images = ["bg0", "bg1", "bg2"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImg = document.querySelector("body");

bgImg.className = chosenImage;
