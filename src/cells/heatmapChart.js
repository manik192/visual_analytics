import { FileAttachment, Plot } from "@observablehq/framework";

const data = await FileAttachment("demo_values.csv").csv();
data.forEach(d => d.Value = +d.Value);

export default Plot.plot({
  x: { label: "Topic", tickRotate: -45 },
  y: { label: "Impact" },
  color: { legend: true },
  marks: [
    Plot.rect(data, {
      x: "Topic",
      y: "Impact",
      fill: "Value",
      tooltip: d => `${d.Topic} → ${d.Impact}: $${d.Value}`
    })
  ]
});
