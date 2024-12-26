import PropTypes from 'prop-types';
import useOnScreen from '../../hooks/useOnScreen';

import TagSystem from '../TagSystem/TagSystem';

import './_projectCard.scss';

//------------------------------------------------------

export default function ProjectCard({
    name,
    description,
    coverUrl,
    coverAlt,
    onClick,
    tags,
}) {
    const [ref, isVisible] = useOnScreen(0.1);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Prevent default scrolling for Space key
            onClick(); // Trigger the click handler
        }
    };
    return (
        <div
            className={`card-wrapper ${isVisible ? 'visible' : ''}`}
            onClick={onClick}
            onKeyDown={handleKeyPress}
            ref={ref}
            role="button"
            tabIndex="0"
            aria-label={`View details for ${name}`}
        >
            {coverUrl ? (
                <div className="card-image">
                    <img src={coverUrl} alt={coverAlt}></img>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <div className="card-content">
                <h3>{name}</h3>
                <p>{description}</p>
                <TagSystem data={tags} />
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    onClick: PropTypes.func,
    tags: PropTypes.array,
};
