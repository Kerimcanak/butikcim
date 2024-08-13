import { Link } from "react-router-dom";
import TeamMember1 from "/TeamMember1.png"
import TeamMember2 from "/TeamMember2.jpeg"
import TeamMember3 from "/TeamMember3.jpeg"

//tailwind css
//let us use react router and links whenever we can
//let us remember this is a component, a part of larger web app

function TeamContent () {

    return (
        <>
        <div id="team-section" className="bg-white w-full flex justify-center items-center p-4 gap-3 pb-24">
            <div className="max-w-[1200px] w-full text-center">
                <h1 className="text-8xl font-bold text-gray-800 mb-8">Meet our team.</h1>
                <p className="text-2xl text-gray-600 mb-8">
                We are a team of passionate developers who are dedicated to creating the best solutions for our clients.                 
                </p>
            </div>
        </div>

        <div id="team-members-table" class="flex flex-col md:flex-row md:justify-center md:items-center md:w-full">
        <div id="first-member" class="bg-white p-4">        
            <div  className="bg-white w-full flex justify-center items-center p-4 gap-3">
            <div className="max-w-[1200px] w-full text-center">
                <img src={TeamMember1} className="w-4/5 mt-8 pb-6 mx-auto "/>
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Nicholas Wilson</h1>
                <p className="text-gray-600 mb-8">
                Full stack developer               
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
        </div></div>
        <div class="bg-white p-4">
        <div id="second-member" className="bg-white w-full flex justify-center items-center p-4 gap-3">
            <div className="max-w-[1200px] w-full text-center">
                <img src={TeamMember2} className="w-4/5 mt-8 pb-6 mx-auto "/>
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Emily Johnson</h1>
                <p className="text-gray-600 mb-8">
                Front end developer               
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
        </div>
        <div class="bg-white p-4">
        <div id="third-member" className="bg-white w-full flex justify-center items-center p-4 gap-3">
            <div className="max-w-[1200px] w-full text-center">
                <img src={TeamMember3} className="w-4/5 mt-8 pb-6 mx-auto "/>
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Michael Brown</h1>
                <p className="text-gray-600 mb-8">
                Back end developer               
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
        </div>
        </div>


        </>
    )
}

export default TeamContent
