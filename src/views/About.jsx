import AboutInfo from '../components/about/aboutInfo'
import style from './Views.module.css'

const About = () => {
    return(
        <div className={style.about}>
            <AboutInfo></AboutInfo>
        </div>
    )   
}

export default About