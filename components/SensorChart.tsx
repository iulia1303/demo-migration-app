'use dom';

import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import {Dimensions} from "react-native";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);
const screenWidth = Dimensions.get('window').width;
interface SensorChartProps {
    name?: string
}

const SensorChart = ({name}: SensorChartProps) => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sensor Data',
                data: [65, 59, 80, 81, 56],
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Sensor Data Over Time',
            },
        },
    };

    return (
        <div className="sensor-chart" style={styles.container}>
            <h3 style={styles.title}>Sensor Data Chart</h3>
            <Line data={data} options={options}/>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
        width: screenWidth,
        margin: '10px auto',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '16px',
    },
};

export default SensorChart;
