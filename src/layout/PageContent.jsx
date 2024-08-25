import Slider from "@ant-design/react-slick";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";
import LogoList from "../components/LogoList";


const PageContent = () => (
    <div className="container mx-auto py-8">
    <div className="relative">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />


        
      </div>
            <div className="flex flex-col items-center justify-center h-72 text-center pb-32">
            <LogoList />
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <h3 className="text-xl font-semibold">BESTSELLER PRODUCTS</h3>
      <p className="text-base">Problems trying to resolve the conflict between</p>
    </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        </div>
    </div>
);

export default PageContent;
