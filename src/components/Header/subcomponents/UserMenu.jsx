import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../../store/StoreProvider";

const UserMenu = () => {
   const navigate = useNavigate();

   const [isMenuActive, setIsMenuActive] = useState(false);
   const { user, setUser } = useContext(StoreContext)

   const logout = () => { navigate("/"); setUser(null) }
   const handleToggleisMenuActive = () => setIsMenuActive((prev) => (!prev));
   const closeMenu = ({ target: { id } }) => id !== "wrapper" && setIsMenuActive(false);

   useEffect(() => {
      window.addEventListener('click', closeMenu);
      return () => (window.removeEventListener('click', closeMenu))
   }, [])

   return (
      <>
         <Link to="/projects">Moje projekty</Link>
         <div className="mx-auto"></div>
         <nav id="menu">
            <div id="wrapper" onClick={handleToggleisMenuActive}>{user.username}</div>
            <ul className={isMenuActive ? "d-block" : "d-none"}>
               <li>Profil<Link to="/profile" /></li>
               <li onClick={logout}>Wyloguj</li>
            </ul>
         </nav>
      </>
   );
};

export default UserMenu;