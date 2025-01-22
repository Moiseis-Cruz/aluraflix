import styled from "styled-components";

const FormControl = styled.div`
    max-width: 570px;
    width: 100%;
`

const Select = styled.select`
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

const DropDown = ({ label, teams, valor, handleChange }) => {
    return(
        <FormControl>
            <Label>{label}</Label>
            <Select value={valor} onChange={(e) => handleChange(e.target.value)}>
                <option value="" >selecione uma categoría</option>
                {
                    teams.map((team) => <option key={team}>{team}</option>)
                }
            </Select>
        </FormControl>
    )
};

export default DropDown;
