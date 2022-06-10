import axios from "axios";
import React from "react";

export default function Data() {
	const getinfo = () => {
		axios
			.get("http://localhost:8080/api/one")
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return <div>{getinfo}</div>;
}
