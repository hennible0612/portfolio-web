import React, {Fragment} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './home.styles.css'

import CoverPage from "../../component/cover-page/cover-page.component";
import AboutMePage from "../../component/about-me-page/about-me-page.component";
import ContactPage from "../../component/contact-page/contact-page.component";
import MangoTangProject from "../../component/project/mangotang-project.component";
import PortfolioProject from "../../component/portfolio-project/portfolio-project.component";
const Menu = () => (
    <div
        className="menu"
        style={{
            position: 'fixed',
            top: 0,
            zIndex: 100,
        }}
    >

            <ul className="actions menu">
                <li><a href='#coverPage' className='font-link'> Cover</a></li>

                <li><a href='#aboutMePage' className='font-link'> About Me</a></li>
                {/*<li><a href='#skillsPage' className='font-link'> Skills </a></li>*/}
                <li><a href='#projectPage' className='font-link'> Projects</a></li>
                <li><a href='#contactPage' className='font-link'> Contact </a></li>
            </ul>

    </div>
);

const Home = () => (
    <Fragment>
        <Menu/>
        <ReactFullpage
            //fullpage options
            licenseKey={' GNU GPL license v3'}
            scrollingSpeed={1000} /* Options here */
            navigation
            sectionsColor={["#808080", "#808080", '#808080', '#808080']}
            // anchors={['coverPage', 'aboutMePage', 'skillsPage', 'projectPage', 'contactPage']}
            anchors={['coverPage', 'aboutMePage', 'projectPage', 'contactPage']}
            navigationPosition='top'

            slidesNavigation
            render={({state, fullpageApi}) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <CoverPage/>
                        </div>
                        <div className="section">
                            <AboutMePage />
                        </div>
                        {/*<div className="section">*/}
                        {/*    <SkillsPage />*/}
                        {/*</div>*/}
                        <div className="section">
                            <div className="slide">
                                <MangoTangProject />
                            </div>
                            <div className="slide">
                                <PortfolioProject />
                            </div>
                        </div>
                        <div className="section">

                            <ContactPage />
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    </Fragment>
    // return (
    //     <div>
    //         Home main page
    //     </div>
    // )
);

export default Home;
