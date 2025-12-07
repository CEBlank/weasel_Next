"use client"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from '@clerk/nextjs';
import CustomUserButton from './checkAdmin';
//import Account from 'app/pages/account/page';

//import { redirect } from "next/navigation";
//import Link from "next/link";
//import CustomUserButton from './checkAdmin';


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const DotIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}

export default function authUser() {

  return (
  <>   
      <ClerkProvider
        appearance={{
          cssLayerName: 'clerk',
        }}>

          <SignedOut>
          <SignInButton />
          <SignUpButton>
            <a id="homeButton" className="text-1xl">
              Sign Up
            </a>
          </SignUpButton>
        </SignedOut>

        <SignedIn>

        <CustomUserButton />

        </SignedIn>

      </ClerkProvider>
  </>
  );
};

