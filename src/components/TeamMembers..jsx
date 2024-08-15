import { Link } from "react-router-dom";

const TeamMembers = () => {
  return (
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
  );
};

export default TeamMembers;
