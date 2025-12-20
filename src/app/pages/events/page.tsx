import { pastEvents } from "app/lib/products";
import Link from "next/link";
//import testConnect from "app/utils/connectMongo"; 


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
            </div>

            <div className="mt-10 justify-self-center">
              <button
                id="heroBtn"
                className="btn">
                Event Registrations
              </button>
            </div>
        

        <div
          id='eventsHead'
          className="text-center border-b mt-15">
          <h1>Past Events</h1>
        </div>

        <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8 bg-white">
          
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-t border-gray-700 pt-3 sm:pt-3 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {pastEvents.map((event) => (
                    <article key={event.id} className="flex max-w-xl flex-col items-start justify-between border rounded p-4 shadow-fuchsia-950 shadow-md">
                      <div className="group relative grow">
                        <h3 className="mt-3 text-lg/6 font-semibold">
                          {event.name}
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6">{event.content}</p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                        <figure>
                            <img
                              alt={event.alt}
                              src={event.image} 
                              className="aspect-square w-full rounded object-cover bg-gray-300 xl:aspect-7/8"
                            ></img>                    
                            </figure>
                      </div>
                    </article>
                  ))}
              </div>
          
        </div>

        
      </div>   
    </>
  )
}

export default Events;