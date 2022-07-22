import './project.styles.scss'
import SimpleImageSlider from "react-simple-image-slider";
import pay from '../../assets/mangoTang/결제하기.png'
import login from '../../assets/mangoTang/로그인.png'
import cart from '../../assets/mangoTang/장바구니.png'
import homee from '../../assets/mangoTang/홈.png'

import home from '../../assets/mangoTang/mangoTangHome.svg'
import {ReactComponent as GitHubIcon} from "../../assets/github.svg";
import {ReactComponent as WebIcon} from "../../assets/web.svg";

const Project = () => {
    // const images = [
    //     pay,
    //     login,
    //     cart,
    //     homee,
    // ];
    return (

        <article className='article '>
            <div className='project-container'>
                <div className='project-img-link-container'>
                    <img className='project-img' src={home}/>

                    <div className='link-div'>
                        <GitHubIcon className='shopping-icon'/>
                        <WebIcon className='shopping-icon'/>

                    </div>

                </div>
            </div>

            <div className='info-div'>
                2
            </div>


        </article>
    );
}

export default Project;
