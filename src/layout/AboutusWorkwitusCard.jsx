//tailwind css
//let us use react router and links whenever we can
//let us remember this is a component, a part of larger web app

import { Link } from "react-router-dom";

const AboutusWorkwitusCard = () => (
  <div className="bg-sky-600 w-full flex justify-center items-center p-4 text-white">
    <div className="max-w-[1200px] w-full flex flex-col items-center gap-4 pb-36 pt-36">
    <h2 className="text-2xl font-bold mb-8">WORK WITH US</h2>
      <h1 className="text-8xl font-bold mb-8">Now Let’s grow Yours</h1>
      <p className="text-2xl mb-8">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics                 
      </p>
      <Link to="#" className="text-4xl rounded-md bg-sky-600 px-4 py-2 text-white outline outline-2 outline-white">
        Join us
      </Link>
    </div>
  </div>
);

export default AboutusWorkwitusCard;
