import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import React from 'react'
import { BsRecordFill } from 'react-icons/bs'
import { MdAddCall } from 'react-icons/md'

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <PageHeader name="Contact Us" img="/background/bgtop2.jpg" />

      <section
        className=" w-full h-auto overflow-hidden py-24 bg-white"
        id="about"
      >
        <div className=" flex flex-col lg:flex-row items-center justify-center gap-10 max-container padding-container">

          <div className="w-full lg:hidden h-auto relative">
            <div className=" absolute top-0 left-0 w-[75vw] h-[75vw] md:h-[50vw] overflow-hidden rounded-[50px]">
              <img
                src="/resources/colombo.jpg"
                alt="colombo"
                className="w-full h-full object-cover object-center rounded-[50px]"
              />
            </div>

            <div className=" absolute top-16 right-0 w-[75vw] h-[75vw] md:h-[50vw] overflow-hidden rounded-[50px]">
              <img
                src="/resources/waterfall.jpg"
                alt="waterfall"
                className="w-full h-auto rounded-[50px]"
              />
            </div>
          </div>

          <div className=" mt-[90vw] md:mt-[65vw] lg:mt-0 left w-full lg:w-1/2 h-auto flex flex-col justify-center lg:items-start relative">
            <h3 className=" text-orange-500 bold-18 lg:bold-20 underline decoration-color4 uppercase">
              Contact Us
            </h3>
            <h1 className=" text-color2 bold-32 md:bold-40 lg:bold-52 text-left">
              Get In <span className=" text-color3">Touch</span>
            </h1>
            <p className="text-gray-600 regular-14 mt-10 md:regular-16 lg:regular-18 text-justify indent-10 tracking-wide spacin">
              Regardless of your travel preferences, Sri Lanka has a wide range
              of offerings that cater to everyone's interests. At{" "}
              <span className=" font-bold">SL Personal Chauffeurs</span>, our
              primary goal is to connect you with experiences best suited to
              your needs.
            </p>
            <p className="text-gray-600 regular-14 mt-3 md:regular-16 lg:regular-18 text-justify indent-10 tracking-wide">
              With our extensive knowledge of Sri Lanka gained over the past ten
              years, we have carefully selected partners who prioritize the
              well-being of both people and the environment. From breathtaking
              beaches to ancient temples and picturesque tea plantations, we
              take pride in curating unforgettable and unique experiences that
              will leave a lasting impression on you.
            </p>

            <p className="flex items-center text-gray-600 regular-14 mt-5 md:regular-16 lg:regular-18 text-justify indent-2 tracking-wide ps-8">
              <span><BsRecordFill color="#00a4f7" className=" m-0 p-0" /></span>10 Years of Experience
            </p>

            <p className="flex items-center text-gray-600 regular-14 mt-1 md:regular-16 lg:regular-18 text-justify indent-2 tracking-wide ps-8">
              <span><BsRecordFill color="#00a4f7" className=" m-0 p-0" /></span>8K+ Travellers Choice
            </p>

            <p className="flex items-center text-color1 regular-24 mt-5 md:regular-32 lg:regular-40 indent-2 tracking-wide ps-8">
              <span><MdAddCall /></span>+94741613000
            </p>
          </div>

          <div className=" w-full lg:w-1/2 h-[41vw] relative hidden lg:block">
            <div className=" relative ">
              <div className=" absolute top-0 left-0 w-[75%] h-[35vw] overflow-hidden rounded-[50px] z-30">
                <img
                  src="/resources/colombo.jpg"
                  alt="colombo"
                  className="w-full h-full object-cover object-center rounded-[50px]"
                />
              </div>

              <div className=" absolute top-16 right-0 w-[75%] h-[35vw] overflow-hidden rounded-[50px]">
                <img
                  src="/resources/waterfall.jpg"
                  alt="waterfall"
                  className="w-full h-auto object-cover object-center rounded-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ContactUs