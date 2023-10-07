const calculateEntropy = () => {
const inputText = document.getElementById("text").value;
const entropy = getShannonEntropy(inputText);
document.getElementById("entropy").innerHTML = "Entropy: " + entropy.toFixed(2);
}

const getShannonEntropy = (text) => {
const individualChars = text.split("");
const charCounts = {};
let entropy = 0;

for (let i = 0; i < individualChars.length; i++) {
    const char = individualChars[i];

    if (charCounts[char] === undefined) {
        charCounts[char] = 1;
    } else {
        charCounts[char]++;
    }
}

Object.keys(charCounts).forEach((char) => {
    const frequency = charCounts[char] / individualChars.length;
    entropy -= frequency * (Math.log2(frequency));
});

return entropy;
}
