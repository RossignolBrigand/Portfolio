import { FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';

import TagSystem from '../TagSystem/TagSystem';
import ImgCarousel from '../ImgCarousel/ImgCarousel';

import './_projectModal.scss';

//-------------------------------------------------

export default function ProjectModal({ isOpen, project, closeModal }) {
    const { t } = useTranslation('modal');

    if (!project) return null;

    const {
        name,
        detailedDescription,
        issues,
        website,
        codebase,
        images,
        tags,
    } = project;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Project Details"
            overlayClassName="modal-overlay"
            className={'modal-projects'}
        >
            <div className="modal-wrapper">
                <div className="modal-topbar">
                    <button className="btn-close-modal" onClick={closeModal}>
                        <FaTimes />
                    </button>
                </div>
                <div className="modal-content">
                    <div className="modal-content__image">
                        {images ? (
                            <ImgCarousel images={images} isOpen={isOpen} />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div className="modal-content__text">
                        <h2>{name}</h2>
                        <h3 className="modal-content__text--title">
                            {t('descriptionTitle')}
                        </h3>
                        <p>{detailedDescription}</p>
                        <h3 className="modal-content__text--title">
                            {t('issuesTitle')}
                        </h3>
                        <p>{issues}</p>
                        <TagSystem data={tags} />
                        <div className="modal-content__links">
                            <a
                                href={website}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('visitWebsite')}
                            </a>
                            <a
                                href={codebase}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('visitCodebase')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
