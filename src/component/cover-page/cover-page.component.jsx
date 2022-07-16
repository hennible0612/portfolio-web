
import CoverImage from '../../assets/coverpage-laptop.jpg'
import './cover-page.styles.css'
import {Fragment} from "react";
const CoverPage = () => {
    return (
        <Fragment>
        <img className='cover-image' src={CoverImage}/>

        </Fragment>
    )
};

export default CoverPage;