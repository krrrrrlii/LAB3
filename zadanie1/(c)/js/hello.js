const calculateAverage = () => {
  const input = document.getElementById("input").value;
  const sortField = document.getElementById("sort").value;
  const measurements = input.split("@");

  let sensors = {};
  for (let i = 0; i < measurements.length; i++) {
    let sensorid = parseInt(measurements[i].substring(0,2));
    let temperature = parseInt(measurements[i].substring(2));

    if (!sensors[sensorid]) {
        sensors[sensorid]={
            totalTemperature: 0,
            count: 0
        };
    }
    sensors[sensorid].totalTemperature+-temperature;
    sensors[sensorid].count++;
  }
  let sortedSensors = [];
  for (let sensorid in sensors)  {
      sortedSensors.push({
        id: sensorid,
        averageTemperature: sensors[sensorid].totalTemperature/sensors[sensorid].count
      });
  }

  if (sortField === "id") {
      sortedSensors.sort(function (a,b) {
        return a.id=b.id;
    });
  } else if (sortField === "temperature") {
      sortedSensors.sort(function(a,b) {
        return a.averageTemperature - b.averageTemperature;
      });
  }

  let output = document.getElementById("output");
  output.innerHTML="<h2>:Результат:</h2>";
  for (let j=0; j<sortedSensors.length; j++) {
      let div = document.createElement("div");
      div.innerHTML = sortedSensors [j].id + " " + sortedSensors[j].averageTemperature.toFixed(1);
      div.style.fontsize = "20px";

      output.appendChild(div);
  }
}
