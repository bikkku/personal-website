import './App.css';
import Home from './pages/Home';
import { HeroUIProvider } from '@heroui/react';

function App() {
  return (
    <HeroUIProvider>
      <Home />
    </HeroUIProvider>
  );
}

export default App;
