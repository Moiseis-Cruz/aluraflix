import styled from "styled-components";
import Delete from "../../assets/images/delete.png";
import Edit from "../../assets/images/edit.png";

const ContentCard = styled.div`
    width: 432px;
    height: 319px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
`

const ContentBtn = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

const Btn = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    border: none;
    color: #ffffff;
    cursor: pointer;
`

const CollaboratorCard = () => {
    return(
        <>
            <ContentCard>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/9GGdGtaUqCI?si=ANuIRKhtQFUe-Yuz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                <ContentBtn>
                    <Btn>
                        <img style={{width: "25px", height: "28px"}} src={Delete} alt="" />
                        <span style={{fontSize: "16px", fontWeight: "800"}}>DELETAR</span>
                    </Btn>

                    <Btn>
                        <img style={{width: "25px", height: "28px"}} src={Edit} alt="" />
                        <span style={{fontSize: "16px", fontWeight: "800"}}>EDITAR</span>
                    </Btn>
                </ContentBtn>
            </ContentCard>
        </>
    )
};

export default CollaboratorCard;
