import React from 'react'
import { FaFacebookF, FaTwitter, FaMailBulk } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <main className="bg-[#1B2430] text-white">
        <div className="container mx-auto p-4">
          <div className="flex justify-end space-x-4">
            <p><FaMailBulk/></p>
            <p><FaFacebookF/></p>
            <p><FaTwitter/></p>
          </div>
        </div>
      </main>
    </header>
  )
}

export default Header
