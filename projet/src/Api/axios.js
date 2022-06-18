import axios from "axios";

const Base_URL = "http://localhost:8080";
export default axios.create({
	baseURL: Base_URL,
});

export const axiosPrivate = axios.create({
	baseURL: Base_URL,
	headers: { "Content-Type": "application/json" },
	withCredentials: true,
});
