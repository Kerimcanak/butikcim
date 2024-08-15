import { Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Contact = () => (
  <>
  <Header />
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
  <Footer />
  </>
);

export default Contact;

