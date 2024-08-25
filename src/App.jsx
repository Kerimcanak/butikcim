import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Team from './pages/Team';
import Signup from './pages/Signup';
import Signin from './pages/SignIn';
import { ProductCard } from './components/ProductCard';
import { verifyEndpoint } from './pages/verifyEndpoint';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={Shop} />
      <Route path="/product-detail" component={ProductDetails} />
      <Route path="/contact" component={Contact} />
      <Route path="/aboutus" component={Aboutus} />
      <Route path="/team" component={Team} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/verify" component={verifyEndpoint} />
      <Route path="/product-card" component={ProductCard} />
   </Router>
  );
}

export default App;
