import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
