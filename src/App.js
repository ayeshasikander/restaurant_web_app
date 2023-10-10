import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import Dealslider from './components/Dealslider';
import Location from './components/Location';

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Menu />
      <Dealslider/>
      <Location/>
      <Footer />
    </div>
  );
}

export default App;
