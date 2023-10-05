function calculateAverageTemperature() {
    const input = document.getElementById("input").value;

    const measurements = input.split("@")


    const temperatures = {};

    measurements.forEach(measurement => {
        const [id, temp] = measurement.split("@");

        if (!temperatures[id]) {
            temperatures[id] = {
                sum: 0,
                count: 0
            };
        }

        temperatures[id].sum += parseInt(temp);
        temperatures[id].count++;
    });


    const averageTemperatures = [];

    for (let id in temperatures) {
        const average = (temperatures[id].sum / temperatures[id].count).toFixed(1);
        averageTemperatures.push({
            id,
            average
        });
    }

    const sortBy = document.getElementById("sort-by").value;

    if (sortBy === "id") {
        averageTemperatures.sort((a, b) => a.id - b.id);
    } else if (sortBy === "temp") {
        averageTemperatures.sort((a, b) => a.average - b.average);
    }

    const output = document.getElementById("output");
    output.innerHTML = "";

    averageTemperatures.forEach(entry => {
        const div = document.createElement("div");
        div.innerText = `${entry.id} ${entry.average}`;
        output.appendChild(div);
    });
}
