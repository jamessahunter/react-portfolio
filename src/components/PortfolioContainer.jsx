//imports states and all other pages and components
import { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './Header';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
  //sets page to about
  const [currentPage, setCurrentPage] = useState('About');

  // sets page to the nav bar item that is clicked on
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
      {/* calls header nav bar the page selected and the footer */}
      <header className='row'>
        <Header></Header>
        {/* listens for page change */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main>{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}
