import { auth0 } from "../lib/auth0";
import { redirect } from "next/navigation";

import { useUser } from "@auth0/nextjs-auth0";
import { PhotoIcon } from "@heroicons/react/24/outline";
import LoginButton from "app/components/LoginButton";

export default function Account()  {
  const { user } = useUser();

    console.log("account User source:", user);

    if (!user) {
      return (
        { LoginButton }
      )
    }



  return (


      <>
        
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
