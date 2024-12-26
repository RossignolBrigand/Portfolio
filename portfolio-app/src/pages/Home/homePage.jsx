import { useState, useEffect } from 'react';

import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import HeroSection from '../../layout/Hero/HeroSection';
import SkillsSection from '../../layout/Skills/SkillsSection';
import ServicesSection from '../../layout/Services/ServicesSection';
import ProjectsSection from '../../layout/Projects/ProjectsSection';
import ContactSection from '../../layout/Contact/ContactSection';
import Button from '../../components/Button/Button';
import { BsArrowUp } from 'react-icons/bs';

import './_homePage.scss';

//-------------------------------------------------------------------

function HomePage() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > 500) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home-container">
            <Header />
            <main>
                <HeroSection />
                <SkillsSection />
                <ServicesSection />
                <ProjectsSection />
                <ContactSection />
                {isScrolled ? (
                    <Button
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            })
                        }
                        children={<BsArrowUp />}
                        variant="toTop"
                        ariaLabel="Scroll to top"
                    />
                ) : null}
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
