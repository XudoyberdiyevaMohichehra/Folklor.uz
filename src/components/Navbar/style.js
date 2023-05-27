import styled from "styled-components";
import { NavLink } from "react-router-dom";



export const Container = styled.div`
 height: 70px;
 background:var(--green);
 display:flex;
 flex-direction:column;
 justify-content: space-between;
 align-items: center;
 padding: var(--padding);
 background: var(--colorPrimary);
`

export const Wrapper = styled.div`
 color:#fff;
 font-size:16px;
 height: 64px;
 padding:var(--padding);
 display:flex;
 align-items:center;
 justify-content:space-between;
 width:100%;
 max-width: 1440px;
`
export const Link = styled(NavLink)`
 text-decoration:none;
 color:#fff;
 padding: 0 32px;
`
export const Img = styled.img`
width: 40px;
height: 40px;
margin-right: 20px;
`
export const Section = styled.div`
 display:flex;
 align-items:center;
 cursor: ${({ logo }) => logo && 'pointer'};
 .active{
    color: yellowgreen;
 }
`


