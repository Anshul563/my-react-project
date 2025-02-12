import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center flex-grow bg-white dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 bg-[#1f6462] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-[#1f6462] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-[#1f6462] rounded-full animate-bounce"></div>
        </div>
      ) : (
        <div className="">
          <div className="flex flex-col h-full md:flex-row flex-grow">
            <div className="flex-1 flex justify-center items-center">
              <div className="max-h-screen w-full p-4">
                <div className="max-w-full flex flex-col items-center justify-center text-center">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1f6462]">Let's Talk</h1>
                </div>
                <form className="mx-auto mt-16 max-w-xl sm:mt-20 mb-20">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-[#1f6462]">First name</label>
                      <div className="mt-2.5">
                        <input required type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="Your First Name" className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1f6462] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1f6462] sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-[#1f6462]">Last name</label>
                      <div className="mt-2.5">
                        <input required type="text" name="last-name" id="last-name" autoComplete="family-name" placeholder="Your Last Name" className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1f6462] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1f6462] sm:text-sm sm:leading-6" />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[#1f6462]">Email</label>
                      <div className="mt-2.5">
                        <input required type="email" name="email" id="email" autoComplete="email" placeholder="Your Email Address" className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1f6462] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1f6462] sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-[#1f6462]">Phone number</label>
                      <div className="mt-2.5">
                        <input required type="tel" name="phone" id="phone" autoComplete="tel" placeholder="Your Phone Number" className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1f6462] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1f6462] sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-[#1f6462]">Message</label>
                      <div className="mt-2.5">
                        <textarea name="message" id="message" rows="4" placeholder="Share your thoughts..." className="block w-full rounded-md border-0 px-3.5 py-2 text-[#1f6462] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1f6462] sm:text-sm sm:leading-6"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="mt-7">
                    <button type="submit" className="bg-[#1f6462] text-white rounded-sm py-2 w-full block">Submit →</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510336736!2d76.76356760616179!3d28.644287352702644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1739337208835!5m2!1sen!2sin"
                width="100%"
                height="90%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <Footer />
        </div>
      )}
      
    </div>
  );
};

export default Contact;