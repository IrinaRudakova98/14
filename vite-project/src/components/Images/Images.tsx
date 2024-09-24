import style from "./style.module.css"
import img1 from "../../images/1.jpeg"
import img2 from "../../images/2.jpeg"
import img3 from "../../images/3.jpeg"
import img4 from "../../images/4.jpeg"
import img5 from "../../images/5.jpeg"

const Image = () =>{
    return(
        <div className={style.container}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
    )
}

export default Image;