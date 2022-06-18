import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
	const navigate = useNavigate();

	const goBack = () => navigate("");

	return (
		<section>
			<h1>Unauthorized</h1>
			<br />
			<p>You do not have access to the requested page.</p>
		</section>
	);
};

export default Unauthorized;
