import React, {Fragment} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './home.styles.css'

const Menu = () => (
    <div
        className="menu"
        style={{
            position: 'fixed',
            top: 0,
            zIndex: 100,
        }}
    >
        <ul className="actions menu-3">

            <li><a href='#coverPage' className='font-link'> Cover</a></li>

            <li><a href='#aboutMePage' className='font-link'> About Me</a></li>
            <li><a href='#skillsPage' className='font-link'> Skills </a></li>
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
            sectionsColor={["#282c34", "#ff5f45", "#0798ec", '#000000', '#000000']}
            anchors={['coverPage', 'aboutMePage', 'skillsPage', 'projectPage', 'contactPage']}
            navigationPosition='top'
            render={({state, fullpageApi}) => {
                return (

                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <h3>coverPage</h3>
                        </div>

                        <div className="section">
                            <h3>aboutMePage</h3>
                        </div>

                        <div className="section">
                            <h3>skillsPage</h3>

                        </div>

                        <div className="section">
                            <div className="slide">
                                <h3>프로젝트 1</h3>
                            </div>
                            <div className="slide">
                                <h3>프로젝트 2</h3>
                            </div>
                        </div>

                        <div className="section">
                            <h3>contactPage</h3>
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
