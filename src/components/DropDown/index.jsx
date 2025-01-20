const DropDown = ({ label, teams }) => {
    return(
        <div>
            <label>{label}</label>
            <select>
                <option value=""></option>
                {
                    teams.map((team) => <option key={team}>{team}</option>)
                }
            </select>
        </div>
    )
};

export default DropDown;
