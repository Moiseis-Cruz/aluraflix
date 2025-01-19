import ImageLogo from "../../assets/images/logo.png";
import styled from "styled-components";
import LinkHeader from "../LinkHeader";
import ImgLogo from "../ImgLogo";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    min-height: 125px;
`

const ButtonList = styled.ul`
    display: flex;
    gap: 25px;
`

const Header = () => {
    return(
        <HeaderContainer>
            <ImgLogo />

            <nav>
                <ButtonList>
                    <li>
                        <LinkHeader to="/">HOME</LinkHeader>
                    </li>
                    <li>
                        <LinkHeader to="/form">NOVO VÍDEO</LinkHeader>
                    </li>
                </ButtonList>
            </nav>
        </HeaderContainer>
    )
};

export default Header;
