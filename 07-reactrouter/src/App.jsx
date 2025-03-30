// Importing CSS file for global styling
import './App.css';

// Importing the Header, Footer, and Home components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      {/* Rendering the Header component at the top */}
      <Header />

      {/* Rendering the Home component as the main content */}
      <Home />

      {/* Rendering the Footer component at the bottom */}
      <Footer />
    </>
  );
}

// Exporting the App component to be used in index.js
export default App;
