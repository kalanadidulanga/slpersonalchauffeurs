import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { TOURS } from '@/constants'
import React from 'react'
import { Link } from 'react-router-dom'

const Tours = () => {
  return (
    <>
      <Navbar />
      <PageHeader name="Tours" img="/background/bgtop1.jpg" />

      <div className=' w-full h-auto overflow-hidden bg-white'>
        <div className=' flex flex-col items-center max-container padding-container py-24'>
          <div className=" max-w-5xl h-auto flex flex-col justify-center lg:items-start relative">
            <h3 className=" text-color3 bold-18 lg:bold-20 underline decoration-color4 uppercase">
              SRI LANKA TOURS & ITINERARIES
            </h3>
            <h1 className=" text-color2 bold-32 md:bold-40 lg:bold-52 text-left">
              Sri Lanka <span className=" text-color5">Private Tours</span>
            </h1>
            <h5 className=' text-gray-500 regular-14 md:regular-16 mt-2'>At SL Personal Chauffeurs Tours, we’ve been creating locally flavoured dream vacation around Sri Lanka.</h5>
            <p className="text-gray-600 regular-14 mt-10 md:regular-16 lg:regular-18 text-justify mb-2 tracking-wide">
              <span className=" font-bold">Welcome to SL Personal Chauffeurs!</span>
            </p>
            <p className="text-gray-600 regular-14 mt-3 md:regular-16 lg:regular-18 text-justify indent-10 tracking-wide">
              Embrace the warmth of our island hospitality as we whisk you away on a journey like no other. At SL Personal Chauffeurs, we believe in the power of friendly smiles, personalized experiences, and creating memories that linger long after your trip ends.
            </p>
            <p className="text-gray-600 regular-14 mt-3 md:regular-16 lg:regular-18 text-justify indent-10 tracking-wide">
              Picture yourself strolling along pristine beaches, breathing in the fragrant spices of bustling markets, and immersing yourself in the rich tapestry of Sri Lanka's culture and heritage. With us, every moment is carefully crafted to delight your senses and awaken your spirit of adventure.
            </p>
            <p className="text-gray-600 regular-14 mt-3 md:regular-16 lg:regular-18 text-justify indent-10 tracking-wide">
              Our team of passionate travel experts is here to be your guides, your confidantes, and your companions as you explore the wonders of our beloved island. From the misty heights of ancient temples to the untamed beauty of wildlife sanctuaries, we'll uncover hidden gems and tailor each experience to your unique preferences.
            </p>
            <p className="text-gray-600 regular-14 mt-3 md:regular-16 lg:regular-18 text-justify indent-10 tracking-wide">
              But what truly sets us apart is our unwavering commitment to your happiness. We don't just plan trips; we create dreams. Our goal is to surpass your expectations at every turn, ensuring that every detail is flawlessly executed and every moment leaves you breathless with wonder.
            </p>
            <p className="text-gray-600 regular-14 mt-3 md:regular-16 lg:regular-18 text-justify indent-10 tracking-wide">
              So why settle for ordinary when you can experience extraordinary? Let SL Personal Chauffeurs be your gateway to paradise. Get ready to embark on the adventure of a lifetime, where every smile is genuine, every experience is unforgettable, and every journey is infused with the magic of Sri Lanka. Welcome aboard!
            </p>
            <Button size="xl" variant="default" className="mt-10" asChild>
              <Link to="/contact_us" className=" text-white">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className=' w-full h-auto overflow-hidden'>
        <div className=' max-container padding-container py-24'>
          <h1 className=" text-color2 bold-32 md:bold-40 lg:bold-52 text-left">
            Sri Lanka <span className=" text-color5">Tour Covers</span>
          </h1>

          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-0 lg:gap-0 py-8'>

            {TOURS.map((tour, index) => (
              <div key={index} className=' w-full  h-40 md:h-52 lg:h-64 flex justify-center items-center overflow-hidden relative'>
                <img src={tour.src} alt="colombo" className='flex w-full h-full object-cover object-bottom' />
                <div className=' flex flex-col justify-end absolute w-full h-full p-5 bg-opacity-75 bg-gradient-to-t from-black/50 hover:from-black/70 transition-all duration-300 to-transparent'>
                  <h4 className='text-white bold-18 tracking-widest'>{tour.h4}</h4>
                  {/* <p className='text-white regular-16'>{tour.p}</p> */}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Tours