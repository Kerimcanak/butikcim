import { Link } from "react-router-dom";
import AboutusTeam1 from "/AboutusTeam1.png"
import AboutusTeam2 from "/AboutusTeam2.jpeg"
import AboutusTeam3 from "/AboutusTeam3.jpeg"
import TeamMembers from "../components/TeamMembers.";

//tailwind css
//let us use react router and links whenever we can
//let us remember this is a component, a part of larger web app

function AboutsContent () {

    return (
        <>
        <div class="w-full flex flex-col items-center justify-between md:flex-row">
        <div class="bg-white w-1/2 h-auto p-4 m-4 text-center">
            <span className="text-lg font-bold text-red-500 mb-8">Problems trying</span>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h1>
        </div>
        <div class="bg-white w-1/2 h-auto p-4 m-4 text-center">
            <p className="text-gray-600 mb-8">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
        </div>
        </div>
        <div id="third-section" className="bg-white w-full flex justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center gap-24 md:flex-row">
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


        <TeamMembers />


        </>
    )
}

export default AboutsContent