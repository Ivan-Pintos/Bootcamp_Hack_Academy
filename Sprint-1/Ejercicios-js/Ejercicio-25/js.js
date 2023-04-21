var datosChart = {
  labels: [],
  datasets: [
    {
      label: "PBI URUGUAY (USD)",
      data: [],
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      borderColor: "rgba(0, 0, 0, 0.3)",
      borderWidth: 1,
      fill: true,
      tension: 0.5,
    },
  ],
};
fetch(
  "https://gist.githubusercontent.com/SuecoMarcus/23bcf8a786725f1b8335ec2dc2d90779/raw/f33d1058b878a7fc95ef202763d0067e8b436e54/uruguay_gdp.json"
)
  .then((data) => data.json())
  .then((dataJson) => {
    for (let index = dataJson.length - 1; index >= 0; index--) {
      datosChart.labels.push(dataJson[index].date);
      datosChart.datasets[0].data.push(dataJson[index].value);
    }
    var ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: datosChart,
      // options: {
      //   scales: {
      //     xAxis: {
      //       reverse: true,
      //     },
      //   },
      // },
    });
  });
