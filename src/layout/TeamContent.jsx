import { Link } from "react-router-dom";
import TeamHero from "/teamHero.jpeg";
import TeamHeroTable1 from "/TeamHeroTable1.jpeg"
import TeamHeroTable2 from "/TeamHeroTable2.jpeg"
import TeamHeroTable3 from "/TeamHeroTable3.jpeg"
import TeamHeroTable4 from "/TeamHeroTable4.jpeg"

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
          <h1 className="text-8xl font-bold text-gray-800 mb-8">
            Innovation tailored for you
          </h1>
          <p className="text-black text-2xl mb-8 font-bold">
            Home <span className="text-gray-600 font-thin"> ⟩ Team</span>
          </p>
        </div>
      </div>
      <div id="hero">
        <img src={TeamHero} className="w-full" />
        <div className="flex flex-row md:justify-center md:items-center md:w-full">
          <div className="bg-cover bg-no-repeat bg-center w-full h-[300px] md:w-[300px] md:h-[200px] bg-[url('/TeamHeroTable1.jpeg')]"  ></div>
          <div className="bg-cover bg-no-repeat bg-center w-full h-[300px] md:w-[300px] md:h-[200px] bg-[url('/TeamHeroTable2.jpeg')]"  ></div>
        </div>
        <div className="flex flex-row md:justify-center md:items-center md:w-full">
          <div className="bg-cover bg-no-repeat bg-center w-full h-[300px] md:w-[300px] md:h-[200px] bg-[url('/TeamHeroTable3.jpeg')]"  ></div>
          <div className="bg-cover bg-no-repeat bg-center w-full h-[300px] md:w-[300px] md:h-[200px] bg-[url('/TeamHeroTable4.jpeg')]"  ></div>
        </div>
      </div>
      <div id="team-members-table" className="flex flex-col md:flex-row md:justify-center md:items-center md:w-full">
        <div id="first-member" className="bg-white p-4">
          <div className="bg-white w-full flex justify-center items-center p-4 gap-3">
            <div className="max-w-[1200px] w-full text-center">
              <img
                src={`https://picsum.photos/200/300?random=${Math.floor(
                  Math.random() * 1000
                )}`}
                className="w-4/5 mt-8 pb-6 mx-auto"
              />
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Nicholas Wilson
              </h1>
              <p className="text-gray-600 mb-8">Full stack developer</p>
              <div className="flex justify-center mt-8">
                <Link
                  to="https://facebook.com"
                  className="mx-4 inline-block"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook fa-4x text-blue-500 hover:text-pink-600"></i>
                </Link>
                <Link
                  to="https://instagram.com"
                  className="mx-4 inline-block"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram fa-4x text-pink-600 hover:text-blue-500"></i>
                </Link>
                <Link
                  to="https://twitter.com"
                  className="mx-4 inline-block"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter fa-4x text-blue-500 hover:text-pink-600"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4">
          <div id="second-member" className="bg-white w-full flex justify-center items-center p-4 gap-3">
            <div className="max-w-[1200px] w-full text-center">
              <img
                src={`https://picsum.photos/200/300?random=${Math.floor(
                  Math.random() * 1000
                )}`}
                className="w-4/5 mt-8 pb-6 mx-auto"
              />
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Emily Johnson
              </h1>
              <p className="text-gray-600 mb-8">Front end developer</p>
              <div className="flex justify-center mt-8">
                <Link
                  to="https://facebook.com"
                  className="mx-4 inline-block"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook fa-4x text-blue-500 hover:text-pink-600"></i>
                </Link>
                <Link
                  to="https://instagram.com"
                  className="mx-4 inline-block"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram fa-4x text-pink-600 hover:text-blue-500"></i>
                </Link>
                <Link
                  to="https://twitter.com"
                  className="mx-4 inline-block"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter fa-4x text-blue-500 hover:text-pink-600"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4">
          <div id="third-member" className="bg-white w-full flex justify-center items-center p-4 gap-3">
            <div className="max-w-[1200px] w-full text-center">
              <img
                src={`https://picsum.photos/200/300?random=${Math.floor(
                  Math.random() * 1000
                )}`}
                className="w-4/5 mt-8 pb-6 mx-auto"
              />
              <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Michael Brown
              </h1>
              <p className="text-gray-600 mb-8">Back end developer</p>
              <div className="flex justify-center mt-8">
                <Link
                  to="https://facebook.com"
                  className="mx-4 inline-block"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook fa-4x text-blue-500 hover:text-pink-600"></i>
                </Link>
                <Link
                  to="https://instagram.com"
                  className="mx-4 inline-block"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram fa-4x text-pink-600 hover:text-blue-500"></i>
                </Link>
                <Link
                  to="https://twitter.com"
                  className="mx-4 inline-block"
                  title="Twitter"
                >
                  <i className="fa-brands fa-twitter fa-4x text-blue-500 hover:text-pink-600"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default TeamContent;

