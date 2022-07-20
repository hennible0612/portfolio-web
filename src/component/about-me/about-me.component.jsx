import Stars from '../../assets/stars.jpg'
import './about-me.styles.scss'
import {Fragment} from "react";

const AboutMe = () => {
    return (
        <Fragment>
        <article className='article '>
            <img className='about-me-image' src={Stars}/>
            <div className='about-me-container font-link'>
                <div className='about-me-context'>
                    <p className='about-me-context-header'>지속 가능한 개발자</p>
                    <p>카멜레온 같이 변화에 적절하게 대응 할 수 있는 <b className='about-me-gradient-text'>'가능성을 지닌 개발자가'</b> 되고자하는 땡땡땡 입니다.</p>
                    <p>앞에 놓여있는 문제에 정면 도전하여 기필코 해결 방법을 찾기 위해서는 부끄러움도 마다하지 않고 </p>
                    <p><b className='about-me-gradient-text'>'도전하는 성향이'</b> 저의 강점입니다</p>
                    <p>강철 같은 도전 정신과 생각의 다양성을 포욜할 수 있으며 변화를 즐기는 <b className='about-me-gradient-text'>'지속 가능한 개발자가'</b> 되고자 합니다.</p>
                </div>
            </div>
        </article>
        </Fragment>
    )
};

export default AboutMe;