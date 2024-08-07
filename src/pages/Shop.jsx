import Header from "../layout/Header"
import { ProductCard } from "../components/ProductCard";
import Footer from "../layout/Footer";

const productWords = Array.from({ length: 9 }, () => Math.random().toString(36).substring(7));
const productPics = Array.from({ length: 9 }, () => 'https://picsum.photos/200/300?random=' + Math.floor(Math.random() * 1000));

function Shop() {
  return (
    <>
      <div className="bg-emerald-700 w-full h-16 invisible md:visible">

      </div>
      <Header/>


        <Footer/>

    </>
  )
}

export default Shop
