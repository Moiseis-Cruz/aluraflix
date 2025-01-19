import styled from "styled-components";

const RegistrationSection = styled.section`
    padding-block: 71px;
`

const RegistrationTitle = styled.h2`
    font-size: 60px;
    font-weight: 900;
    text-align: center;
`

const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
    text-align: center;
`

const FormSection = () => {
    return(
        <RegistrationSection>
            <RegistrationTitle>NOVO VÍDEO</RegistrationTitle>

            <Paragraph>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</Paragraph>

            <h3>Criar Card</h3>
        </RegistrationSection>
    )
};

export default FormSection;
