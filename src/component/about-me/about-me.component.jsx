import Stars from '../../assets/stars.jpg'
import './about-me.styles.css'

const AboutMe = () => {
    return (
        <article className='article'>
            <img className='about-me-image' src={Stars}/>
            <h1 className='about-me-box font-link'>blah blah</h1>
        </article>
    )
};

export default AboutMe;