import { PieChart, Pie, Sector, Cell } from "recharts";
import React, { PureComponent } from "react";

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 2.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#EFD148"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${name}`}
    </text>
  );
};

export default class CustomPieChart extends PureComponent {
  constructor(props) {
    super(props);
  }

  static jsfiddleUrl = "https://jsfiddle.net/alidingling/w6wsrc52/";

  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie
          data={this.props.coreData}
          dataKey="value"
          nameKey="name"
          cx={200}
          cy={200}
          fill="#8884d8"
          outerRadius={60}
          stroke="#1f2537"
        />
        <Pie
          data={this.props.shellData}
          dataKey="value"
          nameKey="name"
          cx={200}
          cy={200}
          fill="#8884d8"
          innerRadius={70}
          outerRadius={90}
          label={renderCustomizedLabel}
          stroke="#1f2537"
          {...this.props.shellData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={"color"} />
          ))}
        />
      </PieChart>
    );
  }
}
