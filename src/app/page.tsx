import Link from 'next/link';
import Image from 'next/image'
import { Route, Routes } from "react-router-dom";
import { news } from "app/lib/products"

import './app.css'
//import Events from "./pages/events/page";


//import LoginButton from "./components/LoginButton";
//import LogoutButton from "./components/LogOutButton";

export default function Home() {

  const posts = news;

  return (
    <div className="app-container">
      <div className="main-card-wrapper">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-5 sm:py-5 lg:max-w-7xl lg:px-8 bg-white">

      
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

        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-t border-gray-700 pt-5 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between border rounded p-4 shadow-fuchsia-950 shadow-md">
              <div className="flex items-center gap-x-4 text-xs ">
                <a
                  href={post.href}
                  className="relative z-10 rounded-full px-3 py-1.5 font-medium "
                >
                  {post.name}
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.name}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6">{post.content}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <figure>
                    <img
                      alt={post.alt}
                      src={post.image} 
                      className="aspect-square w-full rounded object-cover bg-gray-300 xl:aspect-7/8"
                    ></img>                    
                    </figure>
              </div>
              <button id="heroBtn" className="btn mt-2">
                  <Link
                    id="homeButton"
                    href={post.href}>
                    {post.linkName}
                  </Link>
              </button>
            </article>
          ))}
        </div>
            </div>
          </div>

      </div>
      </div> 
    </div>
  );
} 


  