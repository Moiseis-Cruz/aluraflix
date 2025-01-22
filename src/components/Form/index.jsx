import styled from "styled-components";
import DropDown from "../DropDown";
import TextInput from "../TextInput";
import Button from "../Button";
import CommentBox from "../CommentBox";
import { useState } from "react";
import { teams } from "../../pages/Home";

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

const Form = ({ handleRegisteredContributor }) => {

    const [ title, setTitle ] = useState("");
    const [ image, setImage ] = useState("");
    const [ video, setVideo] = useState("");
    const [ category, setCategory ] = useState("");
    const [ description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegisteredContributor({
            title,
            image,
            video,
            category,
            description
        });
    };


    return(
        <ContainerForm onSubmit={handleSubmit}>
            <TitleForm>Criar Card</TitleForm>

            <ContentForm>
                <TextInput
                    label="Título"
                    placeholder="Título do vídeo"
                    valor={title}
                    handleChange={valor => setTitle(valor)}
                />
                <DropDown
                    label="Categoria"
                    teams={teams.map(time => time.nome.toLowerCase())}
                    valor={category}
                    handleChange={valor => setCategory(valor)}
                />
                <TextInput
                    label="Imagem"
                    placeholder="Link da imagem"
                    valor={image}
                    handleChange={valor => setImage(valor)}
                />
                <TextInput
                    label="Vídeo"
                    placeholder="Link do vídeo"
                    valor={video}
                    handleChange={valor => setVideo(valor)}
                />
                <CommentBox
                    valor={description}
                    handleChange={valor => setDescription(valor)}
                />

                <Button>GUARDAR</Button>
                <Button>LIMPAR</Button>
            </ContentForm>
        </ContainerForm>
    )
};

export default Form;
