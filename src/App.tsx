import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { PortfolioPage } from './components/PortfolioPage';
import { ContactsPage } from './components/ContactsPage';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const handleNavigation = (page: string) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={handleNavigation} />;
            case 'about':
                return <AboutPage />;
            case 'portfolio':
                return <PortfolioPage onNavigate={handleNavigation} />;
            case 'contacts':
                return <ContactsPage />;
            default:
                return <HomePage onNavigate={handleNavigation} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header currentPage={currentPage} onNavigate={handleNavigation} />
            <main className="flex-grow">{renderPage()}</main>
            <Footer onNavigate={handleNavigation} />
        </div>
    );
}
