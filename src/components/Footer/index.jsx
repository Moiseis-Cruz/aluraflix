import styled from "styled-components";
import ImgLogo from "../ImgLogo";

const ContainerFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    min-height: 125px;
`

const Footer = () => {
    return(
        <ContainerFooter>
            <ImgLogo />
        </ContainerFooter>
    )
};

export default Footer;
