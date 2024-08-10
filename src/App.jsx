import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/product-detail" component={ProductDetails} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/aboutus" component={Aboutus} />
    </Router>
  );
}

export default App;
