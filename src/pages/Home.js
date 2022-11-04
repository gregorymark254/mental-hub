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
                <span>I know it's hard to believe people when they say, "I know how you feel". But actually I know how you feel. 
                    I understand feeling as small as insignificant as humanly as possible and how it can ache in places that you did not know you had inside you.
                    You know, it doesn't matter the efforts you make trying to define yourself, how many times you try to keep both your struggles and
                    life in perspective, you will go to bed every night going over every detail, wondering where you went wrong, and sometimes you can 
                    convince yourself that, things are going to get back to normal and after all that, however long that may be, you will meet people here 
                    that will make you feel worthwhile and the little pieces of your soul will finally come back and all that frustrated past will eventually 
                    begin to fade away. Just hold on ❤.
                </span>
            </div>
        </section>

        <div className="container mx-auto p-4">
            <div className="py-6">
                <div className="md:flex">
                    <div className="w-full bg-[#F4F7ED] p-4 text-center space-y-3">
                        <h3><u>Our Mission</u></h3>
                        <h5>We can’t help everyone, but…Everyone can help someone.</h5>
                        <p>It's easy to run to others. It's so hard to stand on one's own record. You can fake virtue for an audience. You can't fake it in your own eyes. 
                            Your ego is your strictest judge. They run from it. They spend their lives running. It's easier to donate a few thousand to charity and think
                            oneself noble than to base self-respect on personal standards of personal achievement. It's simple to seek substitutes for competence--such 
                            easy substitutes: love, charm, kindness, charity. But there is no substitute for competence.
                        </p>
                    </div>
                    <div className="w-full bg-red-400 p-4 text-center">
                        <h3>Take A pledge</h3>
                        <button>Support Us</button>
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