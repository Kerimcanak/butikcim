import Header from "../layout/Header"
import Footer from "../layout/Footer";
import ShopContent from "../layout/ShopContent";
import LogoList from "../components/LogoList";



function Shop() {
  return (
    <>
      <nav className="bg-emerald-700 p-4 flex items-center justify-between invisible md:visible">
        <div className="text-white mr-4">
          <i className="fas fa-phone-square-alt mr-2"></i>
          (012) 345-6789
        </div>
        <div className="text-white font-bold">
          <span>Follow us and get 50% off!</span>
        </div>

        <div>
          <span className="text-white mr-4">Follow us:</span>
          <i className="fab fa-facebook text-white mx-2"></i>
          <i className="fab fa-twitter text-white mx-2"></i>
          <i className="fab fa-instagram text-white mx-2"></i>
        </div>
      </nav>
      <Header/>
      <ShopContent/>
      <LogoList/>
      <Footer/>

    </>
  )
}

export default Shop
