let a;
document.querySelector(".fa-solid").addEventListener("click", function() {
    changeColor();
})

let body = document.querySelector("body");
let light = document.querySelector(".indicator");
let val = light.innerText;
// console.log(val)

function changeColor() {
    if(a==1) {
        light.style.backgroundColor = "green";
        light.innerText = " ";
        document.querySelector(".fa-solid").style.color = "green";
        return a=0;
    }
    else {
        light.style.backgroundColor = "red";
        light.innerText = "";
        document.querySelector(".fa-solid").style.color = "red";
        return a=1;
    }
}

let sliderValue = document.querySelector("span");
let inputSlider = document.querySelector("input");

inputSlider.oninput = (()=> {
    let value = inputSlider.value;
    sliderValue.textContent = value;
    sliderValue.style.left = (value) + "%";
    sliderValue.classList.add("show");
});

inputSlider.onblur = (()=> {
    sliderValue.classList.remove("show");
});

let lyrics = document.querySelector("#lyrics");
lyrics.style.padding = "10px 10px";
let song = document.querySelector("#song");
let artist = document.querySelector("#artist");

let x = document.querySelectorAll(".likeThis");
for(let i=0;i<x.length;i++) {
    x[i].addEventListener("click", sng1);
};
function sng1() {
    song.innerText = "Love Me Like You Do";
    artist.innerText = "Song by Song by Ellie Goulding";
    lyrics.textContent = "You're the light, you're the night You're the color of my blood You're the cure, you're the pain You're the only thing I wanna touch Never knew that it could mean so much, so much...";
};

let y = document.querySelectorAll(".demon");
for(let i=0;i<y.length;i++) {
    y[i].addEventListener("click", sng2);
};
function sng2() {
    song.innerText = "Demons";
    artist.innerText = "Song by Imagine Dragons";
    lyrics.textContent = "I wanna hide the truth, I wanna shelter you But with the beast inside There's nowhere we can hide No matter what we breed We still are made of greed This is my kingdom comeThis is my kingdom come...";
};

let z = document.querySelectorAll(".baby");
for(let i=0;i<z.length;i++) {
    z[i].addEventListener("click", sng3);
};
function sng3() {
    song.innerText = "Baby";
    artist.innerText = "Song by Justin Bieber";
    lyrics.textContent = "Are we an item? (Yo) girl, quit playin' (uh-huh) We're just friends (Uh-huh) Said, Theres another (yo), an looked right in my eyes (uh-huh) My first love broke my heart for the first time, and I was like (yo, uh-huh)...";
};

let b = document.querySelectorAll(".thunder");
for(let i=0;i<b.length;i++) {
    b[i].addEventListener("click", sng4);
};
function sng4() {
    song.innerText = "Thunder";
    artist.innerText = "Song by Imagine Dragons";
    lyrics.textContent = "Just a young gun with a quick fuse I was uptight, wanna let loose I was dreaming of bigger things and Wanna leave my own life behind Not a Yes, sir, not a follower Fit the box, fit the mold, have a seat In the foyer...";
};

let c = document.querySelectorAll(".rickrolled");
for(let i=0;i<c.length;i++) {
    c[i].addEventListener("click", sng5);
};
function sng5() {
    song.innerText = "Never Gonna Give You Up";
    artist.innerText = "Song by Rick Astley";
    lyrics.textContent = "Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you...";
};

