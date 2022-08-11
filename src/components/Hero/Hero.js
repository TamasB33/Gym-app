import React from 'react'
import Header from '../Header/Header'
import {
    Container,
    Right,
    Left,
    Sides,
    Ad,
    AdChild,
    HeroText,
    HeroSpans,
    HeroInfoText,
    Figures,
    FigureItem,
    FigNumber,
    FigDesc,
    Button,
    ButtonContainer,
    HeartRate,
    Image,
    RightButton,
    Rate,
    BPM,
    HeroImage,
    HeroImageBack,
    CalBurn,
    Kcal,
    CaloriesBox,
    CalText,
    CalImage,
    BlurH
} from './HeroStyled'

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition = {type:"spring" , duration:3}
    const mobile = window.innerWidth<=768 ? true : false;
  return (
    <Container id="home">
        <BlurH className="blur"></BlurH>
        <Sides>
        <Left>
            <Header/>
            <Ad>
           
                 <AdChild as={motion.div} drag 
                 initial={{left: mobile ? "138px" : "138px"}}
                whileInView={{left:"8px"}}
                transition={{type:"spring",duration:"3"}}></AdChild>
                  
                
                <span>The best gym services</span>
            </Ad>

            
        <HeroText>
            <HeroSpans>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </HeroSpans>

            <HeroSpans>
                <span>ideal body</span>
            </HeroSpans>

            <HeroSpans>
                <HeroInfoText><p>You can come here to achive your bodys full potential.In here we will help you achive</p> </HeroInfoText>
            </HeroSpans>
        </HeroText>


        <Figures>
            <FigureItem>
                <FigNumber><NumberCounter end={140} start={100} delay='4' preFix="+"></NumberCounter></FigNumber>
                <FigDesc>Expert coaches</FigDesc>
            </FigureItem>

            <FigureItem>
                <FigNumber><NumberCounter end={987} start={800} delay='4' preFix="+"></NumberCounter></FigNumber>
                <FigDesc>Members joined</FigDesc>
            </FigureItem>

            <FigureItem>
                <FigNumber><NumberCounter end={50} start={0} delay='4' preFix="+"></NumberCounter></FigNumber>
                <FigDesc>Fitness programs</FigDesc>
            </FigureItem>
        </Figures>

        <ButtonContainer>
            <Button primary>Get Started</Button>
            <Button>Learn more</Button>
        </ButtonContainer>
        

        </Left>


        <Right>
            <RightButton >Join now</RightButton>
            <HeartRate as={motion.div} 
            transition={transition}
            whileInView={{right:"4rem"}}
            initial={{right:"-1rem  "}}
            >
                <Image src ={Heart}></Image>
                <Rate>Heart rate</Rate>
                <BPM>116Bpm</BPM>
            </HeartRate>

            <HeroImage src={hero_image}></HeroImage>
            <HeroImageBack src={hero_image_back} as={motion.img}
            initial={{right:"11rem"}}
            whileInView={{right:'20rem'}}
            transition={transition}
            ></HeroImageBack>


            <CaloriesBox as={motion.div}
            initial={{right:"37rem"}}
            whileInView={{right:"28rem"}}
            transition={transition}
            
            >
                <CalImage src={Calories}></CalImage>
                <CalText>
                    <CalBurn>Calories</CalBurn>
                    <Kcal>219 Kcal</Kcal>
                </CalText>
                
            </CaloriesBox>
        </Right>

        </Sides>

    </Container>
  )
}

export default Hero