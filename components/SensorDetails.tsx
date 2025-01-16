'use dom';

import React from 'react';

// @ts-ignore
const SensorDetails = ({ sensor }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>{sensor.name} Details</h2>
            <p style={styles.text}>Status: {sensor.status}</p>
            <p style={styles.text}>Location: Warehouse 1</p>
            <p style={styles.text}>Last Calibrated: 2024-12-15</p>
        </div>
    );
};
const styles = {
    container: {
        padding: '16px',
        backgroundColor: '#f8f8f8',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        margin: '16px',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '8px',
    },
    text: {
        fontSize: '16px',
        marginBottom: '4px',
    },
};
export default SensorDetails;
