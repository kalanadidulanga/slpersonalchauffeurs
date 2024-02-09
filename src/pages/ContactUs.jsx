import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import React, { useState } from 'react'
import { BsRecordFill } from 'react-icons/bs'
import { MdAddCall } from 'react-icons/md'

const ContactUs = () => {

  const [formData, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const clickHandle = (e) => {
    e.preventDefault();

    fetch("http://localhost/server/slpersonalchauffeurs/server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        // Handle the response data
        // Access the message within the response
        toast({
          variant: data.variant,
          title:"Alert",
          description: data.message,
        })

        if(data.variant === "default"){
          setData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        }

        // Additionally, you might want to:
        // - Clear form fields
        // - Redirect to a different page
        // - Display a success message element
      })
      .catch(error => {
        // Handle errors
        toast({
          variant:"destructive",
          title:"Error",
          description: error,
        })
      });

  }

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
                src="/resources/51561.jpg"
                alt="colombo"
                className="w-full h-full object-cover object-center rounded-[50px]"
              />
            </div>

            <div className=" absolute top-16 right-0 w-[75vw] h-[75vw] md:h-[50vw] overflow-hidden rounded-[50px]">
              <img
                src="/resources/waterfall2.jpg"
                alt="waterfall"
                className="w-full h-auto rounded-[50px]"
              />
            </div>
          </div>

          <div className=" mt-[90vw] md:mt-[65vw] lg:mt-0 left w-full lg:w-2/3 h-auto flex flex-col justify-center lg:items-start relative">
            <h3 className=" text-orange-500 bold-18 lg:bold-20 underline decoration-color4 uppercase">
              Contact Us
            </h3>
            <h1 className=" text-color2 bold-32 md:bold-40 lg:bold-52 text-left">
              Get In <span className=" text-color3">Touch</span>
            </h1>

            <div action="" className=" w-full mt-8">
              <div className=" flex flex-col gap-5">
                <div className=' flex flex-col md:flex-row gap-5 w-full'>
                  <div className=' w-full md:w-1/2'>
                    <label htmlFor="name" className='regular-16 text-gray-600 w-full'>Name <span className=' text-red-500'>*</span></label>
                    <div className=' border-gray-300 border rounded-lg overflow-hidden bg-gray-50 w-full mt-1'>
                      <input type="text" name="name" id="name" placeholder='Your Name' className=' regular-16 text-gray-600 bg-transparent w-full h-full px-4 py-3 focus:border-none focus-within:outline-none' onChange={(e) => setData({ ...formData, name: e.target.value })} value={formData.name} />
                    </div>
                  </div>
                  <div className=' w-full md:w-1/2'>
                    <label htmlFor="email" className='regular-16 text-gray-600 w-full'>Email <span className=' text-red-500'>*</span></label>
                    <div className=' border-gray-300 border rounded-lg overflow-hidden bg-gray-50 w-full mt-1'>
                      <input type='email' name="email" id="email" placeholder='Your Email' className=' regular-16 text-gray-600 bg-transparent w-full h-full px-4 py-3 focus:border-none focus-within:outline-none' onChange={(e) => setData({ ...formData, email: e.target.value })} value={formData.email} />
                    </div>
                  </div>
                </div>

                <div className=' w-full'>
                  <label htmlFor="subject" className='regular-16 text-gray-600 w-full'>Subject <span className=' text-red-500'>*</span></label>
                  <div className=' border-gray-300 border rounded-lg overflow-hidden bg-gray-50 w-full mt-1'>
                    <input type='text' name="subject" id="subject" placeholder='Subject' className=' regular-16 text-gray-600 bg-transparent w-full h-full px-4 py-3 focus:border-none focus-within:outline-none' onChange={(e) => setData({ ...formData, subject: e.target.value })} value={formData.subject} />
                  </div>

                </div>

                <div className=' w-full'>
                  <label htmlFor="message" className='regular-16 text-gray-600 w-full'>Message <span className=' text-red-500'>*</span></label>
                  <div className=' border-gray-300 border rounded-lg overflow-hidden bg-gray-50 w-full mt-1'>
                    <textarea type='email' name="message" id="message" placeholder='Your Message' className=' regular-16 text-gray-600 bg-transparent w-full h-full px-4 py-3 focus:border-none focus-within:outline-none' rows={5} onChange={(e) => setData({ ...formData, message: e.target.value })} value={formData.message} />
                  </div>
                </div>

                <button className=' bg-color5 text-white px-4 py-3 rounded-full w-full sm:w-1/3 mt-8 hover:brightness-105 hover:scale-105 hover:shadow-lg hover:shadow-color3 regular-18 transition-all duration-200' onClick={clickHandle}>
                  Submit
                </button>
              </div>
            </div>

          </div>

          <div className=" w-full lg:w-1/2 h-[41vw] relative hidden lg:block">
            <div className=" relative ">
              <div className=" absolute top-0 left-0 w-[75%] h-[35vw] overflow-hidden rounded-[50px] z-30">
                <img
                  src="/resources/51561.jpg"
                  alt="colombo"
                  className="w-full h-full object-cover object-center rounded-[50px]"
                />
              </div>

              <div className=" absolute top-16 right-0 w-[75%] h-[35vw] overflow-hidden rounded-[50px]">
                <img
                  src="/resources/waterfall2.jpg"
                  alt="waterfall"
                  className="w-full h-auto object-cover object-center rounded-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className=' w-full h-full'>
        <div className=' max-container padding-container py-10'>
          <div className=' w-full h-full'>
            <div>

            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  )
}

export default ContactUs