import Slider from "@ant-design/react-slick";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";
import LogoList from "../components/LogoList";


const PageContent = () => (
    <div>
    <div className="relative">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />


        
      </div>
            <LogoList />
            <div className="flex flex-col items-center justify-center h-72 text-center pb-32">
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <h3 className="text-xl font-semibold">BESTSELLER PRODUCTS</h3>
      <p className="text-base">Problems trying to resolve the conflict between</p>
    </div>
        <div className="flex flex-wrap justify-center items-center gap-6 p-4">
          <div className="flex flex-col md:flex-row gap-6">
            <ProductCard image="/mainPageProdCard1.jpeg" />
            <ProductCard image="/mainPageProdCard2.jpeg" />
            <ProductCard image="/mainPageProdCard3.jpeg" />
            <ProductCard image="/mainPageProdCard4.jpeg" />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <ProductCard image="/mainPageProdCard5.jpeg" />
            <ProductCard image="/mainPageProdCard6.jpeg" />
            <ProductCard image="/mainPageProdCard7.jpeg" />
            <ProductCard image="/mainPageProdCard8.jpeg" />
          </div>
        </div>
    </div>
);

export default PageContent;
