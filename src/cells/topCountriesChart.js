import { Plot } from "@observablehq/framework";

const dummyData = [
  { Territory: "India", Total: 1200 },
  { Territory: "USA", Total: 950 },
  { Territory: "China", Total: 870 },
  { Territory: "Brazil", Total: 620 },
  { Territory: "Germany", Total: 540 }
];

export default Plot.plot({
  marginLeft: 80,
  x: { label: "Dummy Environmental Value ($)" },
  y: { label: null },
  marks: [
    Plot.barX(dummyData, {
      x: "Total",
      y: "Territory",
      fill: "steelblue",
      tooltip: true
    })
  ]
});
