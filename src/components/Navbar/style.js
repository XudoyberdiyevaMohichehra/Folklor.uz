import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { ReactComponent as logo } from "../../assets/icons/logos-1.png";
import { ReactComponent as logo1 } from "../../assets/icons/arrow-up.svg";



export const Container = styled.div`
//  width: 100%;
 height: 70px;
 background:var(--green);
 display:flex;
 justify-content: space-between;
 align-items: center;
 padding: var(--padding);
`
export const Link = styled(NavLink)`
 text-decoration:none;
 color:#fff;
 padding: 0 32px;
`
export const Img = styled.img`
width: 50px;
height: 50px;
`
export const Logo = styled(logo1)`
width: 50px;
height: 50px;
`
export default Logo

// export const Logo1 = styled(logo)`
//  width:50px;
//  height:36px;
//  & path{
//    fill:#fff;  
//  }
//  padding-right:10px;

// `