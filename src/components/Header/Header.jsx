import GuestMenu from "./subcomponents/GuestMenu";
import UserMenu from "./subcomponents/UserMenu";

import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ isLogin }) => {
	const Menu = isLogin ? <UserMenu /> : <GuestMenu />;

	return (
		<header id="header" className="d-flex flex-wrap">
			<Link to="/">Strona głowna</Link>
			{Menu}
		</header>
	);
};

export default Header;