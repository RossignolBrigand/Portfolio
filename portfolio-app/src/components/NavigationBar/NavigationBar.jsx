import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { HiMenu } from 'react-icons/hi';

import './_navigationBar.scss';

//-----------------------------------------------------------

export default function NavigationBar({ headerHeight, windowSize }) {
    // Localization
    const { t } = useTranslation('header');

    // Custom function to use along HashNavlink to handle the sticky nav
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const yOffset = -headerHeight - 20;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    // Track which section is on screen to change nav colors
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            root: null,
            threshold: 0.4,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Update the active section based on observer id
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    // Hamburger menu set-up for mobile (windowSize < 768px)

    const mobileSize = 768;

    const isMobile = windowSize.width <= mobileSize;

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            {/* Mobile navigation */}
            {isMobile && (
                <>
                    <div className="nav-btn">
                        <button
                            className="hamburger-menu"
                            onClick={toggleMenu}
                            aria-label="Toggle navigation menu"
                        >
                            <HiMenu color="white" />
                        </button>
                    </div>
                    <div
                        className={
                            isMenuOpen ? 'nav-sidebar open' : 'nav-sidebar'
                        }
                    >
                        <button
                            className="close-btn"
                            onClick={toggleMenu}
                            aria-label="Close navigation menu"
                        >
                            ✖
                        </button>
                        <div
                            className="sidebar-links"
                            aria-hidden={!isMenuOpen}
                        >
                            <HashLink
                                smooth
                                to="#skills-section"
                                className={
                                    activeSection === 'skills-section'
                                        ? 'navlink active'
                                        : 'navlink'
                                }
                                onClick={toggleMenu}
                                scroll={(el) => scrollWithOffset(el)}
                            >
                                {t('navigation.skills')}
                            </HashLink>
                            <HashLink
                                smooth
                                to="#services-section"
                                className={
                                    activeSection === 'services-section'
                                        ? 'navlink active'
                                        : 'navlink'
                                }
                                onClick={toggleMenu}
                                scroll={(el) => scrollWithOffset(el)}
                            >
                                {t('navigation.services')}
                            </HashLink>
                            <HashLink
                                smooth
                                to="#projects-section"
                                className={
                                    activeSection === 'projects-section'
                                        ? 'navlink active'
                                        : 'navlink'
                                }
                                onClick={toggleMenu}
                                scroll={(el) => scrollWithOffset(el)}
                            >
                                {t('navigation.projects')}
                            </HashLink>
                            <HashLink
                                smooth
                                to="#contact-section"
                                className={
                                    activeSection === 'contact-section'
                                        ? 'navlink active'
                                        : 'navlink'
                                }
                                onClick={toggleMenu}
                                scroll={(el) => scrollWithOffset(el)}
                            >
                                {t('navigation.contact')}
                            </HashLink>
                        </div>
                    </div>
                </>
            )}
            {/* Desktop navigation */}
            {!isMobile && (
                <div className="nav-links">
                    <div className="nav-links desktop-only">
                        <HashLink
                            smooth
                            to="#skills-section"
                            className={
                                activeSection === 'skills-section'
                                    ? 'navlink active'
                                    : 'navlink'
                            }
                            scroll={(el) => scrollWithOffset(el)}
                        >
                            {t('navigation.skills')}
                        </HashLink>
                        <HashLink
                            smooth
                            to="#services-section"
                            className={
                                activeSection === 'services-section'
                                    ? 'navlink active'
                                    : 'navlink'
                            }
                            scroll={(el) => scrollWithOffset(el)}
                        >
                            {t('navigation.services')}
                        </HashLink>
                        <HashLink
                            smooth
                            to="#projects-section"
                            className={
                                activeSection === 'projects-section'
                                    ? 'navlink active'
                                    : 'navlink'
                            }
                            scroll={(el) => scrollWithOffset(el)}
                        >
                            {t('navigation.projects')}
                        </HashLink>
                        <HashLink
                            smooth
                            to="#contact-section"
                            className={
                                activeSection === 'contact-section'
                                    ? 'navlink active'
                                    : 'navlink'
                            }
                            scroll={(el) => scrollWithOffset(el)}
                        >
                            {t('navigation.contact')}
                        </HashLink>
                    </div>
                </div>
            )}
        </nav>
    );
}
