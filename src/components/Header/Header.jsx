import "./Header.scss";

const Header = ({ isLogin }) => {
	const registerButton = !isLogin ? <button class="register">Zarejestruj się</button> : null
	const loginButton = !isLogin ? <button class="login">Zaloguj</button> : null
	const logoutButton = isLogin ? <button class="logout">Wyloguj</button> : null

	return (
		<header className="header d-flex flex-wrap">
			<div className="mx-auto"></div>
			{registerButton}
			{loginButton}
			{logoutButton}
		</header>
	);
};

export default Header;