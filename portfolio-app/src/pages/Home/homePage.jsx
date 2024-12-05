import React from "react";

import HeroSection from "../../layout/Hero/HeroSection";
import SkillsSection from "../../layout/Skills/SkillsSection";
import ServicesSection from "../../layout/Services/ServicesSection";
import ProjectsSection from "../../layout/Projects/ProjectsSection";
import TestimonialsSection from "../../layout/Testimonials/TestimonialsSection";
import ContactSection from "../../layout/Contact/ContactSection";


import './_homePage.scss'

//-------------------------------------------------------------------

function HomePage() {

    return (
        <div className="home-container">
            <HeroSection />
            <SkillsSection />
            <ServicesSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />
        </div>
    )
};

export default HomePage;