// Variáveis de criação
let parentSectionMainContent = document.getElementById("mainContent");
let parentSectionInputText = document.getElementById("sectionInputText");
let parentSectionMemeImageContainer = document.getElementById("meme-image-container");
let parentSectionBtnBorders = document.getElementById("btnBorders");
let parentSectionPreImgs = document.getElementById("preImgs");
// Funções de criação
function createInputText() {
    let child = document.createElement("input");
    child.id = "text-input";
    child.className = "input";
    child.maxLength = "60";
    parentSectionInputText.appendChild(child);
}
createInputText();
function createElementTextInsideImage() {
    let child = document.createElement("div");
    child.id = "meme-text";
    child.style.textAlign = "center";
    child.style.fontSize = "30px";
    parentSectionMemeImageContainer.appendChild(child);
    parentSectionMemeImageContainer.style.border = "1px solid black"
}
createElementTextInsideImage();
function createMemeImg() {
    let child = document.createElement("img");
    child.id = "meme-image";
    child.alt = "Image preview..."
    parentSectionMemeImageContainer.appendChild(child);
}
createMemeImg();
function createBtnChangeBorderFire() {
    let child = document.createElement("button");
    child.id = "fire";
    child.innerText = "FIRE!";
    parentSectionBtnBorders.appendChild(child);
}
createBtnChangeBorderFire();
function createBtnChangeBorderWater() {
    let child = document.createElement("button");
    child.id = "water";
    child.innerText = "WATER!";
    parentSectionBtnBorders.appendChild(child);
}
createBtnChangeBorderWater();
function createBtnChangeBorderEarth() {
    let child = document.createElement("button");
    child.id = "earth";
    child.innerText = "EARTH!";
    parentSectionBtnBorders.appendChild(child);
}
createBtnChangeBorderEarth();
function createPreviousImages() {
    for(let i = 0; i < 4; i += 1){
        let child = document.createElement("img");
        parentSectionPreImgs.appendChild(child);
    }
}
createPreviousImages();
function setPreImgs() {
    let imgs = document.querySelectorAll("#preImgs img");
    imgs[0].src = "imgs/meme1.png";
    imgs[1].src = "imgs/meme2.png";
    imgs[2].src = "imgs/meme3.png";
    imgs[3].src = "imgs/meme4.png";
    imgs[0].id = "meme-1";
    imgs[1].id = "meme-2";
    imgs[2].id = "meme-3";
    imgs[3].id = "meme-4";
    for(let i = 0; i < imgs.length; i += 1){
        imgs[i].addEventListener("click", putPreviousImgInContainer)
    }
}
setPreImgs();
// Variáveis de evento
let inputText = document.getElementById("text-input");
let inputFile = document.getElementById("meme-insert");
let imgFile = document.getElementById("meme-image");
let btnsBorder = document.querySelectorAll("#btnBorders button");
// Funções de evento
for(let i = 0; i < 3; i += 1){
    btnsBorder[i].addEventListener("click", changeBorderMeme);
}
inputText.addEventListener("keyup", keyUpInput);
function keyUpInput() {
    let child = document.getElementById("meme-text");
    child.innerText = inputText.value;
}
inputFile.addEventListener("change", putFileOnImg);
inputFile.addEventListener("click", setBorderImg)
function putFileOnImg() {
    // Referência desta função: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
    const [file] = inputFile.files;
    if (file) {
        imgFile.src = URL.createObjectURL(file);
    }
}
function setBorderImg() {
    let img = document.getElementById("meme-image");
    img.style.border = "border: 5px solid black";
}
function changeBorderMeme(event) {
    if(event.target.innerText === "FIRE!"){
        if(parentSectionMemeImageContainer.style.border === "3px dashed rgb(255, 0, 0)"){
            parentSectionMemeImageContainer.style.border = "1px solid black";
        }
        else{
            parentSectionMemeImageContainer.style.border = "3px dashed rgb(255, 0, 0)";
        }
    }
    else if(event.target.innerText === "WATER!"){
        if(parentSectionMemeImageContainer.style.border === "5px double rgb(0, 0, 255)"){
            parentSectionMemeImageContainer.style.border = "1px solid black";
        }
        else{
            parentSectionMemeImageContainer.style.border = "5px double rgb(0, 0, 255)";
        }
    }
    else if(event.target.innerText === "EARTH!"){
        if(parentSectionMemeImageContainer.style.border === "6px groove rgb(0, 128, 0)"){
            parentSectionMemeImageContainer.style.border = "1px solid black";
        }
        else{
            parentSectionMemeImageContainer.style.border = "6px groove rgb(0, 128, 0)";
        }
    }
}
function putPreviousImgInContainer(event) {
    if(event.target.id === "meme-1"){
        imgFile.src = "imgs/meme1.png";
    }
    else if(event.target.id === "meme-2"){
        imgFile.src = "imgs/meme2.png";
    }
    else if(event.target.id === "meme-3"){
        imgFile.src = "imgs/meme3.png";
    }
    else if(event.target.id === "meme-4"){
        imgFile.src = "imgs/meme4.png";
    }
}
// Onload
// window.onload = function() {
    
// }