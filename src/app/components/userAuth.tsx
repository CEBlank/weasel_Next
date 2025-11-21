"use client"

import { useUser } from "@auth0/nextjs-auth0";

//import { auth0 } from "../lib/auth0";
//import { redirect } from "next/navigation";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogOutButton";
//import Link from "next/link";


export default function authUser() {
  const { user } = useUser();

//  console.log("user everything: ", user);
  
  return (
        
    user ? (
          <div id="profileRoute"
            className="flex">  
              <LogoutButton />
          </div>
    ) : 
      <div>
      <LoginButton />
      </div>
          
  );
};

