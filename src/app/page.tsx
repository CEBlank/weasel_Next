import { auth0 } from "./lib/auth0";
import Link from 'next/link';
import { Route, Routes } from "react-router-dom";

//import LoginButton from "./components/LoginButton";
//import LogoutButton from "./components/LogOutButton";



import Account from "./pages/Account";
import HomePage from "./pages/Home";
import Shop from "./pages/Shop";
import Events from "./pages/Events";
import About from "./pages/About";
import Community from "./pages/Community";
import Admin from "./AdminPages/Admin";


export default function Home() {

  return (
    <div className="app-container">
      <div className="main-card-wrapper">
        

      </div>
    </div>
  );
}