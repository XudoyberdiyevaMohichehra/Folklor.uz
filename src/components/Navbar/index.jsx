import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Section, Wrapper, Link, Img, } from "./style";
import { navbar } from '../../utils/navbar'
import  logo  from "../../assets/icons/logos-1.png";


export const Navbar =()=>{
    const navigate = useNavigate();
    return(
        <>
        <Container>
               <Wrapper>
                    <Section onClick={() => navigate('/')} logo> 
                         <Img src={logo}></Img>
                        <h3>Folklor</h3>
                    </Section>
                    <Section>
                        {
                           navbar.map(({ path, title, hidden }, index) => {
                               return !hidden && <Link key={index} className={({ isActive }) => isActive && 'active'} to={path}>{title}</Link>
                             })
                         }
                    </Section>
                    <Section>
                        <button>click me</button>
                    </Section>
            </Wrapper>
            <Outlet/>
        </Container>
        </>
    )
}
export default Navbar