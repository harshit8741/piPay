import {
    Card,
    CardBody,
    CardHeader,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
//   import { Square3Stack3DIcon } from "@heroicons/react/24/outline";


const chartConfig = {
    type: "bar",
    height: 240,
    series: [
        {
            name: "Revenue",
            data: [5000, 4000, 4500, 6000, 5500, 7000, 3000, 5000, 6500, 6000, 3200, 2300, 5400], // Positive values
        },
        {
            name: "Expense",
            data: [-3000, -2000, -3500, -1500, -2500, -1000, -4000, -2000, -3000, -1800, -2100, -1300, -1000], // Negative values
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
            stacked: true, // Stack bars in front of each other
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#025864", "#16a34a"], // Dark green for revenue, light green for expenses
        plotOptions: {
            bar: {
                columnWidth: "70%", // Adjusts the width of each bar
                borderRadius: 2,
                distributed: false,
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            categories: [
                "18 Oct",
                "20 Oct",
                "22 Oct",
                "25 Oct",
                "28 Oct",
                "2 Nov",
                "5 Nov",
                "7 Nov",
                "8 Nov",
                "9 Nov",
                "10 Nov",
                "11 Nov",
                "12 Nov",
            ],
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: 400,
                },
            },
            title: {
                text: "€",
                style: {
                    color: "#616161",
                    fontSize: "14px",
                    fontFamily: "inherit",
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            theme: "dark",
            y: {
                formatter: function (value: any) {
                    return "€" + Math.abs(value).toLocaleString();
                },
            },
        },
    },
};





export default function Charts() {

    return (
        <Card {...({} as any)}>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"{...({} as any)}
            >
            </CardHeader>
            <CardBody className="px-2 pb-0" {...({} as any)}>
                <Chart {...chartConfig} {...({} as any)} />
            </CardBody>
        </Card>
    );
}