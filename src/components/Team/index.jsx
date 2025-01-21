import styled from "styled-components";
import CollaboratorCard from "../CollaboratorCard";

const TeamsSection = styled.section`
    min-height: 435px;
    margin-top: 93px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const ContainerTems = styled.div`
    display: flex;
    gap: 30px;
    overflow-x: auto;
`

const Team = ({ nome, color }) => {
    return(
        <TeamsSection>
            <Title color={color}>{nome}</Title>

            <ContainerTems>
                <CollaboratorCard />
                <CollaboratorCard />
                <CollaboratorCard />
                <CollaboratorCard />
                <CollaboratorCard />
                <CollaboratorCard />
                <CollaboratorCard />
                <CollaboratorCard />
                <CollaboratorCard />
            </ContainerTems>
        </TeamsSection>
    )
};

export default Team;
