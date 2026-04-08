import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import AchievementSection from './sections/AchievementSection';
import ProductsSection from './sections/ProductsSection';
import MissionSection from './sections/MissionSection';
import VisionSection from './sections/VisionSection';
import Footer from './sections/Footer';
import './css/global.css';
import './css/LoadingScreen.css';
import './css/Navigation.css';
import './css/HeroSection.css';
import './css/AboutSection.css';
import './css/AchievementSection.css';
import './css/ProductsSection.css';
import './css/MissionSection.css';
import './css/VisionSection.css';
import './css/Footer.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="app">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <MissionSection />
            <VisionSection />
            <ProductsSection />
            <AchievementSection />   
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
