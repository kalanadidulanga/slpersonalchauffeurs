import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import "./pages.css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BsRecordFill } from "react-icons/bs";
import { MdAddCall } from "react-icons/md";

const Home = () => {
    return (
        <>
            <Navbar />

            <section className=" w-full h-auto overflow-hidden">
                <div className="bghome1 bg-cover bg-center h-auto w-full">
                    <div className="bg-black/40">
                        <div className=" py-32 max-container padding-container ">
                            <div className="flex flex-col items-center gap-5">
                                <h2 className=" text-white bold-40 md:bold-52 lg:bold-64 text-center">
                                    Sri Lanka
                                </h2>
                                <h1 className=" text-white  bold-32 md:bold-40 lg:bold-52 text-center">
                                    Personal Chauffeurs
                                </h1>
                                <p className="text-white regular-18 text-center">
                                    Best Travel Agency of Sri Lanka
                                </p>
                                <div className="flex flex-col items-center gap-5 md:flex-row mt-10">
                                    <Button size="xl" variant="default" className="" asChild>
                                        <a href="#about" className=" text-white">
                                            About Us
                                        </a>
                                    </Button>
                                    <Button size="xl" variant="default2" className="" asChild>
                                        <Link to="/tours" className=" text-white">
                                            Tours
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" w-full h-auto overflow-hidden py-24 bg-newsletter bg-center bg-cover">
                <div className=" flex flex-col lg:flex-row items-center justify-center gap-10 max-container padding-container">
                    <div className="bg-traveler left w-full md:w-2/3 lg:w-1/2 h-auto bg-cover bg-center">
                        <img
                            src="/svg/undraw_travel_booking_re_6umu.svg"
                            alt="svg1"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className=" right w-full lg:w-1/2 h-auto gap-5 flex flex-col items-center justify-center">
                        <h3 className=" text-color3 bold-20 md:bold-32 lg:bold-40 text-center">
                            Bespoke Journeys of Exquisite Indulgence
                        </h3>
                        <p className="text-gray-600 regular-14 md:regular-16 lg:regular-18 text-justify indent-10 tracking-wide spacin">
                            Discover the beauty and diversity of Sri Lanka with Sri Lanka
                            Personal Chauffeurs, where every moment is carefully designed to
                            create lasting impressions. We believe that travel is more than
                            just seeing places; it’s about living unforgettable experiences
                            that enrich your soul. We offer customized journeys that reveal
                            the fascinating culture, scenery, and secrets of Sri Lanka.
                        </p>
                        <p className="text-gray-600 regular-14 md:regular-16 lg:regular-18 text-justify indent-10 tracking-wide">
                            Sri Lanka Personal Chauffeurs, we go beyond the ordinary. We
                            listen to your needs and preferences and craft your Sri Lankan
                            adventure as a unique story that reflects your personality.
                            Whether you prefer serene beaches, ancient temples, lush
                            rainforests, or lively markets, we will show you the real Sri
                            Lanka that suits your style. With our knowledge and your
                            curiosity, we will make memories that endure.
                        </p>
                        <Button size="xl" variant="default" className="" asChild>
                            <Link to="/contact_us" className=" text-white">
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* About_Us  ----------------------------------------------------------*/}
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
                            About Us
                        </h3>
                        <h1 className=" text-color2 bold-32 md:bold-40 lg:bold-52 text-left">
                            Discover <span className=" text-color3">Sri Lanka</span>
                            <br />
                            with Our Guide
                        </h1>
                        <p className="text-gray-600 regular-14 mt-10 md:regular-16 lg:regular-18 text-justify indent-10 tracking-wide">
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

            <section className="py-16">
                <div className=" max-container padding-container w-2/3 md:w-2/4 lg:w-2/5">
                    <img src="/tripadvisor/logo3.svg" alt="tripadvisor" className=" object-cover object-center"/>
                </div>
            </section>

            <section className=" bg-sl bg-cover bg-center w-full h-auto overflow-hidden">
                <div className=" w-full h-auto bg-black/60">
                    <div className=" max-container padding-container py-32">
                        <div className=" flex flex-col items-center gap-10">
                            <h3 className=" text-white bold-32 md:bold-40 lg:bold-52 text-center">
                                Sri Lanka
                            </h3>
                            <p className="text-white regular-18 text-justify tracking-wide indent-10 leading-loose">
                                Sri Lanka, a teardrop glistening in the turquoise waters of the
                                Indian Ocean, is an island nation brimming with cultural riches,
                                natural wonders, and endless charm. From pristine beaches lapped
                                by gentle waves to verdant hills carpeted with emerald tea
                                plantations, from ancient ruins whispering tales of forgotten
                                kingdoms to vibrant cities thrumming with modern energy, Sri
                                Lanka offers an unforgettable tapestry of experiences for every
                                traveler.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
