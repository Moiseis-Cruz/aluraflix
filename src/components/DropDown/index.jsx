import styled from "styled-components";

const Select = styled.select`
    width: 570px;
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

const DropDown = ({ label, teams }) => {
    return(
        <div>
            <Label>{label}</Label>
            <Select>
                <option value="" disabled selected >selecione uma categoría</option>
                {
                    teams.map((team) => <option key={team}>{team}</option>)
                }
            </Select>
        </div>
    )
};

export default DropDown;
