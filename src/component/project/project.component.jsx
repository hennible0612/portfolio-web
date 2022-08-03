import './project.styles.scss'
import SimpleImageSlider from "react-simple-image-slider";
import pay from '../../assets/mangoTang/결제하기.png'
import login from '../../assets/mangoTang/로그인.png'
import cart from '../../assets/mangoTang/장바구니.png'
import homee from '../../assets/mangoTang/홈.png'


import {ReactComponent as Check} from "../../assets/check-solid.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <text><b>망고땡 쇼핑몰 (1명)</b></text>
                </div>

                <div className='project-info-container'>
                    <div className="image-link-container">
                        <div className="image-item">
                            <img className='project-img' src={home}/>
                        </div>
                        <div className="link-item">
                            <GitHubIcon onClick={openGithub} className='shopping-icon'/>
                            <WebIcon className='shopping-icon'/>
                        </div>
                    </div>
                    <div className="project-summery-container">
                        <div className="skill-item">
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
                        <div className="summery-item">
                            <div className="summery">
                                {/*<p>처음으로 만든 프로젝트입니다. 프론트엔드 부터 백엔드까지의 경험을 하고 싶어서 쇼핑몰을 선택했습니다.</p>*/}
                                <b>기본적인 쇼핑몰입니다. 상품 목록, 결제, 환불 등 쇼핑몰에서 지원하는 기능들을 구현했습니다.</b>
                                <br></br><br></br>
                                <text>Framework는 Django를 사용하여 MVT 모델을 익혔습니다. 또한 자바스크립트에 익숙해지고자 바닐라 자바스크립트를 사용했습니다.
                                </text>
                                <p>
                                    Iamport api를 사용하여 결제, 환불 기능을 구현하였고, sweettracker api를 사용하여 실시간 택배 추적 그리고
                                    daum address api 를 사용하여 주소를 입력받았습니다.
                                </p>
                                <p>
                                    Django-allauth를 사용하여 네이버, 구글, 카카오 sns 회원가입, 로그인 기능을 구현했습니다.
                                </p>
                                <p>
                                    Amazon Lightsail, Ngnix, Gunicorn을 사용하여 배포하였습니다.
                                </p>
                                <hr className="border"></hr>

                                <p><Check className="check-icon"/><b> 주요기능:</b> 회원가입, 상품구매, 결제/환불, 택배 위치 확인</p>
                                <p><Check className="check-icon"/><b> 역할:</b> 프론트엔드 & 백엔드</p>
                                <p><Check className="check-icon"/><b> 기간:</b> 2021.11 ~ 2022.03</p>



                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
}

export default Project;
