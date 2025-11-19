"use client"

import { useUser } from "@auth0/nextjs-auth0";

//import { auth0 } from "../lib/auth0";
//import { redirect } from "next/navigation";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";
import Link from "next/link";

export default function authUser() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>
                      Error: {error.message}</div>;

/*   if (user) return <div>
                      {LogoutButton()}
                        </div>;

  if (!user) return <div>
                      {LoginButton()}
                    </div>; */

  console.log("user everything: ", user);
  
  return (
        
    user ? (
          <div id="profileRoute"
            className="flex">  
            <div
              className="mx-3">
              <Link 
                href="/profile"
                id="userIcon">
                Account
              </Link> 
            </div>

            <div className="border-l pl-2">
              {LogoutButton()}
            </div>

          </div>
    ) : 
      <div>
        {LoginButton()}
      </div>
          
  );
};

