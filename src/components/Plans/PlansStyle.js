import styled from "styled-components";

export const PlansContainer = styled.div`
    margin-top: -4rem;
    padding:0 2rem;
    display:flex;
    flex-direction:column;
    gap:4rem;
    position:relative;
    color:white;
`

export const PlansHeader = styled.div`
    display:flex;
    gap:2rem;
    justify-content:center;
    color:white;
    font-size:2.5rem;
    font-style:italic;
    font-weight:bold;

    @media (max-width:768px){
        flex-direction:column;
        gap:1rem;
        font-size:x-large;
        align-items:center;
        justify-content:center;
        margin-top:2rem;
    }
`

export const PlansSpan = styled.span`
    
`

export const PlansCards = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:3rem;

    @media (max-width:768px){
        flex-direction:column;
        gap:1rem;
       
    }
`

export const PlanCard = styled.div`
    display:flex;
    flex-direction:column;
    gap:2rem;
    background-color:#656565;
    align-items:center;
    svg{
        fill:orange;
        width:2rem;
        height:2rem;
        margin-top:0.5rem
    }
    &:hover{
        background:linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%);
    }

`

export const PlanName = styled.span`
    font-size:1.5rem;
`

export const PlanDesc = styled.span`
    text-align:center;
`

export const Feature = styled.div`
    display:flex;
    align-items:center;

    img{
        width:1.25rem;
        height:1.25rem;
        margin-right:0.25rem;
    }
`

export const PlanButton = styled.div`
    background-color:white;
    color:black;
    width:50%; 
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:4px;
    margin-bottom:4px;
    padding:10px;

    &:hover{
        cursor:pointer;
        background-color:#ffcc99;
    }

`

export const Benefits = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:underline;
    font-size:0.75rem;
    cursor:pointer;
`

export const ImageArrowPlan = styled.img`
    width:1rem;
    color:black;
`

export const BlurPL = styled.div`
    width:32rem;
    height:20rem;
    top:6rem;
    left:0;
`

export const BlurPR = styled.div`
    width:32rem;
    height:20rem;
    right:0;
    top:10rem;
`