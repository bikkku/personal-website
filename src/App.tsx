import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import { HeroUIProvider } from '@heroui/react';

function App() {
  return (
    <HeroUIProvider>
      <Home />
      <Footer />
    </HeroUIProvider>
  );
}

export default App;
