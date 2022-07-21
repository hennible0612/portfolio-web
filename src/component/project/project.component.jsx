import './project.styles.scss'
import SimpleImageSlider from "react-simple-image-slider";
import pay from '../../assets/mangoTang/결제하기.png'
import login from '../../assets/mangoTang/로그인.png'
import cart from '../../assets/mangoTang/장바구니.png'
import home from '../../assets/mangoTang/홈_adobe_express.svg'
import homee from '../../assets/mangoTang/홈.png'



const Project = () => {
    const images = [
        pay,
        login,
        cart,
        homee,
    ];
    return (

        <article className='article '>
            <div className='project-container'>
                {/*<div className='slider-div'>*/}
                {/*        <SimpleImageSlider className='rsis-container'*/}
                {/*            width='30vw'*/}
                {/*            height='40vw'*/}
                {/*            images={images}*/}
                {/*            showBullets={true}*/}
                {/*            showNavs={true}*/}

                {/*        />*/}
                    <img className='project-img' src={home}/>
                {/*</div>*/}
                <div className='info-div'>
                    2
                </div>

            </div>


        </article>
    );
}

export default Project;
