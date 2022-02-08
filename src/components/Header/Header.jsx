import GuestMenu from "./subcomponents/GuestMenu";
import UserMenu from "./subcomponents/UserMenu";

import { StoreContext } from '../../store/StoreProvider';

import "./Header.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Header = () => {
	const { user } = useContext(StoreContext);
	const Menu = user ? <UserMenu /> : <GuestMenu />;

	return (
		<header id="header" className="d-flex flex-wrap">
			<Link to="/">Strona głowna</Link>
			{Menu}
		</header>
	);
};

export default Header;