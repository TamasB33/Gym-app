import React from 'react'
import {testimonialsData} from "../../data/testimonialsData"
import lArrow from "../../assets/leftArrow.png"
import rArrow from "../../assets/rightArrow.png"
import { useState } from 'react'
import {motion} from "framer-motion"
import { 
    ContainerTestimonials,
    LeftT,
    TitleT,
    TextT,
    RightT,
    Infromation,
    Name,
    ImageT,
    LeftArrow,
    RightArrow,
    Arrows,
    ImgBack1,
    ImgBack2
 } from './TestimonialsStyle'


const Testimonials = () => {
    
    const transition = {type:"spring" , duration:3};
    const [selected , setSelected] = useState(0)
    const tLength = testimonialsData.length;
  return (
    <ContainerTestimonials id ="testimonial">
        <LeftT>
            <TitleT>Testimonials</TitleT>
            <TextT className='stroke-text'>What they</TextT>
            <TextT>Say About us</TextT>
            
            <Infromation as={motion.span}
            key={selected}
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={transition}
            >{testimonialsData[selected].review}</Infromation>

            <Name>
                {testimonialsData[selected].name}
                {" "}
                -
                {" "}
                {testimonialsData[selected].status}
            </Name>
            
        </LeftT>

        <RightT>
            <ImgBack1 as={motion.div} 
            initial={{opacity:0,x:-100}}
            transition={{...transition,duration:2}}
            whileInView={{opacity:1,x:0}}
            ></ImgBack1>
            <ImgBack2 as={motion.div}
             initial={{opacity:0,x:100}}
            transition={{...transition,duration:2}}
            whileInView={{opacity:1,x:0}}
            ></ImgBack2>
            <ImageT src={testimonialsData[selected].image} as={motion.img}
            key={selected}
            initial={{opacity:0,x:100}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:-100}}
            transition={transition}
            ></ImageT>

            <Arrows>
                <LeftArrow src = {lArrow} onClick={() =>{selected ===0 ?setSelected(tLength-1) : setSelected(selected-1)}}></LeftArrow>
                <RightArrow src={rArrow} onClick={() =>{selected===tLength-1 ? setSelected(0) : setSelected(selected+1)}}></RightArrow>
            </Arrows>
        </RightT>
    </ContainerTestimonials>
  )
}

export default Testimonials