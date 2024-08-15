import { Link } from "react-router-dom";


const Header = () => {

        
  return (
    <header className="bg-white shadow-lg">
<div className="flex md:flex-row justify-between px-4 py-2">
  <div className="flex items-center">
    <i className="fas fa-shopping-bag text-black mr-2" />
    <h1 className="text-black text-xl font-bold">Butikcim</h1>
  </div>
  <div id="right-icons" className="flex items-center md:mt-0">
    <i className="fas fa-search text-black mr-2" />
    <i className="fas fa-shopping-cart text-black mr-2" />
    <i className="fas fa-bars text-black" />
  </div>
</div>
    <nav className="flex flex-col pb-4 items-center md:flex-row md:justify-center md:space-x-4">
      <Link to="/" className="text-black hover:text-gray-600 mb-2 md:mb-0">Home</Link>
      <Link to="/shop" className="text-black hover:text-gray-600 mb-2 md:mb-0">Shop</Link>
      <Link to="/contact" className="text-black hover:text-gray-600 mb-2 md:mb-0">Contact</Link>
      <Link to="/aboutus" className="text-black hover:text-gray-600 mb-2 md:mb-0">About Us</Link>
      <Link to="/team" className="text-black hover:text-gray-600 mb-2 md:mb-0">Team</Link>
    </nav>


      
    </header>
  );
};

export default Header;
