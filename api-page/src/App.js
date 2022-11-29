import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import BeerListPage from './pages/BeerListPage/BeerListPage';
import BeerInformation from './components/BeerInformation/BeerInformation';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <ul className="navigation">
          <li className="menu-item"><Link to={'/'}>Beer recipes list</Link></li>
        </ul>
      </header>

      <section>
        <Routes>

          <Route path="/" element={<BeerListPage />} />
            <Route path="/beer/:beerId" element={<BeerInformation />} />

        </Routes>
      </section>

    </div>
  );
}

export default App;


// https://api.punkapi.com/v2/beers