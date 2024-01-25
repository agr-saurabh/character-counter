const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let userChar = 0;

const updateCounter = () => {
    userChar = charVal.value.length;
    totalCount.innerText = userChar;
    remainingCount.innerText = 150-userChar;
}

charVal.addEventListener("keyup", () => updateCounter());

// copy text
const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0, 9999); // for mobile version
    navigator.clipboard.writeText(charVal.value); // this will show msg "copied to clipboard"
}