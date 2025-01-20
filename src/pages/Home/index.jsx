import styled from "styled-components";
import Team from "../../components/Team";

const ContainerHome = styled.section`
    background-color: #000000E5;
    padding: 93px 42px 159px;

`

const teams = [
    {
        nome: "FRONT END",
        color: "#6BD1FF"
    },
    {
        nome: "BACK END",
        color: "#00C86F"
    },
    {
        nome: "MOBILE",
        color: "#FFBA05"
    },
];

const Home = () => {
    return (
        <ContainerHome>
            {
                teams.map((team) => {
                    return(
                        <Team
                            key={team.nome}
                            nome={team.nome}
                            color={team.color}
                        />
                    )
                })
            }
        </ContainerHome>
    )
};

export default Home;
