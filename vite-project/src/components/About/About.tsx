import style from "./style.module.css"
import img from "../../images/вправо.png"
import img1 from "../../images/2.jpeg"

const About = () =>{
    return(
        <div className={style.container}>
            <p>About</p>
            <div className={style.name}>
            <h2>I AM IRINA </h2>
            <button>Know More <img className={style.arrow} src={img} alt="" /></button>
            </div>
            <br />
            <img className={style.photo} src={img1} alt="" />
            <h3>Introduction</h3>
            <ul>
                <li>Knowledge of modern web tools and technologies:HTML,CSS,JS,TypeScript,NodeJS.</li>
                <li>Proficiency in front-end client frameworks JavaScript: ReactJS.</li>
                <li>Understanding code version control tools: Git.</li>
                <li>Knowledge of web standards and usability guidelines.</li>
                <li>Design skills.</li>
            </ul>
            
            <h4>Contact Information</h4>
            <div className={style.contact}>
            <p >Email</p>
            <p >Phone number</p>
            <a  href="mailto:komarova-ira@mail.ru"> komarova-ira@mail.ru</a>
            
            <a  href="tel:+7994504289"> +7(999)450-42-89</a>
            </div>
        </div>
    )
}

export default About;