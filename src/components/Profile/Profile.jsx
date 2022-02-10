import { useContext } from "react";

import { StoreContext } from "../../store/StoreProvider";

import "./Profile.scss"
import ChangeUsernameForm from "./subcomponents/ChangeUsernameForm";
import ChangePasswordForm from "./subcomponents/ChangePasswordForm";

const Profile = () => {
   const { user } = useContext(StoreContext);

   return (
      <div id="profile" className="p-2">
         <div id="page-title">Ustawienia profilu</div>

         <div className="border border-2 p-2 mb-2">
            <ChangeUsernameForm user={user} />
         </div>

         <div className="border border-2 p-2">
            <ChangePasswordForm user={user} />
         </div>
      </div>
   )
}

export default Profile;