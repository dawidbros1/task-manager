import { Link } from "react-router-dom";

import Button from "./subcomponents/Button";

import "./Header.scss";

const Header = ({ isLogin }) => {
	// const registerButton = !isLogin ? <button className="register"><Link to="/register">Zarejestruj się</Link></button> : null
	const registerButton = !isLogin ? <Button to="/register" className="register" >Zarejestruj się</Button> : null
	const loginButton = !isLogin ? <Button to="/login" className="login" >Zaloguj się</Button> : null
	// const loginButton = !isLogin ? <button className="login"><Link to="/login">Zaloguj</Link></button> : null
	// const logoutButton = isLogin ? <button className="logout"><Link to="/">Wyloguj</Link></button> : null

	return (

		<header id="header" className="d-flex flex-wrap">
			<div className="mx-auto"></div>
			{registerButton}
			{loginButton}
			{/* {logoutButton} */}
		</header>

	);
};

export default Header;