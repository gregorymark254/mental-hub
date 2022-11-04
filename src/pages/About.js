import React from 'react'
import image from '../images/about.jpg'

const About = () => {
  return (
    <main>
      <div className="bg-[#F4F7ED] min-h-screen">
        <div className="container mx-auto p-4">
          <div className="bg-white p-8 m-4">
            <div className="text-center text-red-500 py-6">
              <h1>About</h1>
            </div>
            <div className="py-4 space-y-3 text-justify">
              <p>Mental health hub Foundation is working in line and still looking to coordinate together with different organizations with similar goals. 
                Of ensuring we have put children protection projects in place, including mentoring, provided a good education to children,
                protected the mental health of each and every individual in the communities, provide healthcare to the elderly to avoid subjecting them
                to stigma and empowered women, and girls subjected to gbv and eventually, provide equity.
              </p>
              <p>Underprivileged, lack of access and years and years of living with health conditions that have not been correctly managed, 
                children in communities struggling to attain basic education and not good if not quality because of social groups is what came to my attention.
                I know most elderly people in my community who deny themselves healthcare, so they can save money for their children and grandchildren to
                provide a basic meal.
              </p>
              <p>They know if they ever get to spend the little money they get, they might impoverish those who depend on them.
                Behind this pandemic, covid-19 has caused devastation that has equally uncovered, ripped away the bandage from really old wounds like, 
                health access, access to an education, gender based violence and inequality.
              </p>
            </div>

            <img src={image} alt="about" />

            <div className="text-center mt-6">
              <button className="bg-[#1B5A7A] text-white rounded-full px-6 py-2">SUPPORT US TODAY</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
