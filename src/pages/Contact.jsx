import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import LocationMap from "../components/MapSection";

export default function Contact() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-white via-red-50 to-red-100 font-serif py-1">
        {/* Hero Header */}
        <div className="w-full bg-red-800 text-white text-center px-6 py-20 relative overflow-hidden">
          <h1 className="text-5xl md:text-6xl mb-4 font-[italiana]">
            We’re Here for You 24/7
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-sans">
            Whether it’s an emergency, patient transfer, or event standby — Nesh Ambulance Service is ready to assist you anytime, anywhere.
          </p>
          <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full bottom-[-80px] right-[-80px] z-0"></div>
        </div>

        {/* Contact Container */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl mt-[-60px] z-10 relative flex flex-col md:flex-row overflow-hidden px-6 md:px-12 py-12 md:py-16">
          {/* Left Info */}
          <div className="bg-red-700 text-white px-8 py-12 relative md:w-1/2 w-full rounded-2xl md:rounded-r-none">
            <h3 className="text-2xl font-bold mb-4 font-[italiana] tracking-wider">Nesh Ambulance Service</h3>
            <p className="text-white/90 text-base mb-6">
              Providing advanced life support, emergency patient transfers, and event medical standby with fully equipped ambulances and trained paramedics.
              <br />
              <br />
              Our team operates round-the-clock to ensure every second counts when it comes to saving lives.
            </p>

            {/* Phone */}
            <div className="flex items-start gap-4 text-base mb-4">
              <HiOutlinePhone className="mt-1 text-white text-2xl" />
              <div>
                9971759200 <br /> 8178042359
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 text-base mb-4">
              <AiOutlineMail className="mt-1 text-white text-2xl" />
              <div>Info@neshambulanceservice.in</div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 text-base mb-4">
              <BiMap className="mt-1 text-white text-2xl" />
              <div>
                Plot No. 3467 Ground Floor, Nearby Ankush Home, Huda Market, Sector 23, Huda, Gurugram, Haryana 122017
              </div>
            </div>

            <div className="absolute w-80 h-80 bg-white opacity-10 rounded-full bottom-[-100px] right-[-100px] z-0"></div>
          </div>

          {/* Right Form */}
          <div className="px-8 py-12 md:w-1/2 w-full">
            <form
              className="w-full space-y-8"
              action="https://formsubmit.co/Info@neshambulanceservice.in"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://neshambulanceservice.in/"
              />

              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full border-b-2 border-gray-300 focus:border-red-600 outline-none py-3 text-base"
                  />
                </div>
                <div>
                <label className="block text-lg text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 9876543210"
                  className="w-full border-b-2 border-gray-300 focus:border-red-600 outline-none py-3 text-base"
                />
              </div>
              </div>

              
              <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full border-b-2 border-gray-300 focus:border-red-600 outline-none py-3 text-base"
                  />
                </div>

              {/* Message */}
              <div>
                <label className="block text-lg text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Write your message here"
                  className="w-full border-b-2 border-gray-300 focus:border-red-600 outline-none py-3 text-base resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="cursor-pointer bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <LocationMap />
    </>
  );
}
