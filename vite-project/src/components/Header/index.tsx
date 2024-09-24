import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import Button from "../Button/Button"
import style from "./style.module.css"

const Header = () =>{
    return(
        <header className={style.container}>
            <Logo />
            <Nav />
            <Button />
        </header>
        

)
}

export default Header;