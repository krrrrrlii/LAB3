function calculateEntropy() {
    var inputText = document.getElementById("text").value;
    var entropy = getShannonEntropy(inputText);
    document.getElementById("entropy").innerHTML = "Entropy: " + entropy.toFixed(2);
}

function getShannonEntropy(text) {
    var individualChars = text.split("");
    var charCounts = {};
    var entropy = 0;

    for (var i = 0; i < individualChars.length; i++) {
        var char = individualChars[i];

        if (charCounts[char] === undefined) {
            charCounts[char] = 1;
        } else {
            charCounts[char]++;
        }
    }

    Object.keys(charCounts).forEach(function (char) {
        var frequency = charCounts[char] / individualChars.length;
        entropy -= frequency * (Math.log2(frequency));
    });

    return entropy;
}
