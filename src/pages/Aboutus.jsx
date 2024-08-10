const AboutUs = () => (
  <div className="flex flex-col items-center justify-center h-screen p-4 
bg-white">
    <div className="max-w-md mx-auto text-center mb-8">
      <h2 className="text-3xl font-bold">Get answers to all your questions.</h2>
      <p className="text-lg leading-relaxed mb-8">
        Problems trying to resolve the conflict between the two major realms 
of classical physics.
      </p>
    </div>
    <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
rounded" 
      type="button">CONTACT OUR COMPANY</button>
    <div className="flex justify-center mt-8">
      <a href="#" target="_blank" rel="noopener noreferrer" title="Facebook" 
      className="mx-4">
        <i className="fa fa-facebook-square"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" title="Twitter" 
      className="mx-4">
        <i className="fa fa-twitter-square"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn" 
      className="mx-4">
        <i className="fa fa-linkedin-square"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" 
      title="Instagram" className="mx-4">
        <i className="fa fa-instagram"></i>
      </a>
    </div>
  </div>
);

export default AboutUs;
