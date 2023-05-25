import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets/icons/folklorlogo.PNG";

export const Container = styled.div`
 width: 100%;
 height: 70px;
 background:var(--green);
 display:flex;
`
export const Link = styled(NavLink)`
 text-decoration:none;
 color:#fff;
 padding: 0 32px;
`
export const Logo = styled(logo)`
//  text-decoration:none;
//  color:#fff;
//  padding: 0 32px;
`
export default Logo