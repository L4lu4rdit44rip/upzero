import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
function Footer() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_81jjm8n", "template_q6pukmu", form.current, {
        publicKey: "txZ2Knm8iEi6KADk5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <footer className="bg-gray-200 px-4 sm:px-8 pb-8" id="contactUs">
      <div className="container mx-auto pt-10">
        <div className="sm:flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 p-4 md:p-10">
            <div class="text-left">
              <p class="text-4xl md:text-4xl font-bold text-yellow-500">
                Ready for an adventure?
              </p>
              <p class="mb-4 text-sm md:text-base">
                Share your web ideas with us through our form and let's turn
                them into something amazing together!
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <form className="mt-4" ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 my-3"
                >
                  Name
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  placeholder="Enter your name"
                  className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 my-3"
                >
                  Email
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 my-3"
                >
                  Interest
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter your Interest"
                  className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 my-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Describe your interest"
                  className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 font-medium text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
