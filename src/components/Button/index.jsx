import styled from "styled-components";

const StylizedButton = styled.button`
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
    background-color: transparent;
    cursor: pointer;
    
    &:hover{
        box-shadow: 0 0 5px 5px #2271D1 inset;
        color: #2271D1;
        border: 2px solid #2271D1;
    }
`

const Button = ({ children }) => {
    return(
        <StylizedButton>{children}</StylizedButton>
    )
};

export default Button;
