import React from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
import { 
    Container,
    Image,
    UList,
    ListItem,
    BarsImage,
    BarsBg

} from './HeaderStyled'
import { useState } from 'react'

const Header = () => {

  const mobile = window.innerWidth<768 ?true : false
  const [menuOpen , setMenuOpen] = useState(false);

  return (
    <Container>
        <Image src={Logo} alt ="logo"></Image>
        {(menuOpen===false && mobile==true) ?(
          <div>
          <BarsBg onClick={()=>setMenuOpen(true)}></BarsBg>
          <BarsImage src={Bars} onClick={()=>setMenuOpen(true)}></BarsImage>
          </div>
        ) :  <UList>
          
        <ListItem onClick={()=>setMenuOpen(false)}>
        <Link 
        to="home"
        span={true}
        smooth={true}
        >Home</Link>
        </ListItem>
        <ListItem onClick={()=>setMenuOpen(false)}>
        <Link 
        to="programs"
        span={true}
        smooth={true}
        >Programs</Link>
        </ListItem>
        <ListItem onClick={()=>setMenuOpen(false)}>Why us</ListItem>
        <ListItem onClick={()=>setMenuOpen(false)}><Link 
        to="plans"
        span={true}
        smooth={true}
        >Plans</Link></ListItem>
        <ListItem onClick={()=>setMenuOpen(false)}><Link 
        to="testimonial"
        span={true}
        smooth={true}
        >Testimonials</Link></ListItem>
    </UList>}
       
    </Container>
  )
}

export default Header