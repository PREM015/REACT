// Importing React to define the functional component
import React from 'react';

// Importing the Header and Footer components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Importing Outlet from react-router-dom to dynamically render child components based on the current route
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      {/* Rendering the Header component at the top of every page */}
      <Header />

      {/* Outlet serves as a placeholder for nested routes and renders the matched child components */}
      <Outlet />

      {/* Rendering the Footer component at the bottom of every page */}
      <Footer />
    </>
  );
}

// Exporting the Layout component to be used as a wrapper for pages with routing
export default Layout;
