import React from 'react'

const Support = () => {
  return (
    <main>
      <div className="bg-[#F4F7ED] min-h-screen">
        <div className="container mx-auto p-4">
          <div className="bg-white p-2 m-4">
            <div className="text-center text-red-500 py-6">
              <h1>SUPPORT US</h1>
            </div>

            <div className="md:flex">
              <div className="w-full p-6">
                <img src="https://i.postimg.cc/cCKwCCmz/mental2.jpg" width="500" height="400" alt="" />
              </div>
              <div className="w-full p-6 space-y-4">
                <h3>VOLUNTEER</h3>
                <p>These families can come from nothing and make something out of themselves either through there hard work or compete and win.
                  But they cannot be able to compete when they are confined and defined by the small helpless world they live in, in this narrow way that makes them think and believe is normal.
                  Volunteer to mentor them. Their mental health matters.
                </p>
                <p>Volunteering is the ultimate exercise in democracy.Everybody can be great. Because anybody can serve. 
                  Wherever you turn, you can find someone who needs you. Even if it is a little thing, do something for which there is no pay but
                  the privilege of doing it. Remember, you don’t live in the world all of your own.
                </p>
              </div>
            </div>

            <div className="md:flex">
              <div className="w-full p-6">
                <img src="https://i.postimg.cc/J4kjWytD/mental1.jpg" width="500" height="400" alt="" />
              </div>
              <div className="w-full p-6 space-y-4">
                <h3>FUNDRAISE</h3>
                <p>When it comes to fundraising for a social enterprise, if you are pursuing your true passion, you’ll learn to become great at 
                  your craft because you’ll care so much about perfecting the skills necessary to make that dream a reality. Help others without
                  any reason and give without the expectation of receiving anything in return.
                </p>
              </div>
            </div>

            <br />
            <hr />

            <div>
              <h1 className="text-center py-4 text-[#1B5A7A]">WAYS YOU CAN DONATE</h1>
              <div className="md:grid grid-cols-4 text-center">
                <div className="bg-[#FF7E67] p-4 h-60">
                  <h3>In Person</h3>
                  <p>Every contribution counts. Everyone can make a difference. Just start with yourself.</p>
                </div>
                <div className="bg-[#BBDC2F] p-4 h-60">
                  <h3>Online</h3>
                  <p>You can reach to us via our email and social media pages to help save a person. We rise by lifting others.</p>
                </div>
                <div className="bg-[#1B5A7A] p-4 h-60">
                  <h3>Over the phone</h3>
                  <p>Life is for service. Contact us and get connected as we share contributions to various people and help the less fortunate.</p>
                </div>
                <div className="bg-[#1AA59A] p-4 h-60">
                  <h3>By Mail</h3>
                  <p>Use our email and get to us to help save someone. Be the change you want to see in the world.</p>
                </div>
              </div>
            </div>

          </div>

          

        </div>
      </div>
    </main>
  )
}

export default Support
