import { useTranslation } from 'react-i18next';

import RatingBar from '../../components/RatingBar/RatingBar';

// Icons
import { FaFigma } from 'react-icons/fa';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiJsBadge } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';
import { DiGit } from 'react-icons/di';
import { DiGulp } from 'react-icons/di';
import { DiNpm } from 'react-icons/di';
import { DiWordpress } from 'react-icons/di';
import { DiCode } from 'react-icons/di';
import { ReactComponent as PostmanIcon } from '../../assets/icons/postman-icon-svgrepo-com.svg';
import { ReactComponent as SwaggerIcon } from '../../assets/icons/swagger-svgrepo-com.svg';
import { ReactComponent as ExpressIcon } from '../../assets/icons/express-svgrepo-com.svg';
import { ReactComponent as WebpackIcon } from '../../assets/icons/webpack-svgrepo-com.svg';
import { DiW3C } from 'react-icons/di';
import { DiVisualstudio } from 'react-icons/di';

import './_skillsSection.scss';

//-------------------------------------------------------------

export default function SkillsSection() {
    const { t } = useTranslation('skillSection');

    return (
        <section className="skills-section" id="skills-section">
            <h2>{t('title')}</h2>
            <div className="skills-container">
                <div className="skills-block">
                    <h3>{t('block-titles.technologies')}</h3>
                    <ul className="skills-block__content--list">
                        <li>
                            <RatingBar
                                label={'CSS'}
                                rating={4}
                                icon={<DiCss3 className="svg__CSS" />}
                            />
                        </li>
                        <li>
                            <RatingBar
                                label={'Express'}
                                rating={4}
                                icon={<ExpressIcon className="svg__Express" />}
                            />
                        </li>
                        <li>
                            <RatingBar
                                label={'HTML'}
                                rating={4}
                                icon={<DiHtml5 className="svg__HTML" />}
                            />
                        </li>
                        <li>
                            <RatingBar
                                label={'Javascript'}
                                rating={4}
                                icon={<DiJsBadge className="svg__JS" />}
                            />
                        </li>
                        <li>
                            <RatingBar
                                label={'MongoDB'}
                                rating={3}
                                icon={<DiMongodb className="svg__MongoDB" />}
                            />
                        </li>
                        <li>
                            <RatingBar
                                label={'Node'}
                                rating={3}
                                icon={<DiNodejsSmall className="svg__Node" />}
                            />
                        </li>
                        <li>
                            <RatingBar
                                label={'React'}
                                rating={4}
                                icon={<DiReact className="svg__React" />}
                            />
                        </li>
                        <li>
                            <RatingBar
                                label={'Sass'}
                                rating={4}
                                icon={<DiSass className="svg__Sass" />}
                            />
                        </li>
                        <li>
                            <RatingBar
                                label={'Wordpress'}
                                rating={3}
                                icon={
                                    <DiWordpress className="svg__Wordpress" />
                                }
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tools-container">
                <div className="tools-block">
                    <h3 className="tools-block__title">
                        {t('block-titles.tools')}
                    </h3>
                    <div className="tools-block__content">
                        <ul className="tools-block__content--list">
                            <li>
                                <DiCode />
                                bCrypt
                            </li>
                            <li>
                                <DiCode />
                                JSONWebToken
                            </li>
                            <li>
                                <DiCode />
                                Multer
                            </li>
                            <li>
                                <DiCode />
                                Sharp
                            </li>
                            <li>
                                <FaFigma className="svg__Figma" />
                                Figma
                            </li>
                            <li>
                                <DiGit className="svg__Git" />
                                Git
                            </li>
                            <li>
                                <DiGulp className="svg__Gulp" />
                                Gulp
                            </li>
                            <li>
                                <DiNpm className="svg__Npm" />
                                Npm
                            </li>
                            <li>
                                <DiCode />
                                Pnpm
                            </li>
                            <li>
                                <PostmanIcon className="svg__Postman" />
                                Postman
                            </li>
                            <li>
                                <SwaggerIcon className="svg__Swagger" />
                                Swagger
                            </li>
                            <li>
                                <DiVisualstudio className="svg__Visualstudio" />
                                VS Code
                            </li>
                            <li>
                                <DiW3C className="svg__W3C" />
                                W3C
                            </li>
                            <li>
                                <WebpackIcon className="svg__Webpack" />
                                Webpack
                            </li>
                            <li>
                                <DiCode />
                                Yarn
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="learning-container">
                <h3>{t('learning.title')}</h3>
                <h4>{t('learning.para')}</h4>
                <ul>
                    <li>Debug / Testing</li>
                    <li>E-commerce</li>
                    <li>Next.js</li>
                    <li>PHP/ Symfony</li>
                    <li>PostgreSQL / MySQL</li>
                    <li>Python</li>
                    <li>Wordpress</li>
                </ul>
            </div>
        </section>
    );
}
