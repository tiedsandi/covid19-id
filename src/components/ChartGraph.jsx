import Chart from "react-apexcharts"
const ChartGraph = ({ data }) => {
    const options = {
        series: [data.sembuh, data.dirawat, data.meninggal],
        labels: ["Sembuh", "Dirawat", "Meninggal"],
        colors: ["#6CDCA5", "#9094F1", "#EC4179"],
        stroke: {
            show: false,
            curve: "smooth",
        },
        legend: {
            // show: true,
            // labels: {
            //     useSeriesColors: true,
            //     colors: ["#6CDCA5", "#9094F1", "#EC4179"],
            //     fontWeight: "bold",
            // },
            // floating: true,
            formatter: (value, index) => {
                // rumus persentase
                const backgroundColor = index.w.config.colors[index.seriesIndex]
                const dataValue = data[value.toLowerCase()]
                const persentase = ((dataValue / data.positif) * 100) < 1 ? '<1' : ((dataValue / data.positif) * 100).toFixed(2)
                return ` 
                 <div class="chartLegend">
                    <div class="mark" style="background-color: ${backgroundColor};">
                    ${persentase}%
                    </div>
                    <div>
                        ${value}
                    </div>
                </div>
                `},
            offsetX: 50,
            offsetY: 50,
            labels: {
                useSeriesColors: true,
            },
            onItemClick: {
                toggleDataSeries: false
            },
            onItemHover: {
                highlightDataSeries: true
            },
            markers: {
                width: 0,
                height: 0,
            },
            itemMargin: {
                horizontal: 0,
                vertical: -5
            },

        },
        plotOptions: {
            pie: {
                customScale: 0.8,
                expandOnClick: false,
                dataLabels: {
                    offset: 100,
                },
                donut: {
                    size: '80',
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            fontSize: '24px',
                            color: '#ffffff',
                            formatter: () => {
                                const str = String(data.positif).slice(0, 1)
                                const str2 = String(data.positif).slice(1, 2)
                                return Number(str) + `,${str2} Juta`
                            }
                        },
                        value: {
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#ffffff',
                        },
                        name: {
                            formatter: () => {
                                return `Positif`
                            }
                        }
                    },

                },
            },
        },

    }

    return (
        <div>
            <Chart
                options={options}
                series={options.series}
                type="donut"
                width="100%"
                height={300}
            />
        </div >
    )
}

export default ChartGraph
