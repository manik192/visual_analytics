import { FileAttachment, Plot } from "@observablehq/framework";
import * as d3 from "d3";

const data = await FileAttachment("demo_values.csv").csv();
data.forEach(d => d.Value = +d.Value); // Convert to number

// Aggregate: mean Value by Topic
const byTopic = Array.from(
  d3.rollup(data, v => d3.mean(v, d => d.Value), d => d.Topic),
  ([Topic, Value]) => ({ Topic, Value })
);

export default Plot.plot({
  x: { label: "Topic" },
  y: { label: "Avg Value (USD)" },
  marks: [
    Plot.barY(byTopic, {
      x: "Topic",
      y: "Value",
      tooltip: true
    })
  ]
});
