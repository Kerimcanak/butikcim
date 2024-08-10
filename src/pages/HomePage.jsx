import { Link } from "react-router-dom"
import Header from "../layout/Header"
import PageContent from "../layout/PageContent"
import Footer from "../layout/Footer"
import Slider from "@ant-design/react-slick"

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Header/>
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
        <div>
          <Link to="/">
            <div className="relative bg-[url('https://picsum.photos/seed/picsum/200/300')] bg-cover h-72">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h1 className="text-2xl font-bold">Title</h1>
                <p className="mt-2">Description text goes here.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded">Button</button>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div className="relative bg-[url('https://picsum.photos/seed/picsum/200/300')] bg-cover h-72">
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h1 className="text-2xl font-bold">Title</h1>
                <p className="mt-2">Description text goes here.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded">Button</button>
              </div>
            </div>
          </Link>
        </div>
      </Slider>
      <PageContent/>
      <Footer/>
    </div>
  )
}

export default HomePage

