
import CoverImage from '../../assets/coverpage-laptop.jpg'
import ProgramImage from '../../assets/programming.png'
import './cover-page.styles.css'
import KeyBoard from '../../assets/key-board.jpg'
const CoverPage = () => {
    return (
        // <Fragment>
            <article className='article'>
                <img className='cover-image' src={KeyBoard}/>
                <h1 className='header font-link'>개발자 땡땡땡 포트폴리오입니다.</h1>
            </article>
        // {/*</Fragment>*/}
    )
};

export default CoverPage;