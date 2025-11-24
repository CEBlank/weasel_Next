import Image from 'next/image';
import Link from 'next/link';


const Footing = () => {

  return (

<footer className="footer sm:footer-horizontal px-10 py-3 align-bottom">
  <aside>
    <p>
      Weasel Games Company
      <br />
      It's dangerous to go alone...
    </p>
  </aside>

{/*       <img
        src={"/weaselArcherHead.png"}
        alt="Wesley the Weasel Mascot"
        className="max-w-20 max-h-30"/> */}


  <nav>
    <h6
      id="footTitle" 
      className="border-b-2">Connect with Us</h6>
    <div className="grid grid-flow-col gap-4">
    
      {/* Youtube Icon */}
      <a href="#">
        <Image 
        src={"/youtubePNG.png"}
        alt="youtube Icon"
        height={35}
        width={35} />
      </a>

      {/* Discord Icon */}
      <a href="#">
        <Image 
        src={"/discordPNG.png"}
        alt="Discord Icon"
        height={35}
        width={35} />
      </a>

      {/* Instagram Icon */}
      <a href="#">
        <Image 
        className='pt-1'
        src={"/instaPNG.png"}
        alt="Instagram Icon"
        height={30}
        width={30} />
      </a>
    </div>
  </nav>
  <nav>
    <h6
      id="footTitle" 
      className="border-b-2">Company</h6>
      <div className='grid grid-flow-col gap-4'>
        <Link
          id='pages'
          className='text-white'
          href="../pages/about">
          About Us
        </Link>

          <Link
          id='pages'
          className='text-white'
          href="#">
          Careers
        </Link>
      </div>
  </nav>
  
</footer>
  )

}

export default Footing;