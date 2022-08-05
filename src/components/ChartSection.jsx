import { useEffect, useState } from "react";
import ChartGraph from "./ChartGraph";
import LoadingSection from "./LoadingSection";

const ChartSection = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const getData = async () => {
        const res = await fetch("https://apicovid19indonesia-v2.vercel.app/api/indonesia");
        setData(await res.json());
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='ChartSection'>
            {loading ? <LoadingSection /> :
                <>
                    {
                        data && <>
                            <div className="chart-box">
                                <div className="header">Pembaruan Terakhir <br /> {
                                    new Date(data.lastUpdate).toLocaleString('id-ID', { hour12: false }) + " WIB"
                                }</div>
                                <div className="chart">
                                    <ChartGraph data={data} />
                                </div>
                            </div>
                        </>
                    }
                </>

            }

        </div >
    )
}

export default ChartSection
