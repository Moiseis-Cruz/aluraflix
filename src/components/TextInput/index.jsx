import styled from "styled-components";

const FormControl = styled.div`
    max-width: 573px;
    width: 100%;
`

const Input = styled.input`
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    padding: 16px 12px;
    border-radius: 10px;
    border: 3px solid #262626;
    background-color: transparent;
    color: #A5A5A5;
`

const Label = styled.label`
    font-size: 20px;
    font-weight: 600;
    display: block;
`

const TextInput = ({ label, placeholder, valor, handleChange }) => {

    return(
        <FormControl>
            <Label>{label}</Label>
            <Input onChange={(e) => handleChange(e.target.value)} required value={valor} type="text" placeholder={placeholder} />
        </FormControl>
    )
};

export default TextInput;
