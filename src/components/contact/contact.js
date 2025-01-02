import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className=" rounded-lg shadow-md flex flex-wrap w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-7xl font-bold text-brown-500 mb-4">Send a Message</h1>
          <p className="text-gray-600 mb-6">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you'd like me to work on.
          </p>
          <div className="flex items-center mb-4">
            {/* Use the imported Material-UI icon component */}
            <EmailIcon className="text-brown-500 mr-2" />
            <p className="text-gray-800">olatomidefagbohun@gmail.com</p>
          </div>
          <div className="flex items-center mb-4">
            {/* Use the imported Material-UI icon component */}
            <LocationOnIcon className="text-brown-500 mr-2" />
            <p className="text-gray-800">Abuja, Nigeria</p>
          </div>
          <div className="flex items-center">
            {/* Use the imported Material-UI icon component */}
            <PhoneIcon className="text-brown-500 mr-2" />
            <p className="text-gray-800">+234-7044-813-621</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-6 md:pl-6">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-brown-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-brown-300"
              />
            </div>
            <div>
              <label
                htmlFor="reason"
                className="block text-gray-700 font-medium mb-1"
              >
                Reason for Message
              </label>
              <select
                id="reason"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-brown-500"
              >
                <option value="">Select a reason</option>
                <option value="project">New Project Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Write your message here
              </label>
              <textarea
                id="message"
                placeholder="Hi Olatomide,"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 h-32 focus:ring focus:ring-brown-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brown-500 text-white py-2 rounded-lg font-medium hover:bg-brown-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
