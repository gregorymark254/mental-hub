import React from 'react'

const Contact = () => {
  return (
    <main className="bg-[#F4F7ED] min-h-screen">
      <div className="container mx-auto p-4">
        <div className="bg-white mt-14 p-4">
          <div className="text-center text-red-500 py-6">
            <h1>CONNECT WITH US TODAY</h1>
          </div>
          <div className="md:flex">
            <div className="w-full p-6 space-y-4 text-justify">
              <p>We started this page to help us find us because we are strong supporters of John Bowbly (a British psychologist, psychiatrist, and psychoanalyst, notable for his interest in child development and for his pioneering work.)
                "Human beings develop physically, mentally and socially in relationships". It doesn't matter the strategy. Let's share.
              </p>
              <h5>&#10148; mentalhealthhub3@gmail.com</h5>
              <h5>&#10148; +254 702 032 604</h5>
              <h5>&#10148; +254 777 487 187</h5>
              <h5>&#10148; Nairobi,Kenya.</h5>
            </div>
            <div className="w-full p-6">
              <form action="mailto:mentalhealthhub3.com" method="post" encType="text/plain">
                <div className="flex space-x-2">
                  <label htmlFor="name">
                    <input 
                      type="text" 
                      required
                      placeholder="Name"
                      className="px-3 py-2 mt-2 w-full border-b-2 border-b-black"
                    />
                  </label>
                  <label htmlFor="email">
                    <input 
                      type="email" 
                      required
                      placeholder="Email Address"
                      className="px-3 py-2 mt-2 w-full border-b-2 border-b-black"
                    />
                  </label>
                </div>
                <label htmlFor="subject">
                  <input 
                    type="text" 
                    required
                    placeholder="Subject"
                    className="px-3 py-2 mt-2 border-b-2 w-full border-b-black"
                  />
                </label>
                <label htmlFor="number">
                  <input 
                    type="text" 
                    required
                    placeholder="Phone Number"
                    className="px-3 py-2 mt-2 border-b-2 w-full border-b-black"
                  />
                </label>
                <label htmlFor="message">
                  <textarea 
                  cols="30" rows="5"
                  required
                  placeholder="Message"
                  className="px-3 py-2 mt-2 border-b-2 w-full border-b-black"
                  ></textarea>
                </label>
                <div className="text-center">
                  <button type="submit" className="text-red-500 py-2 px-4 hover:text-black">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
