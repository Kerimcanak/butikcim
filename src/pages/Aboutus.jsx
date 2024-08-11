import Header from "../layout/Header"
import AboutusLogoList from "../components/AboutusLogoList"
import AboutsContent from "../layout/AboutusContent"
import AboutusWorkwitusCard from "../layout/AboutusWorkwitusCard"
import Footer from "../layout/Footer"
import { AboutusHero } from "../layout/AboutusHero"

function Aboutus () {
    return (
        <>
            <Header/>
            <AboutusHero/>
            <AboutsContent/>
            <AboutusLogoList/>
            <AboutusWorkwitusCard/>
            <Footer/>
        </>
    )
}

export default Aboutus
