import './App.css';
import { Navbar, Feature } from './components';
import { Footer, Header } from './containers';

 
function App() {
  return (
    <div className="App">
      <div className="gradient-bg">  
        <Navbar />
        <Header />
      </div>
      <Feature/>
      <Footer />
    </div>
  );
}

export default App;
