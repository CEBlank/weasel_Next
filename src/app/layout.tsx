import type { Metadata } from "next";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";
import './app.css'

import Link from 'next/link';

import Nav from "./components/Nav";
import Footing from "./components/Footer";
import MenuHome from "./components/Menu";

/* 
import Account from "./pages/account/page";
import HomePage from "./Home";
import Shop from "./pages/shop/page";
import Events from "./pages/events/page";
import About from "./pages/about/page";
import Community from "./pages/community/page";
import Admin from "./AdminPages/admin/page"; 
*/



export const metadata: Metadata = {
  title: "Weasel Games",
  description: "Weasel Games Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

          <body>
         {/*      <MenuHome /> */}
              <Nav />
              <Auth0Provider>
                {children}
              </Auth0Provider>
              <Footing />
          </body>

    </html>
  );
}