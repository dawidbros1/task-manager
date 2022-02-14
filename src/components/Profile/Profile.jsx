import ChangeUsernameForm from "./subcomponents/ChangeUsernameForm";
import ChangePasswordForm from "./subcomponents/ChangePasswordForm";

import "./Profile.scss"

const Profile = () => {
   return (
      <main id="profile">
         <div id="page-title">Ustawienia profilu</div>

         <div className="border border-2 p-2 mb-2">
            <ChangeUsernameForm />
         </div>

         <div className="border border-2 p-2">
            <ChangePasswordForm />
         </div>
      </main>
   )
}

export default Profile;