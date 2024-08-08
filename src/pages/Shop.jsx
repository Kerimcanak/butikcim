import Header from "../layout/Header"
import Footer from "../layout/Footer";
import ShopContent from "../layout/ShopContent";
import LogoList from "../components/LogoList";



function Shop() {
  return (
    <>
      <nav className="bg-emerald-700 p-4 flex items-center justify-between">
        <div className="text-white font-bold">practice.dev</div>
        <input
          type="search"
          placeholder="Search for challenges"
          className="px-4 py-2 rounded-lg focus:outline-none"
        />
        <div>
          <i className="fas fa-home text-white mx-2"></i>
          <i className="fas fa-bell text-white mx-2"></i>
          <i className="fas fa-user text-white mx-2"></i>
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
