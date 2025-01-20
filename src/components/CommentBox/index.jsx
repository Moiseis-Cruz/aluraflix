import styled from "styled-components";

const StyledTextArea = styled.textarea`
    width: 573px;
    max-width: 100%;
    height: 220px;
    border-radius: 10px;
    border: 3px solid #262626;
    resize: none;
    background-color: transparent;
    color: #ffffff;
    padding: 25px 12px 0;
    font-size: 20px;
    font-weight: 600;
    font-family: "Source Sans 3", serif;
    &::placeholder {
        color: #ffffff;
    }
`

const FormControl = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const CommentBox = () => {
    return(
        <FormControl>
            <label>descrição</label>
            <StyledTextArea placeholder="Descrição"></StyledTextArea>
        </FormControl>
    )
}

export default CommentBox;
