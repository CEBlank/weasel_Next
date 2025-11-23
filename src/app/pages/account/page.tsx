import { auth0 } from "../lib/auth0";
import { redirect } from "next/navigation";

import { useUser } from "@auth0/nextjs-auth0";
import { PhotoIcon } from "@heroicons/react/24/outline";
import LoginButton from "app/components/LoginButton";

const Account = () => {
  const { user, isLoading } = useUser();

    //console.log("account User source:", user);

  if (isLoading) {

    return (
      <div className="loading-state">
        <div className="loading-text">Loading user profile...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }



  return (
      <>

    {/* Auth provided block */}
      <div className="profile-card action-card">
            <img
              src={user.picture || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%2363b3ed'/%3E%3Cpath d='M50 45c7.5 0 13.64-6.14 13.64-13.64S57.5 17.72 50 17.72s-13.64 6.14-13.64 13.64S42.5 45 50 45zm0 6.82c-9.09 0-27.28 4.56-27.28 13.64v3.41c0 1.88 1.53 3.41 3.41 3.41h47.74c1.88 0 3.41-1.53 3.41-3.41v-3.41c0-9.08-18.19-13.64-27.28-13.64z' fill='%23fff'/%3E%3C/svg%3E`}
              alt={user.name || 'User profile'}
              className="profile-picture"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%2363b3ed'/%3E%3Cpath d='M50 45c7.5 0 13.64-6.14 13.64-13.64S57.5 17.72 50 17.72s-13.64 6.14-13.64 13.64S42.5 45 50 45zm0 6.82c-9.09 0-27.28 4.56-27.28 13.64v3.41c0 1.88 1.53 3.41 3.41 3.41h47.74c1.88 0 3.41-1.53 3.41-3.41v-3.41c0-9.08-18.19-13.64-27.28-13.64z' fill='%23fff'/%3E%3C/svg%3E`;
              }}
            />
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
          </div>





        
      {/* Form Block */}
      
            <div className="flex justify-center border-b border-gray-400 mx-25 mt-5">

                <h2 className="font-semibold border-gray-400">
                  Order History
                </h2>

            </div>
            <div
              id="orderHistory" 
              className="flex justify-center mt-2">
                <p>You haven't ordered anything yet.</p>
              </div>
    </>

  );
};

export default Account;