import styled from "styled-components";
import DropDown from "../DropDown";
import TextInput from "../TextInput";

const ContainerForm = styled.form`
    width: 1172px;
    max-width: 100%;
    margin-top: 47px;
    font-family: "Source Sans 3", serif;
`

const TitleForm = styled.h3`
    font-size: 36px;
    font-weight: 600;
    padding-block: 8px;
    border-block: 2px solid #262626;
`

const Form = () => {

    const team = [
        "Back End",
        "Front end",
        "Mobile"
    ];

    return(
        <ContainerForm>
            <TitleForm>Criar Card</TitleForm>

            <div style={{display: "flex", flexWrap: "wrap", gap: "60px 20px", marginTop: "60px"}}>
                <TextInput label="Título" placeholder="Título do vídeo" />
                <DropDown label="Categoria" teams={team} />
                <TextInput label="Imagem" placeholder="Link da imagem" />
                <TextInput label="Vídeo" placeholder="Link do vídeo" />
            </div>
        </ContainerForm>
    )
};

export default Form;
