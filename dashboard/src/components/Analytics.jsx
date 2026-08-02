import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


const Analytics = ({stats}) => {


const data = [
  {
    name:"Messages",
    value:stats.messages
  },

  {
    name:"Projects",
    value:stats.projects
  },

  {
    name:"Skills",
    value:stats.skills
  },

  {
    name:"About",
    value:stats.about
  }
];


return (

<div className="analytics">

<h2>📊 Portfolio Analytics</h2>


<ResponsiveContainer width="100%" height={300}>

<BarChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar 
dataKey="value"
fill="#2563EB"
/>

</BarChart>


</ResponsiveContainer>


</div>

);


};


export default Analytics;