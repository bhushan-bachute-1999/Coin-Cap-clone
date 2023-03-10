import Navbar from './Navbar'
import Header from './header';
import Addvertisement from './Addvertisment';
import CoinsList from './coins-list';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Addvertisement />
      <Navbar />
      <Header />
      <CoinsList />
      <Footer />
    </div>
  );
}

export default App;
