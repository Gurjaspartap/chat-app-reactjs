import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { getLast7Days } from '../src/lib/features';

// Register all required chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const labels = getLast7Days();
const LineChart = () => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Messages',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      }
    ]
  };

  return <Line data={data} />;
};

const DoughnutChart = () => {
  const data = {
    labels: ['Single Chats', 'Group Chats'],
    datasets: [
      {
        label: 'Colors',
        data: [300, 50],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      }
    ]
  };

  return <Doughnut data={data} />;
};

export { LineChart, DoughnutChart };
