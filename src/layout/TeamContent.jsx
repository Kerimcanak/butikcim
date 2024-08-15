import { Link } from "react-router-dom";
import TeamHero from "/teamHero.jpeg";
import TeamHeroTable1 from "/TeamHeroTable1.jpeg"
import TeamHeroTable2 from "/TeamHeroTable2.jpeg"
import TeamHeroTable3 from "/TeamHeroTable3.jpeg"
import TeamHeroTable4 from "/TeamHeroTable4.jpeg"
import TeamMembers from "../components/TeamMembers.";

//tailwind css
//let us use react router and links whenever we can
//let us remember this is a component, a part of larger web app

function TeamContent() {
  return (
    <>
      <div
        id="team-section"
        className="bg-white w-full flex justify-center items-center p-4 gap-3 pb-24"
      >
        <div className="max-w-[1200px] w-full text-center">
          <p className="text-2xl text-gray-600 mb-8 font-bold">WHAT WE DO</p>
          <h1 className="text-6xl font-bold text-gray-800 mb-8">
            Innovation tailored for you
          </h1>
          <p className="text-black text-2xl mb-8 font-bold">
            Home <span className="text-gray-600 font-thin"> ⟩ Team</span>
          </p>
        </div>
      </div>
      <div id="hero" className="w-full flex flex-col md:flex-row gap-6">
        <img src={TeamHero} className="w-1/2" />
        <div id="hero-collage" className="w-1/2 flex flex-wrap gap-16">
          <div className="w-5/12 bg-cover bg-no-repeat bg-center h-64 bg-[url('/TeamHeroTable1.jpeg')]"></div>
          <div className="w-5/12 bg-cover bg-no-repeat bg-center h-64 bg-[url('/TeamHeroTable2.jpeg')]"></div>
          <div className="w-5/12 bg-cover bg-no-repeat bg-center h-64 bg-[url('/TeamHeroTable3.jpeg')]"></div>
          <div className="w-5/12 bg-cover bg-no-repeat bg-center h-64 bg-[url('/TeamHeroTable4.jpeg')]"></div>
        </div>
      </div>
      <TeamMembers />

      <div className="flex flex-col items-center justify-center h-screen p-4 
    bg-white">
        <div className="max-w-md mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold">Get answers to all your questions.</h2>
        <p className="text-xl leading-relaxed mb-8">
            Problems trying to resolve the conflict between the two major realms 
    of classical physics.
        </p>
        </div>
        <Link to="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
        CONTACT OUR COMPANY
        </Link>
        <div className="flex justify-center mt-8">
        <Link to="https://twitter.com" className="mx-4 inline-block" title="Twitter">
            <i className="fa-brands fa-twitter fa-2x text-gray-400 hover:text-gray-600"></i>
        </Link>
        <Link to="https://facebook.com" className="mx-4 inline-block" title="Facebook">
            <i className="fa-brands fa-facebook fa-2x text-gray-400 hover:text-gray-600"></i>
        </Link>
        <Link to="https://instagram.com" className="mx-4 inline-block" title="LinkedIn">
            <i className="fa-brands fa-instagram fa-2x text-gray-400 hover:text-gray-600"></i>
        </Link>
        <Link to="https://linkedin.com" className="mx-4 inline-block" title="Instagram">
            <i className="fa-brands fa-linkedin fa-2x text-gray-400 hover:text-gray-600"></i>
        </Link>
        </div>
    </div>

    </>
  );
}

export default TeamContent;

