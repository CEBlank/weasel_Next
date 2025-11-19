import { auth0 } from "./lib/auth0";
import Link from 'next/link';
import { Route, Routes } from "react-router-dom";

//import LoginButton from "./components/LoginButton";
//import LogoutButton from "./components/LogOutButton";



import Account from "./pages/Account";
import Nav from "./components/Nav";
import HomePage from "./pages/Home";
import Shop from "./pages/Shop";
import Events from "./pages/Events";
import About from "./pages/About";
import Community from "./pages/Community";
import Admin from "./pages/Admin";


export default function Home() {

  return (
    <div className="app-container">
      <div className="main-card-wrapper">
        
        <Nav />

        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="*" element={<HomePage />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/community" element={<Community />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<Home />}/>

          {/* Need to make THESE protected routes */}
          <Route path="/account" element={<Account />}/> 
          <Route path="/admin" element={<Admin />}/>

        </Routes>
      


      </div>
    </div>
  );
}