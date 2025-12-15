import { announcements, communityPosts } from "app/lib/products";

const Community = () => {

  const posts = communityPosts;
  const upcomingPost = announcements;

  return (
    <>
    
    <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8 bg-white">

    <div className="content-center">
      <h1 className="text-center">
        Community Announcements
      </h1>
    </div>

        <div id="announcement">
          {upcomingPost.map((upcomingPost) => (
                <article key={upcomingPost.id} className="flex mx-auto mb-15 border shadow-emerald-700 shadow-sm rounded max-w-xl flex-col items-center justify-between p-4">
                    <h3 className="text-lg/6 font-semibold">
                      {upcomingPost.title}
                    </h3>
                    <time
                      className="my-2">
                      {upcomingPost.date}
                    </time>
                      <img
                      className="mb-2 aspect-square h-50 w-full rounded object-cover bg-gray-300 hover:opacity-75 xl:aspect-7/8"
                      alt={upcomingPost.alt}
                      src={upcomingPost.image}
                      >
                    </img>
                    <p
                      className="mb-2">
                        {upcomingPost.content}
                    </p>
                </article>
              ))} 
        </div>   



    <div className="pb-24 sm:pb-32 border rounded mx-10 mb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        <h2 
          id="communityPost"
          className="text-2xl text-center mt-4">
          Community Posts
          </h2>

        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-t border-gray-700 pt-5 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between border rounded p-4 shadow-fuchsia-950 shadow-md">
              <div className="flex items-center gap-x-4 text-xs ">
                <time dateTime={post.datetime} className="">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full px-3 py-1.5 font-medium "
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src={post.author.imageUrl} className="size-10 rounded-full" />
                <div className="text-sm/6">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-2xl mt-5 lg:mx-0">
          <h2 className="pt-5 mx-auto">
            Want to stay up-to-date? Find us on our socials!
          </h2>
            <ul className="menu lg:menu-horizontal">
              <li className="p-4">
                <button
                  id="heroBtn"
                  className="btn p">
                    <img 
                      className="size-10"
                      src="/discordPNG.png"
                      alt="discord icon">
                    </img>
                    Discord</button>
              </li>
              <li className="p-4">
                <button
                  id="heroBtn"
                  className="btn p">
                <img 
                  className="size-10 "
                  src="/youtubePNG.png"
                  alt="youtube icon">
                </img>
                  Youtube</button>
              </li>
              <li className="p-4">
                <button 
                  id="heroBtn"
                  className="btn p">
                  <img 
                    className="size-9"
                    src="/instaPNG.png"
                    alt="insta icon">
                  </img>
                  Instagram</button>
              </li>
            </ul>

        </div>

      </div>
    </div>


{/*     <div id="carouselDIV" className="">
    <div className="carousel max-w-200 mx-24 sm:mx-32 max-h-100">
      <div id="item1" className="carousel-item w-full">
        <img
          src="/catan.jpg"
          className="w-full" />
      </div>
      <div id="item2" className="carousel-item w-full">
        <img
          src="/boardGame.jpg"
          className="w-full" />
      </div>
      <div id="item3" className="carousel-item w-full">
        <img
          src="/magicCards.jpg"
          className="w-full" />
      </div>

    </div>
    <div className="flex w-full mx-24 sm:mx-32 gap-2 py-2">
      <a id="carouselBtn" href="#item1" className="btn btn-xs">1</a>
      <a id="carouselBtn" href="#item2" className="btn btn-xs">2</a>
      <a id="carouselBtn" href="#item3" className="btn btn-xs">3</a>

    </div>
    </div> */}
    
    </div>
    </>
  )
}

export default Community;