import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:space-between;

`

export const Image = styled.img`
    width:10rem;
    height:3rem;
`

export const UList = styled.ul`
    list-style:none;
    display:flex;
    gap:2rem;
    color:white;
    @media (max-width:768px){
       position:fixed;
       right:2rem;
       z-index:99;
       flex-direction:column;
       background-color:#3c3f45;
       padding:2rem;
    }
`

export const ListItem = styled.li`
    cursor:pointer;

    &:hover{
        color:orange;
    }
`

export const BarsImage = styled.img`
    width:1.5rem;
    height:1.5rem;
    cursor:pointer;
    @media (max-width:768px){
    position:fixed;
    right:2rem;
    }
    
`

export const BarsBg = styled.div`
@media (max-width:768px){
    position:fixed;
    background-color:#3c3f45;
    padding:0.5rem;
    width:1rem;
    height:1rem;
    right:1.75rem;
    top:1.25rem;
    z-index:0;
    border-radius:3px;
    }
   
`

