import { Chip } from "@mui/material";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../../componets/sidebar/Sidebar";

export default function DataTableG() {
	const [dataBD, setDataBD] = useState([]);
	const endpoint = "http://localhost:8080/api/all";
	const getData = async () => {
		await axios.get(endpoint).then((response) => {
			const data = response.data;
			console.log(data);
			setDataBD(data);
		});
	};
	useEffect(() => {
		getData();
	}, []);
	// const rowData = dataBD.map((getdata) => getdata.CODE_SITE);
	//-------------------------------------------
	function strCompare(str1, str2) {
		return str1 === str2;
	}
	//-------------------------------------------
	const columns = [
		{
			label: "NOM_WILAYA",
			name: "WILAYA.NOM_WILAYA",
			options: {
				customBodyRender: (value) => {
					// dataBD.map((val) => {
					// 	if (val.WILAYA === "NOM_WILAYA") return <Chip label={val} />;
					// });
					dataBD.map((getdata) => {
						console.log(getdata.WILAYA.NOM_WILAYA);
						return <Chip value={getdata.WILAYA.NOM_WILAYA} />;
					});
				},
			},
		},
		{ name: "CODE_BR" },
		{ name: "CODE_WILAYA" },
	];

	// { field: "TYPE", valueGetter: (params) => params.data.LIAISON[0].TYPE },
	// {
	// 	field: "NUM_LIGNE_ADSL",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
	// 				return dataConst.LIAISON[i].NUM_LIGNE;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "NS_MODEM_ADSL",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_MODEM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "NS_SIM_ADSL",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "Adr_IP_ADSL",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "DateAct_ADSL",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
	// 				return dataConst.LIAISON[i].DATE_ACTIVATION;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "DateExp_ADSL",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "ADSL") == true) {
	// 				return dataConst.LIAISON[i].DATE_EXPIRATION;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },

	// {
	// 	field: "NUM_LIGNE_OOR",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "OOREDOO") == true) {
	// 				return dataConst.LIAISON[i].NUM_LIGNE;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "NS_MODEM_OOR",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "OOREDOO") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_MODEM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "NS_SIM_OOR",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "OOREDOO") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "Adr_IP_OOR",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "OOREDOO") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "NUM_LIGNE_MOB",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "MOBILIS") == true) {
	// 				return dataConst.LIAISON[i].NUM_LIGNE;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "NS_MODEM_MOB",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "MOBILIS") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_MODEM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "NS_SIM_MOB",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "MOBILIS") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "Adr_IP_MOB",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "MOBILIS") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "NUM_LIGNE_4GL",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "4GLTE") == true) {
	// 				return dataConst.LIAISON[i].NUM_LIGNE;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "NS_MODEM_4GL",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "4GLTE") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_MODEM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "NS_SIM_4GL",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "4GLTE") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// {
	// 	field: "Adr_IP_4GL",
	// 	valueGetter: (params) => {
	// 		var dataConst = params.data;
	// 		var i = 0;
	// 		while (i < dataConst.LIAISON.length) {
	// 			if (strCompare(dataConst.LIAISON[i].TYPE, "4GLTE") == true) {
	// 				return dataConst.LIAISON[i].EQUIPEMENT.NS_SIM;
	// 			}
	// 			i++;
	// 		}
	// 		return "/";
	// 	},
	// },
	// ]);

	const options = {
		filterType: "textField",
		// pagination: true,
		// serverSide: true,

		// searchAlwaysOpen: true,
		// resizableColumns: true,
	};

	return (
		<div className="pagetotale">
			<Sidebar />
			<div className="styletable">
				<MUIDataTable
					title={"Global Network Data"}
					data={dataBD}
					columns={columns}
					options={options}
				/>
			</div>
		</div>
	);
}
