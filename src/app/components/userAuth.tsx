"use client"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

//import { useUser } from "@auth0/nextjs-auth0";
//import { auth0 } from "../lib/auth0";
//import { redirect } from "next/navigation";
//import LoginButton from "./LoginButton";
//import LogoutButton from "./LogOutButton";
//import Link from "next/link";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function authUser() {

//const clerkPublicKey = "pk_live_Y2xlcmsud2Vhc2VsZ2FtZXMuYXBwJA"

//  const { user } = useUser();

//  console.log("user everything: ", user);
  
  return (
  <>   
      <ClerkProvider>
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <a className="text-1xl">
              Sign Up
            </a>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ClerkProvider>
  </>
  );
};

