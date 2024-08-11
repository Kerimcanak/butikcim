const AboutusLogoList = () => {
  return (
    <div className="bg-zinc-50 flex flex-col items-center space-y-6 md:flex-row justify-center md:items-center pb-10 pt-6 gap-6">
       <div id="team-section" className="w-full flex justify-center items-center mt-32">
            <div className="max-w-[1200px] w-full text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-8">Big Companies Are Here</h1>
                <p className="text-xl text-gray-600">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics                 
                </p>
            </div>
      </div>
      <div className="text-9xl text-gray-500">
        <i className="fab fa-hooli"></i>
      </div>
      <div className="text-9xl text-gray-500">
        <i className="fab fa-pied-piper"></i>
      </div>
      <div className="text-9xl text-gray-500">
        <i className="fab fa-stripe"></i>
      </div>
      <div className="text-9xl text-gray-500">
        <i className="fab fa-aws"></i>
      </div>
      <div className="text-9xl pb-24 text-gray-500">
        <i className="fab fa-reddit"></i>
      </div>
    </div>
  );
};

export default AboutusLogoList
