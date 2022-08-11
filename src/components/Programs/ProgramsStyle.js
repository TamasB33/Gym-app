import styled from "styled-components";

export const ContainerPrograms = styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
    padding:0 2rem;
`

export const SpanText = styled.span`

`

export const ProgramsHeader = styled.div`
    display:flex;
    gap:5rem;
    font-weight:bold;
    font-size:2.5rem;
    justify-content:center;
    color:white;
    text-transform:uppercase;
    font-style:italic;

    @media (max-width:768px){
        flex-direction:column;
        gap:1rem;
        font-size:x-large;
        align-items:center;
        justify-content:center;
        margin-top:2rem;
    }
`

export const ProgramCards = styled.div`
    display:flex;
    gap:1rem;
    @media (max-width:768px){
        flex-direction:column;
    }
`

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    background-color:grey;
    padding:2rem;
    gap:1rem;
    color:white;
    justify-content:space-between;

    &:hover{
        background:linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%);
        cursor: pointer;
    }
`

export const CardImage = styled.img`
    width:2rem;
    height:2rem;
    color:white;
`

export const CardHeading = styled.span`
    font-size:1rem;
    font-weight:bold;
`

export const CardDesc = styled.span`
    font-size:0.9rem;
    line-height:25px;
`

export const ImageArrow = styled.img`
    width:1rem;
`

export const CardJoin = styled.div`
    display:flex;
    align-items:center;
    gap:2rem;
`