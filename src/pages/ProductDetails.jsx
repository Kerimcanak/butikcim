
import LogoList from '../components/LogoList';
import { ProductCard } from '../components/ProductCard';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import HeroPromotion from '../layout/HeroPromotion';


export default function ProductDetails(props) {
    const { title, description, imgSrc, price } = props.location.state;
    const productWords = Array.from({ length: 9 }, () => Math.random().toString(36).substring(7));
    const productPics = Array.from({ length: 9 }, () => 'https://picsum.photos/400/300?random=' + Math.floor(Math.random() * 1000));
    const productPrices = Array.from({ length: 9 }, () => Math.floor(Math.random() * 1000));

    return (
      <>
        <HeroPromotion />
        <Header />
        <div className="w-full rounded overflow-hidden shadow-lg p-4 md:flex md:items-start">
        <div className="md:w-1/2">
            <img className="w-full md:w-72 md:pl-3" src={imgSrc} alt={title} />
            <div className="flex mt-4 p-7 md:flex-row md:items-start md:p-0">
            <img className="w-1/3 h-24 object-cover mx-2 md:my-2" src={imgSrc} alt={title} />
            <img className="w-1/3 h-24 object-cover mx-2 md:my-2" src={imgSrc} alt={title} />
            </div>
        </div>
        <div id="description" className="md:w-1/2 md:pl-8">
            <h2 className="text-xl font-bold mt-4">{title}</h2>
            <div className="flex items-center mt-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="ml-2 text-gray-600">10 Reviews</span>
            </div>
            <div className="flex items-center mt-2">
            <span className="text-2xl font-bold">{price} $</span>
            <span className="ml-2 text-green-500">In Stock</span>
            </div>
            <p className="mt-4 text-gray-700">{description}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Select Options
            </button>
        </div>
        </div>




        <div class="flex flex-col md:pt-3">
            <div class="flex justify-center space-x-4 mb-4">
                <div class="px-4 py-2 bg-gray-200 rounded-md cursor-pointer">Description</div>
                <div class="px-4 py-2 bg-gray-200 rounded-md cursor-pointer">Additional Information</div>
                <div class="px-4 py-2 bg-gray-200 rounded-md cursor-pointer">Reviews</div>
            </div>
            
            <div class="flex flex-col items-center md:flex-row md:gap-4 md:pl-24">
            <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/400/300`} class="rounded-lg shadow-lg mb-4" alt="Random image" />                
            <div >
                <h2 class="text-2xl font-bold mb-2 max-w-md mx-auto text-justify">The quick fox jumps over</h2>
                <p class="mb-2 max-w-md mx-auto text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus venenatis. Sed tincidunt, risus in efficitur rutrum, neque urna eleifend tortor, a ullamcorper enim nulla vel mi.</p>
                <p class="mb-2 max-w-md mx-auto text-justify">Cras commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <p class="mb-2 max-w-md mx-auto text-justify">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </div>
                <div id="lists">
                <ul class="mb-4">
                <h2 class="text-2xl font-bold mb-4">The quick fox jumps over</h2>
                <li class="mb-2"><span class="mr-2">⟩</span>The quick fox jumps over the dog</li>
                <li class="mb-2"><span class="mr-2">⟩</span>The quick fox jumps over the dog</li>
                </ul>
                <ol class="mb-4">
                <h2 class="text-2xl font-bold mb-4">The quick fox jumps over</h2>
                <li class="mb-2"><span class="mr-2">⟩</span>The quick fox jumps over the dog</li>
                <li class="mb-2"><span class="mr-2">⟩</span>The quick fox jumps over the dog</li>
                </ol>
                </div>
            </div>

            <div className='md:pl-12'>
            <div className="flex flex-col items-center justify-center h-56 text-center">
            <h2 className="text-2xl font-bold">BESTSELLER PRODUCTS</h2>
            </div>
            <div class="px-4 pl-8">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {productPrices.map((price, index) => (
                <ProductCard key={index} imgSrc={productPics[index]} title={productWords[index]} description={productWords[index]} price={price} />
                ))}
            </div>
            </div>
            </div>
            <LogoList/>
            <Footer/>
            



            </div>

      </>
    );
  }
  

