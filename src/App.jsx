import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Route path="/" element={<HomePage />} />
    </Router>
  );
}

export default App;

