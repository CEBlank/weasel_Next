import { pastEvents } from "app/lib/products";

const Events = () => {

  //const pastEvent = pastEvents;

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-5 sm:py-5 lg:max-w-7xl lg:px-8 bg-white">
        
        <div
          id='eventsHead'
          className="text-center mb-3 sm:mb-4 border-b">
          <h1>Events</h1>
        </div>
          
        <div  id="eventContainer">
          <div id="iFrame" className="flex min-w-full md:shrink m:flex-shrink content-center mx-auto">
          {/* Google Calendar Basic Embed least response thing ever */}
          <div
          id="calendarFrame"
          className="flex-box rounded-2xl border border-grey-400 shadow-fuchsia-950 shadow-md">
            <iframe 
              id="iFrame"
              className="max-w-full min-h-100"
              src="https://calendar.google.com/calendar/embed?src=weaselgameco%40gmail.com&ctz=America%2FChicago" 
              width="1000" 
              height="1000" 
              >
            </iframe> 

          
          </div> 
            {/* <CalendarApp /> */}
            </div>

        <div
          className="mt-2 md:flex-wrap">
          <h1
            className="mb-3 border-b"
            id='detailsHead'
          >Details</h1>

            <div
              id="detailsContent" 
              className="rounded max-w-full min-h-50 bg-white border md:flex-wrap md:py-3 shadow-fuchsia-950 shadow-md">
                <p className="my-3 py-1">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                    <button 
                      id="heroBtn" 
                      className="btn mx-1 mt-2">
                        <a 
                          id="homeButton"
                          href="#">
                          Register
                        </a>
                    </button>

                <p className="my-3">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                    <button 
                      id="heroBtn" 
                      className="btn mx-1 mt-2 mb-3">
                        <a 
                          id="homeButton"
                          href="#">
                          Contact Us
                        </a>
                    </button>
            </div>

        </div>


        <div
          id='eventsHead'
          className="my-2 text-center border-b">
          <h1>Past Events</h1>
        </div>

        <div id="eventGallery" className="flex ">

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">


          {pastEvents.map((event) => (

            <div
              key={event.id} 
              className="card bg-white border rounded  w-96 shadow-fuchsia-950 shadow-md">
              <div className="card-body">
                <h2 className="card-title">{event.name}</h2>
                <time>
                  {event.date}
                </time>
                <p>
                  {event.content}
                </p>
              </div>
              <figure>
                <img
                alt={event.alt}
                src={event.image} 
                className="aspect-square w-full rounded object-cover bg-white group-hover:opacity-75 xl:aspect-7/8"
              ></img>
              </figure>
            </div>

/*             <span key={event.id} 
                  className="group border border-gray-400 rounded shadow-fuchsia-950 shadow-md p-5"
                  >
              <img
                alt={event.alt}
                src={event.image} 
                className="aspect-square w-full rounded-lg object-cover bg-gray-300 group-hover:opacity-75 xl:aspect-7/8"
              ></img>
              <h3 className="mt-4 text-sm text-gray-700">{event.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${eve.price}</p>
              <span className="m-3">

                <button 
                  id="heroBtn"
                  className="p-1 rounded-sm">
                    <a 
                      id="homeButton"
                      href="#"
                      >
                      Details
                    </a>
                </button>

                </span>
              <span>

                <button 
                 // onClick={itemSelection}
                  id="heroBtn"
                  className="p-1 rounded-sm">
                    <a 
                      id="homeButton"
                      
                      >
                      Add to Cart
                    </a>
                </button>

              </span>
            </span> */
          ))}


{/*             <div className="card bg-gray-400 w-96 shadow-fuchsia-950 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Yu-Gi-Oh Casual Night</h2>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
              </div>
              <figure>
                <img
                  src={'/yugiohh.jpg'}
                  alt="yugioh" />
              </figure>
            </div> */}
{/* 
            <div className="card bg-gray-400 w-96 shadow-2xl mb-3 ">
              <div className="card-body">
                <h2 className="card-title">Dungeons&Dragons: Adventure League</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
              </div>
              <figure>
                <img
                  src={'/gameNight.jpg'}
                  alt="gameNight" />
              </figure>
            </div> */}

          </div>
        </div>

        </div>
      </div>   
    </>
  )
}

export default Events;