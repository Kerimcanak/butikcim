import { Link } from "react-router-dom";

const TeamMembers = () => {
  return (
    <div id="team-members-table" className="flex flex-col md:flex-row md:justify-center md:items-center md:w-full">
      <div id="first-member" className="bg-white p-4">
        <div className="bg-white w-full flex justify-center items-center p-4 gap-3">
          <div className="max-w-[1200px] w-full text-center">
            <div
              className="relative h-72 w-4/5 mt-8 mb-8 mx-auto bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('https://media.licdn.com/dms/image/v2/D4D03AQHHikjSDQq9xw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708951317641?e=1729123200&v=beta&t=g7NwSvz4g18KM60O7jvqeBC-iaIqKgZDAw0q6GdeJPI')`,
              }}
            ></div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Erhan FIRAT
            </h1>
            <p className="text-gray-600 mb-8">Project Owner</p>
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
          <div
              className="relative h-72 w-4/5 mt-8 mb-8 mx-auto bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('https://media.licdn.com/dms/image/v2/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1635783306921?e=1729123200&v=beta&t=UxuJSiy79muokf6otetC1hqeb0McaSrfa_TYEEb2Mz4')`,
              }}
            ></div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Gökhan Özdemir
            </h1>
            <p className="text-gray-600 mb-8">Scrum Master</p>
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
          <div
              className="relative h-72 w-4/5 mt-8 mb-8 mx-auto bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url('https://media.licdn.com/dms/image/v2/D4D03AQHe9g0EkxCVMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712608426819?e=1729123200&v=beta&t=TbxSVcFOXCoOV7zdEh_EwN0fTIh0w8H8XBotgtrW_VY')`,
              }}
            ></div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Kerimcan AK
            </h1>
            <p className="text-gray-600 mb-8">Front-end Developer</p>
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
