import home from "../../assets/portfolio.png";
import {ReactComponent as GitHubIcon} from "../../assets/github.svg";
import {ReactComponent as WebIcon} from "../../assets/web.svg";
import {ReactComponent as Check} from "../../assets/check-solid.svg";
import './portfolio.styles.scss'

const Portfolio = () => {
    const url = "https://github.com/hennible0612/portfolio-web"
    const openGithub = () => {
        window.open(url, '_blank').focus();
    }

    return (

        <article className='article '>

            <div className='project-container'>
                <div className='project-title-container'>
                    <text><b>포트폴리오 페이지</b></text>
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
                                REACT.JS
                            </text>

                        </div>
                        <div className="summery-item">
                            <div className="summery">
                                <b>간단한 자기소개, 포트폴리오 페이지 입니다.</b>
                                <br></br><br></br>
                                <text> React.js 를 사용하였고 fullpage.js 라이브러리를 사용하였습니다.
                                </text>
                                <hr className="border"></hr>

                                <p><Check className="check-icon"/><b> 주요기능:</b> 자기 소개, 포트폴리오 소개</p>
                                <p><Check className="check-icon"/><b> 기간:</b> 2022.07</p>



                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
};
export default Portfolio;