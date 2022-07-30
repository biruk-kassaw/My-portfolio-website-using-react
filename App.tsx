import * as React from 'react';

import NavBar from './components/navbar/navbar';
import About from './pages/about/about';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';
import Portfolio from './pages/portfolio/portfolio';
import Resume from './pages/resume/resume';
import Services from './pages/services/services';

import './app.scss';

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
}
