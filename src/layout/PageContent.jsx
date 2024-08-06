import { ProductCard } from "../components/ProductCard";

const productWords = Array.from({ length: 9 }, () => Math.random().toString(36).substring(7));
const productPics = Array.from({ length: 9 }, () => 'https://picsum.photos/200/300?random=' + Math.floor(Math.random() * 1000));

const PageContent = () => (
    <div className="container mx-auto py-8">
        <div className="flex justify-center items-center">
            <h1 className="text-4xl font-bold text-center">Vitrin</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productWords.map((word, index) => (
                <ProductCard key={index} imgSrc={productPics[index]} title={word} description="Description of the product" />
            ))}
        </div>
    </div>
);

export default PageContent;
