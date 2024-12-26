import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';

// The project data holds references for localization which are then used with react i18n to showcase the right lines. This enables use to decouple our data from the standard localization files
import ProjectsData from '../../data/projects.json';

import './_projectsContainer.scss';

//------------------------------------------------------------

export default function ProjectsContainer() {
    const { i18n } = useTranslation();
    const language = i18n.language;

    const localizedProjects = ProjectsData.map((project) => {
        const localizedImages = Object.entries(project.images).map(
            ([key, image]) => ({
                url: process.env.PUBLIC_URL + image.url,
                alt: image.alt[language] || '',
            }),
        );

        return {
            ...project,
            name: project.name[language],
            description: project.description[language],
            detailedDescription: project.detailedDescription[language],
            cover: {
                url: project.cover.url,
                alt: project.cover.alt[language],
            },
            images: localizedImages,
        };
    });

    const [selectedProject, setSelectedProject] = useState(null);
    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <div className="projects-container">
            {localizedProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    coverUrl={process.env.PUBLIC_URL + project.cover.url}
                    coverAlt={project.cover.alt}
                    onClick={() => openModal(project)} // pass the project variable to the modal
                    tags={project.tags}
                />
            ))}
            <ProjectModal
                isOpen={!!selectedProject}
                project={selectedProject}
                closeModal={closeModal}
            />
        </div>
    );
}
