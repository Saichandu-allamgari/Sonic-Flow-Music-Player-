import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4 footer-card">
      <div className="container  mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Contact Info */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col  ">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400">
              Have questions? We'd love to hear from you!
            </p>
            <div className="mt-4 space-y-3 flex flex-col items-center p-7 gap-6">
              <p className="flex items-center">
                📍 <span className="ml-2">Hyderabad, India</span>
              </p>
              <p className="flex items-center">
                📞 <span className="ml-2">+91 93822185</span>
              </p>
              <p className="flex items-center">
                ✉️ <span className="ml-2">support@musiclibrary.com</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-400">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded bg-gray-700 border-gray-600 text-white"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400">Your Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded bg-gray-700 border-gray-600 text-white"
                  placeholder="example@email.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400">Message</label>
                <textarea
                  className="w-full p-2 border rounded bg-gray-700 border-gray-600 text-white"
                  rows="4"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button className="button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center bg-gray-900  rounded-lg">
        <hr className="border-gray-600 mb-4" />
        <p className="text-gray-400">
          © 2025 Music Library | All Rights Reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">🔗 Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">🔗 Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">🔗 Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
