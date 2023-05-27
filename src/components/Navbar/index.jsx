import React from "react";
import { Container, Link, Img, Logo } from "./style";
import { navbar } from '../../utils/navbar'
import  logo  from "../../assets/icons/logos-1.png";

export const Navbar =()=>{
    return(
        <Container>
            <Img src={logo}></Img>
            {
                navbar.map(({ path, title, hidden }, index) => {
                    return !hidden && <Link key={index} className={({ isActive }) => isActive && 'active'} to={path}>{title}</Link>
                })
            }
          <button>click me</button>
        </Container>
    )
}
export default Navbar