'use dom';
import {ScrollView, StyleSheet, View} from 'react-native';
import SensorChart from "@/components/SensorChart";
import PieChart from "@/components/PieChart";
import SensorDetails from "@/components/SensorDetails";
import SensorsTable from "@/components/SensorsTable";

export default function HomeScreen() {
    const sensors = [
        { id: 1, name: 'Temperature Sensor', status: 'Active' },
        { id: 2, name: 'Humidity Sensor', status: 'Inactive' },
        { id: 3, name: 'Pressure Sensor', status: 'Active' },
    ];

    const selectedSensor = sensors[0];

    return (
        <div>
            <SensorDetails sensor={selectedSensor}/>
            <SensorChart name={'Mara'}/>
            <SensorsTable/>
        </div>
    );
}

const styles = StyleSheet.create({

});
