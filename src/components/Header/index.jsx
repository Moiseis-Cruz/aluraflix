import styled from "styled-components";
import LinkHeader from "../LinkHeader";
import ImgLogo from "../ImgLogo";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    min-height: 125px;
    border-bottom: 4px solid #2271D1;
    box-shadow: 0px 5px 29px 0px #2271D1B2;
    padding-inline: 51px;
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
