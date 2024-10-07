"use client"
import styles from "./chart.module.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'Mon',
        visit: 4000,
        click: 1398,
    },
    {
        name: 'Tue',
        visit: 3546,
        click: 1398,
    },
    {
        name: 'Wed',
        visit: 1433,
        click: 1398,
    },
    {
        name: 'Thu',
        visit: 3546,
        click: 1398,
    },
    {
        name: 'Fri',
        visit: 1547,
        click: 1398,
    },
    {
        name: 'Sat',
        visit: 2341,
        click: 1398,
    },
    {
        name: 'Sun',
        visit: 1234,
        click: 1398,
    },
];

const Chart = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />\
                    {/* sets the background color of the tooltip's content area to a dark blue (#151c2c). */}
                    <Legend />
                    <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart