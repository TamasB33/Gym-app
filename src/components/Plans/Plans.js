import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import RightArrow from '../../assets/rightArrow.png'
import { 
    PlansContainer,
    PlansHeader,
    PlansSpan,
    PlansCards,
    PlanCard,
    PlanName,
    PlanDesc,
    Feature,
    PlanButton,
    Benefits,
    ImageArrowPlan,
    BlurPL,
    BlurPR
 } from './PlansStyle'
import { Button } from '../Hero/HeroStyled'
import { ImageArrow } from '../Programs/ProgramsStyle'

const Plans = () => {
  return (
    <PlansContainer id="plans">
        <BlurPL className="blur"></BlurPL>
        <BlurPR className="blur"></BlurPR>
        <PlansHeader>
            <PlansSpan className='stroke-text'>READY TO START</PlansSpan>
            <PlansSpan>YOUR JOURNEY</PlansSpan>
            <PlansSpan className='stroke-text'>WITH US</PlansSpan>
        </PlansHeader>

        <PlansCards>
            {plansData.map((plan,i) =>(
                <PlanCard key={plan.name}>
                    {plan.icon}
                    <PlanName>{plan.name}</PlanName>
                    <PlanDesc>{plan.features}</PlanDesc>
                    {plan.features.map((feature,i)=>(
                        <Feature key={i}>
                            <img src={whiteTick}></img>
                            <span>{feature}</span>
                        </Feature>
                    ))}
                    <Benefits>
                        See more Benefits
                        <ImageArrowPlan src={RightArrow}></ImageArrowPlan> 
                    </Benefits>
                    
                    <PlanButton>Join now</PlanButton>
                </PlanCard>
            ))}
        </PlansCards>
    </PlansContainer>
  )
}

export default Plans