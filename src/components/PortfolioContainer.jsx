import { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './Header';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {

    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='container-fluid'>
      <header className='row'>
        <Header></Header>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main className="">{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}
