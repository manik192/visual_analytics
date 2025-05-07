import { FileAttachment, Plot } from "@observablehq/framework";

const data = await FileAttachment("demo_values.csv").csv();
data.forEach(d => d.Value = +d.Value);

export default Plot.plot({
  x: { label: "Topic" },
  y: { label: "Total Value ($)", stack: true },
  color: { legend: true },
  marks: [
    Plot.barY(data, {
      x: "Topic",
      y: "Value",
      fill: "Impact",
      tooltip: true
    })
  ]
});
