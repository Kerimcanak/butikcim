import { Link } from "react-router-dom"
import Header from "../layout/Header"
import PageContent from "../layout/PageContent"
import Footer from "../layout/Footer"
import Slider from "@ant-design/react-slick"

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Header/>
      <PageContent/>
      <Footer/>
    </div>
  )
}

export default HomePage

