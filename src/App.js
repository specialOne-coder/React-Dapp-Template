
import './styles/App.css';
import { Footer, Navigation } from '../src/components/index';
import { ethers } from 'ethers';


function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome min-h-screen">
        <Navigation />
      </div>
       <Footer />
    </div>
  );
}

export default App;