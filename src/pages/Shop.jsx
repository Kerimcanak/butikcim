import Header from "../layout/Header"
import Footer from "../layout/Footer";
import ShopContent from "../layout/ShopContent";
import LogoList from "../components/LogoList";
import HeroPromotion from "../layout/HeroPromotion";



function Shop() {
  return (
    <>
      <HeroPromotion/>
      <Header/>
      <ShopContent/>
      <LogoList/>
      <Footer/>

    </>
  )
}

export default Shop
