import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css"

const Nav = () => {
    return(
        <nav className={style.container}>
            
                <a>Home</a>
                <a>About Me</a>
                <a>Portfolio</a>
                <a>Services</a>
                <SwitchTheme />
            
        </nav>
    )
}

export default Nav;