"use client"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  UserProfile,
} from '@clerk/nextjs';
//import Account from 'app/pages/account/page';

//import { redirect } from "next/navigation";
import Link from "next/link";


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
            <a id="homeButton" className="text-1xl">
              Sign Up
            </a>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
          <a 
            href="../pages/Account"
            id="homeButton" 
            className="text-1xl">
              Account
            </a>
        </SignedIn>
      </ClerkProvider>
  </>
  );
};

