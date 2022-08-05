import React, {Fragment} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './home.styles.css'

import CoverPage from "../../component/cover-page/cover-page.component";
import AboutMe from "../../component/about-me/about-me.component";
import Project from "../../component/project/project.component";
import ContactPage from "../../component/contact/contact.component";
import Skills from "../../component/skills/skills.component";

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
                            <AboutMe />
                        </div>
                        {/*<div className="section">*/}
                        {/*    <Skills />*/}
                        {/*</div>*/}
                        <div className="section">
                            <div className="slide">
                                <Project />
                            </div>
                            <div className="slide">
                                <h3>프로젝트 2</h3>
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
