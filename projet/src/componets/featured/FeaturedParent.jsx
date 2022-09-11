import axios from "axios";
import React, { useEffect, useState } from "react";
import Featured from "./Featured";

function FeaturedParent() {
	const [dataDB, setDataDB] = useState([]);
	const getDataDB = async () => {
		await axios
			.get(`http://localhost:8080/api/abon`)
			.then((res) => {
				setDataDB(res.data);
				console.log("show me", res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		getDataDB();
	}, []);

	const calculAbon = (type) => {
		//number of network
		var countNb = 0;
		//number of expired subsct
		var countAbon = 0;

		dataDB.filter((d) => {
			if (d.TYPE === type) {
				countNb++;
				if (d.Date_exp != null && new Date() >= new Date(d.Date_exp)) {
					countAbon++;
				}
			}
		});
		return { countNb, countAbon };
	};
	console.log(calculAbon("ADSL"));

	return (
		<div className="FeaturedParant">
			<Featured
				title="ADSL"
				totalNb={calculAbon("ADSL").countNb}
				expiredNb={calculAbon("ADSL").countAbon}
			/>
			<Featured
				title="4GLTE"
				totalNb={calculAbon("ADSL").countNb}
				expiredNb={calculAbon("ADSL").countAbon}
			/>
			<Featured
				title="VPN"
				totalNb={calculAbon("ADSL").countNb}
				expiredNb={calculAbon("ADSL").countAbon}
			/>
		</div>
	);
}

export default FeaturedParent;
