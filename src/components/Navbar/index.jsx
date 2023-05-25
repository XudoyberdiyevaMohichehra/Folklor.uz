import React from "react";
import { Container, Link, Logo } from "./style";
import { navbar } from '../../utils/navbar'

export const Navbar =()=>{
    return(
        <Container>

            {
                navbar.map(({ path, title, hidden }, index) => {
                    return !hidden && <Link key={index} className={({ isActive }) => isActive && 'active'} to={path}>{title}</Link>
                })
            }
        </Container>
    )
}
export default Navbar