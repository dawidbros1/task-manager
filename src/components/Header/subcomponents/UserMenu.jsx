import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";

const UserMenu = () => {
   const [isMenuActive, setIsMenuActive] = useState(true);

   const { user, setUser } = useContext(StoreContext)

   const logout = () => setUser(null)

   const handleToggleisMenuActive = () => setIsMenuActive((prev) => (!prev));

   const closeMenu = ({ target: { id } }) => id !== "wrapper" && setIsMenuActive(false);

   useEffect(() => {
      window.addEventListener('click', closeMenu);
      return () => (window.removeEventListener('click', closeMenu))
   }, [])

   return (
      <>
         <div className="mx-auto"></div>
         <nav id="menu">
            <div id="wrapper" onClick={handleToggleisMenuActive}>{user.username}</div>
            <ul className={isMenuActive ? "d-block" : "d-none"}>
               <li>Profil</li>
               <li onClick={logout}>Wyloguj</li>
            </ul>
         </nav>
      </>
   );
};

export default UserMenu;