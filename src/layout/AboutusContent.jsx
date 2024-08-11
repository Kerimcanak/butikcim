import { Link } from "react-router-dom";
import AboutusFigure1 from "/AboutusFigure1.png"
import AboutusTeam1 from "/AboutusTeam1.png"
import AboutusTeam2 from "/AboutusTeam2.jpeg"
import AboutusTeam3 from "/AboutusTeam3.jpeg"

//tailwind css
//let us use react router and links whenever we can
//let us remember this is a component, a part of larger web app

function AboutsContent () {

    return (
        <>

        <div className="flex h-screen w-full">
            <div className="w-1/2 h-3/4 bg-yellow-500">
            <div id="first-section-text" className="flex min-h-full flex-col justify-center text-center ">
                    <div >
                        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
                        <p className="text-gray-600 mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat quidem, quo quaerat quisquam, vero.
                        </p>
                        <Link className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-400">Learn More</Link>
                    </div>
                </div>
            </div>
            
            <div className="w-1/2 h-3/4 bg-black"><img src={AboutusFigure1} className="mx-auto max-w-[600px]"/></div>
            
        </div>

        <div id="second-section" className="bg-white w-full flex justify-center items-center p-4 gap-3">
            <div className="max-w-[1200px] w-full text-center flex-column md:flex-row">
                <div>
                <span className="text-lg font-bold text-red-500 mb-8">Problems trying</span>
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h1>
                </div>
                <div>
                <p className="text-gray-600 mb-8">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics                 
                </p>
                </div>
            </div>
        </div>
        <div id="third-section" className="bg-white w-full flex justify-center items-center">
            <div className="max-w-[1200px] w-full flex flex-col items-center gap-24">
                <div className="flex flex-col items-center">
                    <span className="text-8xl font-bold text-gray-800">45k</span>
                    <span className="text-gray-600">Customers served</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-8xl font-bold text-gray-800">90k</span>
                    <span className="text-gray-600">Lines of code written</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-8xl font-bold text-gray-800">1m</span>
                    <span className="text-gray-600">Projects completed</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-8xl font-bold text-gray-800">100k</span>
                    <span className="text-gray-600">Hours of work invested</span>
                </div>
            </div>
        </div>
        <div id="video-section" className="bg-white w-full flex justify-center items-center p-24">
          <div className="max-w-[1200px] w-full flex justify-center items-center">
            <div className="relative aspect-video w-full">
              <iframe 
                className="object-contain w-full h-full" 
                width="560" 
                height="315" 
                src="https://www.youtube-nocookie.com/embed/XWh6U3fsL9k?si=2m_-dKLDPWdeKz52" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div id="team-section" className="bg-white w-full flex justify-center items-center p-4 gap-3 pb-24">
            <div className="max-w-[1200px] w-full text-center">
                <h1 className="text-8xl font-bold text-gray-800 mb-8">Meet our team.</h1>
                <p className="text-2xl text-gray-600 mb-8">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics                 
                </p>
            </div>
        </div>
        <div id="first-member" className="bg-white w-full flex justify-center items-center p-4 gap-3">
            <div className="max-w-[1200px] w-full text-center">
                <img src={AboutusTeam1} className="w-4/5 mt-8 pb-6 mx-auto "/>
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Username</h1>
                <p className="text-gray-600 mb-8">
                Profession               
                </p>
                <div className="flex justify-center mt-8">
                    <Link to="https://facebook.com" className="mx-4 inline-block" title="Facebook">
                        <i className="fa-brands fa-facebook fa-4x text-blue-500 hover:text-pink-600"></i>
                    </Link>
                    <Link to="https://instagram.com" className="mx-4 inline-block" title="Instagram">
                        <i className="fa-brands fa-instagram fa-4x text-pink-600 hover:text-blue-500"></i>
                    </Link>
                    <Link to="https://twitter.com" className="mx-4 inline-block" title="Twitter">
                        <i className="fa-brands fa-twitter fa-4x text-blue-500 hover:text-pink-600"></i>
                    </Link>
                </div>
            </div>
        </div>
        <div id="second-member" className="bg-white w-full flex justify-center items-center p-4 gap-3">
            <div className="max-w-[1200px] w-full text-center">
                <img src={AboutusTeam2} className="w-4/5 mt-8 pb-6 mx-auto "/>
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Username</h1>
                <p className="text-gray-600 mb-8">
                Profession               
                </p>
                <div className="flex justify-center mt-8">
                    <Link to="https://facebook.com" className="mx-4 inline-block" title="Facebook">
                        <i className="fa-brands fa-facebook fa-4x text-blue-500 hover:text-pink-600"></i>
                    </Link>
                    <Link to="https://instagram.com" className="mx-4 inline-block" title="Instagram">
                        <i className="fa-brands fa-instagram fa-4x text-pink-600 hover:text-blue-500"></i>
                    </Link>
                    <Link to="https://twitter.com" className="mx-4 inline-block" title="Twitter">
                        <i className="fa-brands fa-twitter fa-4x text-blue-500 hover:text-pink-600"></i>
                    </Link>
                </div>
            </div>
        </div>
        <div id="third-member" className="bg-white w-full flex justify-center items-center p-4 gap-3">
            <div className="max-w-[1200px] w-full text-center">
                <img src={AboutusTeam3} className="w-4/5 mt-8 pb-6 mx-auto "/>
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Username</h1>
                <p className="text-gray-600 mb-8">
                Profession               
                </p>
                <div className="flex justify-center mt-8">
                    <Link to="https://facebook.com" className="mx-4 inline-block" title="Facebook">
                        <i className="fa-brands fa-facebook fa-4x text-blue-500 hover:text-pink-600"></i>
                    </Link>
                    <Link to="https://instagram.com" className="mx-4 inline-block" title="Instagram">
                        <i className="fa-brands fa-instagram fa-4x text-pink-600 hover:text-blue-500"></i>
                    </Link>
                    <Link to="https://twitter.com" className="mx-4 inline-block" title="Twitter">
                        <i className="fa-brands fa-twitter fa-4x text-blue-500 hover:text-pink-600"></i>
                    </Link>
                </div>
            </div>
        </div>

        </>
    )
}

export default AboutsContent