import styled from "styled-components";
import DropDown from "../DropDown";
import TextInput from "../TextInput";
import Button from "../Button";
import CommentBox from "../CommentBox";
import { useState } from "react";

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

const ContentForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 60px 20px;
    margin-top: 60px;
`

const Form = () => {

    const team = [
        "Back End",
        "Front end",
        "Mobile"
    ];

    const [ titulo, setTitulo] = useState("");
    const [ imagem, setImagem ] = useState("");
    const [ video, setVideo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submeteu o formulário: ", titulo, imagem, video);
    };


    return(
        <ContainerForm onSubmit={handleSubmit}>
            <TitleForm>Criar Card</TitleForm>

            <ContentForm>
                <TextInput
                    label="Título"
                    placeholder="Título do vídeo"
                    valor={titulo}
                    handleChange={valor => setTitulo(valor)}
                />
                <DropDown label="Categoria" teams={team} />
                <TextInput
                    label="Imagem"
                    placeholder="Link da imagem"
                    valor={imagem}
                    handleChange={valor => setImagem(valor)}
                />
                <TextInput
                    label="Vídeo"
                    placeholder="Link do vídeo"
                    valor={video}
                    handleChange={valor => setVideo(valor)}
                />
                <CommentBox />

                <Button>GUARDAR</Button>
                <Button>LIMPAR</Button>
            </ContentForm>
        </ContainerForm>
    )
};

export default Form;
