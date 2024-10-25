import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './about/about';
import Contact from'./contact/contact';
import Portfolio from './portfolio/porfolio';  

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

