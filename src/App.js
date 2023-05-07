import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import HowToBuy from './components/HowToBuy';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <About />
      <HowToBuy />
    </div>
  );
}

export default App;
