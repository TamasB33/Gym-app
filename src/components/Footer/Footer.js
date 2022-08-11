import React from 'react'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"



import { 
  FooterContainer, 
  ImageContainer,
  ImageFooter,
  ImageLogo,
  LogoF,
  Socials,
  BlurF
} from './FooterStyled'



const Footer = () => {
  return (
    <FooterContainer>
      <hr></hr>
      <ImageContainer>
        <Socials>
          <ImageFooter src={Github}></ImageFooter>
          <ImageFooter  src={Instagram}></ImageFooter>
          <ImageFooter src={LinkedIn}></ImageFooter>

        </Socials>

        <LogoF>
        <ImageLogo src={Logo}></ImageLogo>
      </LogoF>
      </ImageContainer>
      <BlurF className="blur"></BlurF>
    </FooterContainer>
  )
}

export default Footer