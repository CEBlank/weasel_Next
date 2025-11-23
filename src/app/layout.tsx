import type { Metadata } from "next";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";
import './app.css'


import Nav from "./components/Nav";

import Account from "./pages/Account";
import HomePage from "./Home";
import Shop from "./pages/Shop";
import Events from "./pages/Events";
import About from "./pages/About";
import Community from "./pages/Community";
import Admin from "./AdminPages/Admin";


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
              <Nav />
              <Auth0Provider>
                {children}
              </Auth0Provider>
          </body>

    </html>
  );
}