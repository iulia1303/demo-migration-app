'use dom';

import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown, FaSort, FaTrash } from 'react-icons/fa';

const SensorsTable = () => {
    const [sensors, setSensors] = useState([
        { id: 1, name: 'Temperature Sensor', status: 'Active', temperature: 28 },
        { id: 2, name: 'Humidity Sensor', status: 'Inactive', temperature: 22 },
        { id: 3, name: 'Pressure Sensor', status: 'Error', temperature: 30 },
        { id: 4, name: 'Light Sensor', status: 'Active', temperature: 25 },
        { id: 5, name: 'Proximity Sensor', status: 'Inactive', temperature: 20 },
    ]);

    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [statusFilter, setStatusFilter] = useState('');

    // Sort sensors based on current sort configuration
    const sortedSensors = [...sensors].sort((a, b) => {
        if (!sortConfig.key) return 0; // No sorting
        const { key, direction } = sortConfig;
        const order = direction === 'ascending' ? 1 : -1;

        if (key === 'name') { // @ts-ignore
            return a[key].localeCompare(b[key]) * order;
        }
        if (key === 'temperature') return (a[key] - b[key]) * order;

        return 0;
    });

    // Filter sensors by status (case-insensitive)
    const filteredSensors = sortedSensors.filter((sensor) =>
        sensor.status.toLowerCase().includes(statusFilter.toLowerCase())
    );

    // Update sorting configuration
    const handleSort = (key: string | null) => {
        // @ts-ignore
        setSortConfig((prevConfig) => {
            if (prevConfig.key === key) {
                if (prevConfig.direction === 'ascending') {
                    return { key, direction: 'descending' };
                } else if (prevConfig.direction === 'descending') {
                    return { key: null, direction: null }; // Disable sorting
                }
            }
            return { key, direction: 'ascending' };
        });
    };

    // Remove sensor
    const removeSensor = (id: number) => {
        setSensors(sensors.filter((sensor) => sensor.id !== id));
    };

    // Edit sensor (dummy functionality for demo purposes)
    const editSensor = (id: number) => {
        alert(`Edit sensor with ID: ${id}`);
    };

    return (
        <div style={styles.container}>
            <h2>Sensors Table</h2>

            {/* Filter */}
            <input
                type="text"
                placeholder="Filter by status (Active, Inactive, Error)"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={styles.filterInput}
            />

            {/* Table */}
            <table style={styles.table}>
                <thead>
                <tr>
                    <th onClick={() => handleSort('name')} style={styles.th}>
                        Name{' '}
                        {sortConfig.key === 'name' &&
                            (sortConfig.direction === 'ascending' ? (
                                <FaArrowUp />
                            ) : sortConfig.direction === 'descending' ? (
                                <FaArrowDown />
                            ) : (
                                <FaSort />
                            ))}
                    </th>
                    <th onClick={() => handleSort('temperature')} style={styles.th}>
                        Reference value{' '}
                        {sortConfig.key === 'temperature' &&
                            (sortConfig.direction === 'ascending' ? (
                                <FaArrowUp />
                            ) : sortConfig.direction === 'descending' ? (
                                <FaArrowDown />
                            ) : (
                                <FaSort />
                            ))}
                    </th>
                    <th style={styles.th}>Status</th>
                    <th style={styles.th}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredSensors.map((sensor) => (
                    <tr key={sensor.id}>
                        <td style={styles.td}>{sensor.name}</td>
                        <td style={styles.td}>{sensor.temperature}</td>
                        <td style={styles.td}>{sensor.status}</td>
                        <td style={styles.td}>
                            <button
                                onClick={() => editSensor(sensor.id)}
                                style={{ ...styles.actionButton, ...styles.editButton }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => removeSensor(sensor.id)}
                                style={{ ...styles.actionButton, ...styles.deleteButton }}
                            >
                                <FaTrash />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f8f8f8',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        cursor: 'pointer',
        padding: '8px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
    },
    td: {
        padding: '8px',
        borderBottom: '1px solid #ddd',
    },
    filterInput: {
        marginBottom: '16px',
        padding: '8px',
        width: '100%',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    actionButton: {
        margin: '0 4px',
        padding: '4px 8px',
        border: 'none',
        cursor: 'pointer',
    },
    editButton: {
        width: '100%',
        backgroundColor: '#4CAF50',
        color: 'white',
    },
    deleteButton: {
        width: '100%',
        backgroundColor: '#f44336',
        color: 'white',
    },
};

export default SensorsTable;
