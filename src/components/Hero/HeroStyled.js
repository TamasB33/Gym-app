import styled from "styled-components";

export const Container = styled.div`
`

export const Left = styled.div`
    padding:2rem;
    padding-top:1.5rem;
    flex:3;
    display:flex;
    flex-direction:column;
    gap:2rem;

    
`

export const Right = styled.div`
    flex:1;
    position:relative;
    background-color:orange;
    @media (max-width:768px){
        position:relative;
        background:none;
    }
`

export const Sides = styled.div`
    display:flex;
    justify-content:space-between;
    @media (max-width:768px){
        flex-direction:column;
    }
`

export const Ad=styled.div`
    margin-top:4rem;
    background-color:#363d42;
    border-radius:4rem;
    width:fit-content;
    padding:20px 13px;
    text-transform:uppercase;
    color:white;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:flex-start; 

    span{
        z-index:2;
    }

    @media (max-width:768px){
        margin-top:0;
        align-self:center;
    }
`

export const AdChild = styled.div`
    position:absolute;
    background-color:orange;
    width:5.4rem;
    height:80%;
    left:8px;
    border-radius:3rem;
    z-index:1;

`

export const HeroSpans = styled.div`
    
`

export const HeroText = styled.div`
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    text-transform:uppercase;
    font-weight:bold;
    font-size:4.5rem;
    color:white;
    text-overflow:inherit;

    @media (max-width:768px){
        font-size:xx-large;
        align-items:center;
        justify-content:center;
    }

`

export const HeroInfoText = styled.span`
    font-size:1rem;
    font-weight:normal;
    text-transform:none;
    letter-spacing:1px;
    width:80%;
    @media (max-width:768px){
       font-size:small;
       font-weight:500;
       letter-spacing:1px;
       text-align:center;
    }
`

export const Figures = styled.div`
    display:flex;
    gap:2rem;

    @media (max-width:768px){
        justify-content:center;
    }

`

export const FigureItem = styled.div`
    display:flex;
    flex-direction:column;
`

export const FigNumber = styled.span`
    color:white;
    font-size:2rem;
    @media (max-width:768px){
        font-size:large
    }
`

export const FigDesc = styled.span`
    color:grey;
    text-transform:uppercase;
    @media (max-width:768px){
        font-size:small;
    }
`

export const Button = styled.button`
    background-color:${props => props.primary ? "orange" : "transparent"};
    font-weight:bold;
    padding:0.5rem;
    border:4px solid orange;
    transition:300ms all;
    width:8rem;
    align-items:center;
    justify-content:center;
    display:flex;

    &:hover{
        cursor:pointer;
    }

    
`

export const ButtonContainer = styled.div`
    display:flex;
    gap:1rem;
    font-weight:normal;
    @media (max-width:768px){
        justify-content:center;
    }
    
`

export const HeartRate = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    background-color:#464D53;
    width:fit-content;
    padding:1rem;
    align-items:start;
    border-radius:4px;
    position:absolute;
    right:4rem;
    top:7rem;

    img{
        width:2rem;
    }

    @media (max-width:768px){
        left:1rem;
        top:2rem;
    }
`

export const Image = styled.img`

`

export const RightButton = styled(Button)`
    position:absolute;
    right:2rem;
    top:2rem;
    color:black;
    background-color:white;
`

export const Rate = styled.span`
    color:grey;

`

export const BPM = styled.span`
    color:white;
    font-size:1.5rem;
`

export const HeroImage = styled(Image)`
    position:absolute;
    top:10rem;
    right:8rem;
    width:22rem;
    @media (max-width:768px){
        position:relative;
        width:15rem;
        left:7rem;
        top:4rem;
        align-self:center;
    }
`

export const HeroImageBack = styled(Image)`
    position:absolute;
    top:4rem;
    right: 19rem;
    z-index:-1;
    width:15rem;

    @media (max-width:768px){
        width:15rem;
        left:2rem;
        top:0rem;
    }
`


export const CaloriesBox = styled.div`
    display:flex;
    gap:2rem;
    background-color:#656565;
    padding:1rem;
    width:fit-content;
    position:absolute;
    top:35rem;
    right:29rem;
    border-radius:2rem;

    @media (max-width:768px){
        position:relative;
        top:5rem;
        left:2rem;
    }

`
export const CalText = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

export const CalBurn = styled.span`
    color:gray;
`

export const Kcal = styled.span`
    color:white;
    font-size:1.5rem;
    @media (max-width:768px){
        color:white;
        font-size:1rem;
    }
`   

export const CalImage = styled(Image)`
    width:3rem;
    @media (max-width:768px){
        width:2rem;
    }
`

export const BlurH = styled.div`
    width:22rem;
    height:30rem;
    left:0;
`