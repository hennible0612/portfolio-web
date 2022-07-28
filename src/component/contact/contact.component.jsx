// 이메일 깃허브 블로그 resume
import {ReactComponent as GitHubSquare} from "../../assets/github_square.svg";
import {ReactComponent as BlogIcon} from "../../assets/naver_blog.svg";
import {ReactComponent as EmailIcon} from "../../assets/email.svg";
import './contact.styles.scss'

const ContactPage = () => {


    const url = "https://github.com/hennible0612/MangoTang"
    const openUrl = (url) => {
        window.open(url, '_blank').focus();
    }


    return (
        <article className='article '>

            <h3>Contact & Link</h3>
            <div className='contact-container'>

                <GitHubSquare onClick={() => openUrl("https://github.com/hennible0612/MangoTang")} className='icon'/>
                <BlogIcon onClick={()=>openUrl("https://blog.naver.com/ghdtjddn0612")} className='icon'/>

                <EmailIcon onClick={()=>openUrl("mailto:hennible0612@gmail.com")} className='icon'/>

            </div>

        </article>


    )
};

export default ContactPage;