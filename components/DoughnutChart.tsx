"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    // const accountNames = accounts.map((a) => a.name);
    // const balances = accounts.map((a) => a.currentBalance)

    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2500, 3700],
                backgroundColor: ['#FF4C29', '#FF7054', '#FFA491']
            }
        ],
        labels: ['bank 1', 'bank 2', 'bank 3']
    }

    return <Doughnut
        data={data}
        options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
    />
}

export default DoughnutChart