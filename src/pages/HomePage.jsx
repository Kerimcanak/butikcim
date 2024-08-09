import Header from "../layout/Header"
import PageContent from "../layout/PageContent"
import Footer from "../layout/Footer"
import LogoList from "../components/LogoList"
const HomePage = () => {
  return (
    <div className="overflow-hidden">
    <Header/>
    <LogoList/>
    <PageContent/>
    <Footer/>
    </div>
  )
}

export default HomePage
