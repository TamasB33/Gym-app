import styled from "styled-components";

export const JoinusContainer = styled.div`
    display:flex;
    padding:0 2rem;
    gap:10rem;
    @media (max-width:768px){
       flex-direction:column;
       gap:1rem;
    }
`

export const LeftJ = styled.div`
    color:white;
    font-size:3rem;
    text-transform:uppercase;
    position:relative;
    font-weight:bold;
   

    hr{
        position:absolute;
        width:10.5rem;
        border:2px solid orange;
        border-radius:20%;
        margin:-10px 0;
        background-color:orange;
    }

   

`

export const TextContainerJ = styled.div`
    display:flex;
    gap:1rem;
    @media (max-width:768px){
       gap:2rem;
    }
`

export const TextJ = styled.span`
    @media (max-width:768px){
       font-size:x-large;
       flex-direction:column;
    }
`

export const RightJ = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-end;
    @media (max-width:768px){
       padding:2rem;
    }
`

export const FormJ = styled.form`
    display:flex;
    gap:3rem;
    background-color:grey;
    padding:1rem 2rem;
`

export const InputJ = styled.input`
    background-color:transparent;
    border:none;
    outline:none;
    color:#D9D9D9;
    &::placeholder{
        color:#D9D9D9;
    }
`

export const ButtonJ = styled.button`
    background-color:orange;
    color:white;
`