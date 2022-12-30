import React from 'react'
import event from '../images/event.jpg'
import event1 from '../images/event1.jpg'
import event2 from '../images/event2.jpg'
import event3 from '../images/event3.jpg'

const Home = () => {
  return (
    <section>
      <main className="min-h-screen">
        <section className="hero">
            <div className="hero-inner">
                <h1>Welcome to Mental health hub foundation.</h1>
                <span>It's a charity based organization that assists and works close with organizations that have same goal - Equality. </span>
            </div>
        </section>

        <div className="container mx-auto p-4">
              <div className="md:grid grid-cols-2 gap-4 p-4">
                <div>
                    <p>Mobilizing resources and skills that empower vulnerable communities.
                      MHHF aims at impacting the society and ensuring equality in slum and rural areas through good if not quality education and healthcare.
                      The founder and Executive personnel, Christine Akombo is a mentor and works closely with several Non
                       governmental organisations including Global Give Back Circle( GGBC) as a volunteer mentor is equally a mental health enthusiast.
                    </p>
                    <p>
                     Nothing gives anyone fulfilment than knowing exactly where their money money is going because of these,
                      She saw it fit to partner with Makongo computer college located in one of the vulnerable areas-Mukuru kwa Ruben to help provide a good education because she believes in a good education and youth empowerment.
                      "Create independent youth through an education"
                      MHHF works to improving lives regardless of age, origin, gender and faith
                    </p>
                </div>
                 <div>
                    <img src="https://i.postimg.cc/RVRMKkmG/mental4.jpg" alt="" />
                </div>
              </div> 
              <div className="md:grid grid-cols-2 gap-4 p-4">
                <div>
                    <img src="https://i.postimg.cc/BQTF0KNw/mental3.jpg" alt="" />
                </div>
                <div>
                    <p>
                    Our work:
                    Giving a quality education is the best way to create equality around the world.
                    However, this has proven to be facing the biggest challenge- vulnerability.
                    Makongo computer college is helping solve this by offering computer skills to students with the help of donations and  volunteers.
                    We are looking to extend this deed to abandoned children in orphanages through sponsorships.
                    For only 400 dollars a year, you could help a child stay in school and still feel included.
                  </p>
                </div>
              </div> 
            <div className="py-6">
                <div className="md:flex">
                    <div className="w-full bg-[#F4F7ED] p-4 text-center space-y-3">
                        <h3><u>Our Mission</u></h3>
                        <h5>Inclusivity and restoring love laughter and smiles.</h5>
                        <p>This is more than just charity for us. It is about saving lives and protecting amilies and communities because the only thing these families hope
                            for is a decent life. It's simple to seek substitutes for competence--such easy substitutes: love, charm, kindness, charity. But there is no substitute for competence.
                        </p>
                    </div>
                    <div className="w-full bg-red-400 p-4 text-center">
                        <h3>Take A pledge</h3>
                        <h4>Support Us</h4>
                        <p>Nothing feels better than knowing exactly who your money is going to help. We have partnered with Makongo Computer Collage to help restore humanity.</p>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="w-full bg-[#1AA59A] p-4 text-center space-y-3">
                        <h3><u>Latest News</u></h3>
                        <h5>For it is in giving that we receive.</h5>
                        <p>Remember, if you ever need a helping hand, you’ll find one at the end of your arm. As you grow older, you will discover that you have two hands:
                            one for helping yourself, the other for helping others. There is no exercise better for the heart than reaching down and lifting people up. 
                            Your “good old days” are still ahead of you, may you have many of them.
                        </p>
                    </div>
                    <div className="w-full bg-[#1B5A7A] p-4 text-center">
                        <h3>Subscribe</h3>
                        <p>Subscribe to our chanel</p>
                        <form action="mailto:mentalhealthhub3@gmail.com" method="post">
                            <label htmlFor="email">
                                <input 
                                    type="email"
                                    required
                                    placeholder="Enter your email here*"
                                    className="px-3 py-2 mt-2 mb-4 border-b border-b-black bg-[#1B5A7A]"
                                />
                            </label> <br />
                            <button className="text-white hover:text-blue-900">join</button>
                        </form>   
                    </div>
                </div>
            </div>
            <div>
                <h2 className="py-4 text-center">OUR EVENTS</h2>
                <div className="md:grid grid-cols-3 gap-4">
                    <div>
                        <img src={event} alt="" />
                        <p>You fight for what’s right, you set that vision of where we could be—and then you go after it yourself.</p>
                    </div>
                    <div>
                        <img src={event1} alt="" />
                        <p>We try to come alongside people and interact with our supporters so that they know that we see them, we’re with them, and we’re in this together.</p>
                    </div>
                    <div>
                        <img src={event2} alt="" />
                        <p>The best way to find yourself is to lose yourself in the service of others. A few people of integrity can go a long way.</p>
                    </div>
                </div>
            </div>

            <div className="py-4">
                <img src={event3} alt="" />
            </div>

            <div className="py-4">
                <h2 className="py-4 text-center">Latest News</h2>
                <div className="md:grid grid-cols-3 gap-4 ">
                    <div className="py-4">
                        <h4><u>It always seems impossible until it’s done.</u></h4>
                        <p>“The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. If you go out and make some good things happen, 
                            you will fill the world with hope, you will fill yourself with hope.” – Barack Obama
                        </p>
                    </div>
                    <div className="py-4">
                        <h4><u>Anticipate charity by preventing poverty.</u></h4>
                        <p>The power of youth is the common wealth for the entire world. The faces of young people are the faces of our past, our present and our future. No segment
                            in the society can match with the power, idealism, enthusiasm and courage of the young people.
                        </p>
                    </div>
                    <div className="py-4">
                        <h4><u>We rise by lifting others.</u></h4>
                        <p>I feel like it's actually everybody's responsibility to use whatever platform they have to do good in the world, basically, and to try to make our society better, 
                            whether you're an accountant or an activist or an athlete or whatever it is. I think it's everybody's responsibility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </section>
  )
}

export default Home
