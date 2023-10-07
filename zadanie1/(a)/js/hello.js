const calculateOccurrences = () => {
    let word = document.getElementById("word-input").value;
    let count = parseInt(document.getElementById("count-input").value);
    let totalOccurrences = 0;

    for (let i = 0; i < count; i++) {
        let string = document.getElementById("string-input-" + i).value;
        let occurrences = (string.match(new RegExp(word, "g")) || ).length;
        totalOccurrences += occurrences;
    }

    document.getElementById("output-div").innerHTML = "Вывод: " + totalOccurrences;
}


document.getElementById("count-input").addEventListener("change", () => {
    let count = parseInt(this.value);

    let div = document.getElementById("strings-div");
    div.innerHTML = "";

    for (let i = 0; i < count; i++) {
        let input = document.createElement("input");
        input.id = "string-input-" + i;
        input.type = "text";
        input.placeholder = "Строка " + (i + 1);

        div.appendChild(input);
    }
});
