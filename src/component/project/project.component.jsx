import './project.styles.scss'
import SimpleImageSlider from "react-simple-image-slider";
import pay from '../../assets/mangoTang/결제하기.png'
import login from '../../assets/mangoTang/로그인.png'
import cart from '../../assets/mangoTang/장바구니.png'
import homee from '../../assets/mangoTang/홈.png'

import home from '../../assets/mangoTang/home_monitor.png'
import {ReactComponent as GitHubIcon} from "../../assets/github.svg";
import {ReactComponent as WebIcon} from "../../assets/web.svg";

import Gallery from "../gallery/gallery.component";

const Project = () => {
    const url = "https://github.com/hennible0612/MangoTang"
    const openGithub = () => {
        window.open(url, '_blank').focus();
    }

    return (

        <article className='article '>

            <div className='project-container'>
                <div className='project-title-container'>
                    something
                </div>

                <div className='project-info-container'>
                    <div className="image-link-container">
                        <div className="image-item">

                        </div>
                        <div className="link-item">
                        </div>
                    </div>
                    <div className="project-summery-container">
                        <div className="summery-item">
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}

export default Project;
