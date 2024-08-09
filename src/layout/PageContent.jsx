import Slider from "@ant-design/react-slick";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";

const productWords = Array.from({ length: 9 }, () => Math.random().toString(36).substring(7));
const productPics = Array.from({ length: 9 }, () => 'https://picsum.photos/400/300?random=' + Math.floor(Math.random() * 1000));
const productPrices = Array.from({ length: 9 }, () => Math.floor(Math.random() * 1000));

const PageContent = () => (
    <div className="container mx-auto py-8">
    <div className="relative">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />

        <Slider
        arrows={true}
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplaySpeed={2000}
        autoplay={true}
    >
      <div className="relative bg-[url('https://picsum.photos/seed/picsum/200/300')] bg-cover h-72">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h1 className="text-2xl font-bold">Title</h1>
                <p className="mt-2">Description text goes here.</p>
                <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded">Button</Link>           
                </div>
        </div>
        <div className="relative bg-[url('https://picsum.photos/seed/picsum/200/300')] bg-cover h-72">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h1 className="text-2xl font-bold">Title</h1>
                <p className="mt-2">Description text goes here.</p>
                <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded">Button</Link>
            </div>
        </div>
        </Slider>

      </div>
            <div className="flex flex-col items-center justify-center h-56 text-center">
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <h3 className="text-xl font-semibold">BESTSELLER PRODUCTS</h3>
      <p className="text-base">Problems trying to resolve the conflict between</p>
    </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {productPrices.map((price, index) => (
        <ProductCard key={index} imgSrc={productPics[index]} title={productWords[index]} description={productWords[index]} price={price} />
        ))}
        </div>
    </div>
);

export default PageContent;
