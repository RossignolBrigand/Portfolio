import Button from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';

import './_errorPage.scss';

function ErrorPage() {
    const { t } = useTranslation('errorPage');

    return (
        <div className="error-page-container">
            <div className="page-title-container">
                <h1>{t('title')}</h1>
            </div>
            <div className="page-content">
                <h2>{t('warning')}</h2>
                <h3>{t('invitation')}</h3>
            </div>
            <Button href="/Portfolio" variant="back-home">
                {t('back')}
            </Button>
        </div>
    );
}

export default ErrorPage;
