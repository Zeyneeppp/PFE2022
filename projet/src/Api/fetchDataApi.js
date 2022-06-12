import React from "react";

const getDataMobilis = async () => {
	return await fetch("http://localhost:8080/api/mob").then((data) => {
		data.json();
		console.log(data);
	});
};

export { getDataMobilis };
