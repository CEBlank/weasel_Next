import Link from 'next/link';
import Image from 'next/image'
import { Route, Routes } from "react-router-dom";

import './app.css'
//import Events from "./pages/events/page";


//import LoginButton from "./components/LoginButton";
//import LogoutButton from "./components/LogOutButton";

export default function Home() {

  return (
    <div className="app-container">
      <div className="main-card-wrapper">

<div className='home'>
        <div>
          
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                  "url(/d&d.jpg)",
            }}
          >
            <div className="hero-overlay content-center"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <div id='bigHero1' className='px-1 rounded-box'> 
                  <h1 className="mb-5 text-5xl font-bold ">Welcome!</h1>
                    <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                </div>

                <button 
                  id="heroBtn" 
                  className="btn mx-1">
                    <Link 
                      id="homeButton"
                      href="./pages/shop">
                      CCG Singles Catalog
                    </Link>
                  </button>

                <button id="heroBtn" className="btn">
                  <Link
                    id="homeButton"
                    href='./pages/events'>
                    Events Schedule
                  </Link>
                  
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div
        className="border-t border-gray-200"
        id="carouselHome">     
          <div 
            className="text-center"
            id='news'>
            <h1>News and Events</h1>
          </div>

{/* Responsive design goes wonky at 417 */}
        <div
          id="homeCards"
          className="flex flex-col justify-center">

              <div id="item1" className="flex-wrap rounded-2xl card lg:card-side bg-gray-400 shadow-sm mb-4 md:mx-6">

                  <figure>
                    <Image
                      src={"/d&d.jpg"}
                      alt="dnd image"
                      height={200}
                      width={300}
                      className="max-w-sm rounded-lg"/>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Tabletop Game Events</h2>
                      <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                      </p>

                      <button id="heroBtn" className="btn">
                        <Link
                          id="homeButton"
                          href='./pages/events'>
                          Check Events
                        </Link>
                    </button>
                    </div>
                </div>


{/* Add modals! */}
              <div id="item2" className="flex-wrap rounded-2xl card lg:card-side bg-gray-400 shadow-sm mb-4 md:mx-6">

                  <figure>
                    <Image
                      src={"/mtg.jpg"}
                      alt="mtg image"
                      height={200}
                      width={300}
                      className="max-w-sm rounded-lg"/>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Card Tournaments</h2>
                      <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                      </p>

                      <button id="heroBtn" className="btn">
                        <Link
                          id="homeButton"
                          href='./pages/events'>
                          Registration
                        </Link>
                    </button>
                    </div>
                </div>

                <div id="item3" className="flex-wrap rounded-2xl card lg:card-side bg-gray-400 shadow-sm mb-4 md:mx-6">

                  <figure>
                    <Image
                      src={"/warhammer40k.jpg"}
                      alt="Warhammer 40k image"
                      height={200}
                      width={300}
                      className="max-w-sm rounded-lg"/>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Open Paint Nights</h2>
                      <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                      </p>

                      <button id="heroBtn" className="btn">
                        <a
                          id="homeButton"
                          href='./pages/events'>
                          Details
                        </a>
                    </button>
                    </div>
                </div>
              
            </div>
          </div>


      </div> 
    </div>
  );
} 


  