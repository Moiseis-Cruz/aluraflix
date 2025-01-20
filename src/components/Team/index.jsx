import styled from "styled-components";

const TeamsSection = styled.section`
    height: 435px;
    margin-top: 93px;
    border: 3px solid red;
`

const Title = styled.h3`
    background-color: ${props => props.color};
    width: 432px;
    height: 70px;
    border-radius: 15px;
    font-size: 32px;
    font-weight: 800;
    color: #ffffff;
    text-align: center;
    line-height: 70px;
`

const Team = ({ nome, color }) => {
    return(
        <TeamsSection>
            <Title color={color}>{nome}</Title>

            <div>

            </div>
        </TeamsSection>
    )
};

export default Team;
