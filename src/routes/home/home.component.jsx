import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';


const Home = () => (
    <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000} /* Options here */
        navigation
        sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </button>
                    </div>
                    <div className="section">
                        <div className="slide">
                            <h3>slide 1</h3>
                        </div>
                        <div className="slide">
                            <h3>slide 2</h3>
                        </div>
                        {/*<p>Section 2</p>*/}
                    </div>
                    <div className="section">
                        <p>Section 3</p>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
    // return (
    //     <div>
    //         Home main page
    //     </div>
    // )
);

export default Home;
