const Footer = () => (
  <footer>
    <div className="bg-blue-900 text-white w-full">
  <div className="flex flex-col items-center py-10">
    <h1 className="text-3xl font-bold mb-2">Consulting Agency</h1>
    <p className="mb-5">For Your Business</p>
    <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Contact Us
    </button>
  </div>

  <div className="flex flex-col items-start px-5 py-3 border-t border-blue-800">
    <h2 className="text-xl font-semibold mb-3">Company Info</h2>
    <a href="#" className="mb-1 hover:text-blue-300">About Us</a>
    <a href="#" className="mb-1 hover:text-blue-300">Career</a>
    <a href="#" className="mb-1 hover:text-blue-300">Blog</a>
  </div>

  <div className="flex flex-col items-start px-5 py-3 border-t border-blue-800">
    <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
    <div className="flex items-center mb-2">
      <i className="fas fa-phone mr-2"></i>
      <span>+1234567890</span>
    </div>
    <div className="flex items-center mb-2">
      <i className="fas fa-envelope mr-2"></i>
      <span>email@example.com</span>
    </div>
    <div className="flex items-center">
      <i className="fas fa-map-marker-alt mr-2"></i>
      <span>4517 Washington Ave.</span>
    </div>
  </div>
</div>

  </footer>
)

export default Footer
