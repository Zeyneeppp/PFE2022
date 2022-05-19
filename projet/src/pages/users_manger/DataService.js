import http from "../../Api/axios";
const getAll = () => {
	return http.get("/UsersData");
};
const get = (id) => {
	return http.get(`/UsersData/${id}`);
};
const create = (data) => {
	return http.post("/UsersData", data);
};
const update = (id, data) => {
	return http.put(`/UsersData/${id}`, data);
};
const remove = (id) => {
	return http.delete(`/UsersData/${id}`);
};
const removeAll = () => {
	return http.delete(`/UsersData`);
};
const findByTitle = (title) => {
	return http.get(`/UsersData?title=${title}`);
};
const DataService = {
	getAll,
	get,
	create,
	update,
	remove,
	removeAll,
	findByTitle,
};
export default DataService;
