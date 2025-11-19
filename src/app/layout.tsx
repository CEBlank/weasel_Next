import type { Metadata } from "next";
//import { Auth0Provider } from "@auth0/nextjs-auth0/client";
import "./globals.css";

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
      
          {children}
        
      </body>
    </html>
  );
}