import {Fragment} from "react";
import {Outlet, Link} from "react-router-dom";

const Navigation = () => {
    return (
        <Fragment>
            <div >

                <div className='nav-links-container'>
                    <div>소개</div>
                    <div>소개</div>
                    <div>소개</div>

                </div>

            </div>

            <Outlet/> {/* 자식들을 rendering 위치 */}

        </Fragment>
    );
};

export default Navigation