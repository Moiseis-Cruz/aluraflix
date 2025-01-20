import { useState } from "react";
import { NavLink } from "react-router";
import styled from "styled-components";

const LinkButton = styled(NavLink)`
    text-decoration: none;
    width: 180px;
    height: 54px;
    border-radius: 15px;
    display: inline-block;
    font-size: 20px;
    text-align: center;
    line-height: 54px;
    font-weight: 900;
    color: #ffffff;
    border: 2px solid #ffffff;
    font-family: "Source Sans 3", serif;
    
    &.active{
        box-shadow: 0 0 5px 5px #2271D1 inset;
        color: #2271D1;
        border: 2px solid #2271D1;
    }
`

const LinkHeader = ({ children, to }) => {

    const [ acitve, setActive ] = useState("");

    const handleClick = () => {
        setActive(to);
    }

    return(
        <LinkButton
            to={to}
            className={acitve === to ? "acitve" : ""}
            onClick={handleClick}
        >{children}</LinkButton>
    )
};

export default LinkHeader;
