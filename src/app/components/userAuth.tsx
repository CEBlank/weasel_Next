"use client"

import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
} from '@clerk/nextjs';
import CustomUserButton from './checkAdmin';
//import Account from 'app/pages/account/page';

//import { redirect } from "next/navigation";
//import Link from "next/link";
//import CustomUserButton from './checkAdmin';


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


export default function authUser() {
  const { isSignedIn } = useUser()

  if (!isSignedIn) {
    return <SignIn />
  }

  return (
  <>   

    <CustomUserButton />

      {/* <ClerkProvider>

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

      </ClerkProvider> */}
  </>
  );
};

