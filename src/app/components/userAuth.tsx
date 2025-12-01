"use client"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Account from 'app/pages/account/page';

//import { redirect } from "next/navigation";
import Link from "next/link";


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function authUser() {

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

        </SignedIn>

      </ClerkProvider>
  </>
  );
};

