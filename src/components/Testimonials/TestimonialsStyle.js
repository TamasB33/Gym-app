import styled from "styled-components";

export const ContainerTestimonials = styled.div`
    display:flex;
    gap:1rem;
    padding:0 2rem;
    @media (max-width:768px){
        flex-direction:column;
        
    }
`

export const LeftT = styled.div`
    display:flex;
    flex:1 1;
    gap:2rem;
    flex-direction:column;
    text-transform:uppercase;
    color:white;
`

export const TitleT = styled.span`
    color:orange;
    font-weight:bold;
`

export const TextT = styled.span`
    font-weight:bold;
    font-size:3rem;
    @media (max-width:768px){
        
    }
`

export const Infromation = styled.span`
    text-transform:none;
    text-align:justify;
    letter-spacing:1.5px;
    line-height:40px;

    @media (max-width:768px){
        font-size:x-large;
    }
`

export const Name = styled.span`
    
`

export const RightT = styled.div`
    flex:1;
    position:relative;
    @media (max-width:768px){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:2rem;
    }
`

export const ImgBack1 = styled.div`
    position:absolute;
    width:17rem;
    height:20rem;
    border:2px solid orange;
    background-color:transparent;
    right:9rem;
    top:0.9rem;
    @media (max-width:768px){
        position:relative;
        display:none;
    }
`

export const ImgBack2 = styled.div`
    position:absolute;
    width:17rem;
    height:20rem;
    right:7rem;
    top:4rem;
    background:linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%);;
    @media (max-width:768px){
        position:relative;
        display:none;
    }
`

export const ImageT = styled.img`
    position:absolute;
    width:17rem;
    height:20rem;
    object-fit:cover;
    right:8rem;
    top:2rem;
    @media (max-width:768px){
        top:0;
        right:0;
        position:relative;
    }
`

export const Arrows = styled.div`
    display:flex;
    gap:1rem;
    position:absolute;
    bottom:1rem;
    left:3rem;

    
`
export const LeftArrow = styled.img`
    width:1.5rem;
    cursor: pointer;
`

export const RightArrow = styled.img`
    width:1.5rem;
    cursor: pointer;
`