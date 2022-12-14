import React from "react"
import { Pie} from  'react-chartjs-2'
import { Pie as ChartJS } from 'chart.js/auto'
// import { PieChart } from "@mui/icons-material";

function OriginPie({ chartData})  {
    return <Pie data= {chartData} />;
}

export default OriginPie;