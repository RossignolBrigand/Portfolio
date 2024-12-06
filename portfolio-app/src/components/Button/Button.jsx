import { useState, useEffect } from 'react';

import './_Button.scss'

//------------------------------------------------

export default function Button({ label = "", onClick = () => { }, variant = "default", disabled = false, href = "", target = "", download }) {
    const isLink = !!href;

    if (isLink) {
        return (
            <a
                className={`btn btn-${variant}`}
                href={href}
                target={target} // Open in a new tab if target = "_blank"
                rel={target === '_blank' ? "noopener noreferrer" : undefined} // for security purposes in new tabs 
                download={download} // if downloading a file 
            >
                {label}
            </a>
        )
    }

    return (
        <button
            className={`btn btn-${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};