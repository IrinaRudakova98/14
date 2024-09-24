import style from "./style.module.css"
import logo_img from "../../images/logo.png"

const Footer = () =>{
    return(
        <div className={style.container}>
            <p>
                LET'S
                <button><a href="" ><img src={logo_img} alt="" /></a></button>
                <br />
                WORK TOGETHER
            </p> 
            
            <h4>Contact Information</h4>
            <hr />
            <div className={style.contact}>
            <h3 className={style.text}>Email:</h3>
            
            <a  href="mailto:komarova-ira@mail.ru"> komarova-ira@mail.ru</a>
            <h3 className={style.text}>Phone number:</h3>
            <a  href="tel:+7994504289"> +7(999)450-42-89</a>
            </div>
            <p className={style.number}>@2024</p>
        </div>
    )
}

export default Footer;