import styled from "styled-components";
import Form from "../../components/Form";
import { useState } from "react";

const RegistrationSection = styled.section`
    padding-block: 71px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #000000E5;
    color: #ffffff;
`

const RegistrationTitle = styled.h2`
    font-size: 60px;
    font-weight: 900;
`

const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
`

const FormSection = () => {

    const [ collaborators, setCollaborators ] = useState([]);

    const handleNewCollaborator = (collaborator) => {
        console.log(collaborator);
        setCollaborators([
            ...collaborators, collaborator
        ]);
    };

    return(
        <RegistrationSection>
            <RegistrationTitle>NOVO VÍDEO</RegistrationTitle>

            <Paragraph>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</Paragraph>

            <Form
                handleRegisteredContributor={collaborator => handleNewCollaborator(collaborator)}
            />
        </RegistrationSection>
    )
};

export default FormSection;
