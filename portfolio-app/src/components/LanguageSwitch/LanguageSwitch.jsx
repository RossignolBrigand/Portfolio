import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../utils/i18nConfig';

import './languageSwitch.scss';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('preferredLanguage', lang);
    };

    // Fetch language prefs from local storage
    useEffect(() => {
        const savedLanguage = localStorage.getItem('preferredLanguage');
        const browserLanguage = navigator.language.split('-')[0];

        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage); // Load saved language
        } else {
            i18n.changeLanguage(browserLanguage); // Fallback to browser prefs and default i18n
        }
    }, [i18n]);

    const { t } = useTranslation('header');

    return (
        <div className="custom-language-select">
            <span>{t('language')}</span>
            <label htmlFor="language-selector" className="visually-hidden">
                {t('language')} {/* For screen readers */}
            </label>
            <select
                id="language-selector"
                className="translation-button"
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                aria-label="Language selector"
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;
