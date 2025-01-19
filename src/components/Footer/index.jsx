import styled from "styled-components";
import ImgLogo from "../ImgLogo";

const ContainerFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    min-height: 125px;
    border-top: 4px solid Blue;
    box-shadow: 0px -5px 29px 0px #2271D1B2;
`

const Footer = () => {
    return(
        <ContainerFooter>
            <ImgLogo />
        </ContainerFooter>
    )
};

export default Footer;
