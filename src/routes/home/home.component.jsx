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
                <button onClick={() => this.handleAddSection()}>Add Section</button>
                <button onClick={() => this.handleRemoveSection()}>
                    Remove Section
                </button>
                <button onClick={() => this.handleChangeColors()}>
                    Change background colors
                </button>
                <button onClick={() => this.moveSectionDown()}>
                    Move Section Down
                </button>
            </li>
        </ul>
    </div>
);


const Home = () => (
    <Fragment>
        <Menu/>
    <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000} /* Options here */
        navigation
        sectionsColor={["#282c34", "#ff5f45", "#0798ec",'#000000']}
        anchors={['firstPage', 'secondPage', 'thirdPage','fourthPage']}
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <h3>메인 페이지</h3>
                        {/*<button onClick={() => fullpageApi.moveSectionDown()}>*/}
                        {/*    Click me to move down*/}
                        {/*</button>*/}
                    </div>
                    <div className="section">
                        <h3>자기 소개</h3>
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
                        <h3>연락처</h3>
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
