import "./Chart.scss";
import {
	AreaChart,
	Area,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "January", Total: 1200 },
	{ name: "February", Total: 2100 },
	{ name: "March", Total: 800 },
	{ name: "April", Total: 1600 },
	{ name: "May", Total: 900 },
	{ name: "June", Total: 1700 },
];

const Chart = ({ aspect, title }) => {
	// const [dataDB, setDataDB] = useState([]);
	// const getDataBD = async () => {
	// 	await axios
	// 		.get(`http://localhost:8080/api/liaison`)
	// 		.then((res) => {
	// 			setDataDB(res.data);
	// 			console.log(res.data);
	// 			console.log("axios data", res);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// };

	// useEffect(() => {
	// 	getDataBD();
	// }, []);
	return (
		<div className="chart">
			<div className="title">{title}</div>
			<ResponsiveContainer width="100%" aspect={aspect}>
				<AreaChart
					width={730}
					height={250}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
							<stop offset="10%" stopColor="#84d8d7" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#84d8d7" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="name" stroke="gray" />
					<CartesianGrid strokeDasharray="3 3" className="chartGrid" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="Total"
						stroke="#84d8d7"
						fillOpacity={1}
						fill="url(#total)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
