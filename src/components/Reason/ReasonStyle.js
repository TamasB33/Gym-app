import styled from "styled-components";

export const ContainerReason = styled.div`
    padding:0 2rem;
    display:flex;
    gap:2rem;
    @media (max-width:768px){
       flex-direction:column;
    }
`

export const ImageReason1 = styled.img`
    object-fit:cover;
    width:12rem;
    grid-row:1/3;
    height:26rem;
    @media (max-width:768px){
        width:7rem;
        height:17rem;
    }
`

export const ImageReason2 = styled.img`
    object-fit:cover;
    width: 22.5rem;
    height:16rem;
    grid-column:2/4;
    @media (max-width:768px){
        width:15rem;
        height:10rem;
    }
    
`
export const ImageReason3 = styled.img`
    object-fit:cover;
    width:11.25rem;
    grid-column:2/3;
    grid-row:2;
    @media (max-width:768px){
        width:7rem;
    }
`
export const ImageReason4 = styled.img`
    object-fit:cover;
    width:8.25rem;
    grid-row:2;
    grid-column:3/4;
    @media (max-width:768px){
        width:7rem;
        height:6rem;
    }

`

export const LeftReason = styled.div`
    flex:1 1;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1rem;
    grid-auto-rows:1fr;
    @media (max-width:768px){
        grid-auto-rows:auto;
        overflow:hidden;
    }
`

export const RightReason = styled.div`
    flex:1 1;
    text-transform:uppercase;
    gap:1rem;
    display:flex;
    flex-direction:column;

`

export const Title = styled.span`
    font-weight:bold;
    color:orange;
`

export const RightContent = styled.div`
    color:white;
    font-size:3rem;
    font-weight:bold;
`

export const Details = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
`

export const DetailsItem = styled.div`
    display:flex;
    font-size:1rem;
    gap:1rem;
`

export const DetailsImage = styled.img`
    width:2rem;
    height:2rem;
`

export const DetailsSpan = styled.span`
`

export const PartnerText = styled.span`
    color:gray;
    font-weight:normal;
`

export const Partners = styled.div`
    display:flex;
    gap:1rem;
`

export const PartnerImage = styled.img`
    width:2.5rem;
`

