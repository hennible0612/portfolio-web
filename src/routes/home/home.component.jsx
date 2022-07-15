import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import {Link} from "react-router-dom";

const Menu = () => (
    <div
        className="menu"
        style={{
            position: 'fixed',
            top: 0,
            zIndex: 100,
        }}
    >
        <ul className="actions">
            <li>
                <a href='src/routes/home/home.component#coverPage'> Cover</a>
                <a href='src/routes/home/home.component#aboutMePage'> About Me</a>
                <a href='src/routes/home/home.component#skillsPage'> Skills </a>
                <a href='src/routes/home/home.component#projectPage'> Projects</a>
                <a href='src/routes/home/home.component#contactPage'> Contact </a>
            </li>
        </ul>
    </div>
);


const Home = () => (
    <Fragment>
        <Menu/>
    <ReactFullpage
        //fullpage options
        licenseKey = {' GNU GPL license v3'}
        scrollingSpeed = {1000} /* Options here */
        navigation
        sectionsColor={["#282c34", "#ff5f45", "#0798ec",'#000000','#000000']}
        anchors={['coverPage', 'aboutMePage', 'skillsPage', 'projectPage','contactPage']}
        navigationPosition = 'top'
        render={({ state, fullpageApi }) => {
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
