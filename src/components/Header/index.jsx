import ImageLogo from "../../assets/images/logo.png";
import styled from "styled-components";
import LinkHeader from "../LinkHeader";

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
            <img src={ImageLogo} alt="Logo do Aluraflix" />

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
