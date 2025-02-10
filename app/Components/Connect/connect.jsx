"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Connect = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    reason: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLET_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setFormData({
            from_name: "",
            reply_to: "",
            reason: "",
            message: "",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div id="connect" className="connect mt-10 px-12 w-full h-screen">
        <div className="connect_title text-[#D7492B]  h-[20vh] flex gap-2 justify-between items-center">
          <h1 className="text-8xl font-extrabold">Let's Connect</h1>
          <h1 className="text-8xl font-extrabold">
            <div className="line translate-x- -translate-y-[40%]">
              ____________
            </div>
          </h1>
        </div>
        <div className="connect_from h-[80vh] flex items-center justify-center">
          <div className="w-4/6 relative">
            {/* Background decorative element */}
            {/* <div 
          className="absolute inset-0 bg-contain bg-center opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='200' cy='200' r='180' fill='none' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E")`,
          }}
        /> */}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xl font-sans mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xl font-sans mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-xl font-sans mb-2"
                >
                  Reason for Contact
                </label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xl font-sans mb-2"
                >
                  Message for me
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full p-3 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className=" px-5 py-3 rounded-full bg-[#d7482b15] hover:bg-[#D7492B] hover:text-white transition-colors"
                >
                  <h4 className="relative group hover:cursor-pointer text-sm sm:text-base overflow-hidden">
                    <div className="flex flex-col">
                      <span className="group-hover:-translate-y-full transition-transform duration-300">
                        Let's talk
                      </span>
                      <span className="absolute top-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        Let's talk
                      </span>
                    </div>
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D7492B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </h4>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
