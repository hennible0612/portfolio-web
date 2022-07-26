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
                <div className='project-img-link-info-container'>

                    <div className='image-div'>
                        <img className='project-img' src={home}/>
                    </div>

                    <div className='link-div'>
                        <GitHubIcon  onClick={openGithub} className='shopping-icon'/>
                        <WebIcon className='shopping-icon'/>

                    </div>
                    <div className='skill-div'>
                        <text className='skills'>
                            DJANGO
                        </text>
                        <text className='skills'>
                            HTML/CSS/JS
                        </text>
                        <text className='skills'>
                            NGINX GUNICORN
                        </text>
                        <text className='skills'>
                            AMAZON LIGHTSAIL
                        </text>
                    </div>

                    <div className='project-info-div'>
                        <text className='project-name'>쇼핑몰</text>
                        <div className='project-info'>
                            <p>처음으로 만든 프로젝트입니다. 프론트엔드 부터 백엔드까지의 경험을 하고 싶어서 쇼핑몰을 선택했습니다.</p>
                            <text><span className='dot'>&#183;</span> Iamport, sweettracker, daum address api 등을 사용하여 결제 주소 택배의 위치 기능을
                                구현했습니다. </text><br/>
                            <text><span className='dot'>&#183;</span> django-allauth 를 사용하여 sns 로그인 구현 </text><br/>
                            <text><span className='dot'>&#183;</span> Amazon Lightsail, Ngnix, Gunicorn을 사용하여 배포 </text>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Project;
