import Header from "../layout/Header"
import Footer from "../layout/Footer";
import ShopContent from "../layout/ShopContent";
import LogoList from "../components/LogoList";



function Shop() {
  return (
    <>
      <div className="bg-emerald-700 w-full h-16 invisible md:visible">

      </div>
      <Header/>
      <ShopContent/>
      <LogoList/>
      <Footer/>

    </>
  )
}

export default Shop
