
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import Deals from './components/Deals';
import Location from './components/Location'
function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Menu />
      <Deals/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
