import React from 'react'

const Footer = () => {
  return (
    <footer>
      <main className="bg-[#F4F7ED] ">
        <div className="container mx-auto p-4">
          <div className="md:grid grid-cols-3 gap-4">
            <div className="py-2">
              <h3>CONTACT US</h3>
              <p>&#10148; mentalhealthhub3@gmail.com</p>
              <p>&#10148; +254 702 032 604</p>
              <p>&#10148; +254 777 487 187</p>
              <p>&#10148; Nairobi,Kenya.</p>
            </div>
            <div className="py-2">
              <h3>CONNECT WITH US</h3>
              <p className="hover:text-red-400"><a href="https://www.facebook.com/s.z.akombo/?ref=page_internal">&#10148; Facebook</a></p>
              <p className="hover:text-red-400"><a href="https://www.facebook.com/s.z.akombo/?ref=page_internal">&#10148; Twiter</a></p>
            </div>
            <div className="py-2">
              <h3>SUBSCRIBE</h3>
              <form action="mailto:mentalhealthhub3@gmail.com" method="post">
                <label htmlFor="email">
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address"
                    className="px-3 bg-[#F4F7ED] py-2 mt-2 mb-4 border-b border-b-black placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  />
                </label>
                <button className="text-white bg-blue-900 rounded-full ml-4 px-5 py-2 hover:bg-blue-600">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-[#1AA59A] text-[#1B5A7A]">
          <div className="container mx-auto p-4 text-center">
            <h3>REGISTERED CHARITY NUMBER : +254 702 032 604</h3>
          </div>
        </div>

        <div className="bg-[#1B5A7A] text-white">
          <div className="container mx-auto p-2 text-center">
            <p>&copy; 2023 by Mental Health Hub.</p>
          </div>
        </div>

      </main>
    </footer>
  )
}

export default Footer
