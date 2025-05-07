import { Plot } from "@observablehq/framework";

const data = [
  { country: "India", value: 100 },
  { country: "USA", value: 80 },
  { country: "Germany", value: 60 }
];

export default Plot.plot({
  marginLeft: 80,
  x: { label: "Value" },
  y: { label: null },
  marks: [
    Plot.barX(data, {
      x: "value",
      y: "country",
      fill: "teal"
    })
  ]
});
