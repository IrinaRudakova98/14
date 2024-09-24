import style from "./NameText.module.css"
import logo_img from "../../images/logo.png"

const Text = () =>{
    return(
        <div className={style.container}>
            <p>
                LET'S
                <button><a href="" ><img src={logo_img} alt="" /></a></button>
                <br />
                WORK TOGETHER
            </p> 
                      
        </div>
    )
}

export default Text;