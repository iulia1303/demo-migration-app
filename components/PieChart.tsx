'use dom';

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Dimensions} from "react-native";

ChartJS.register(ArcElement, Tooltip, Legend);
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const PieChart = () => {
    const data = {
        labels: ['Active', 'Inactive', 'Error'],
        datasets: [
            {
                data: [70, 20, 10],
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            },
        ],
    };
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Sensor Status Distribution</h3>
            <div style={styles.chartWrapper}>
                <Pie data={data} />
            </div>
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
        // margin: '10px auto',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    chartWrapper: {
        width: screenWidth,
        height: screenHeight,
    },
};
export default PieChart;
