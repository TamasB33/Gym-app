import React from 'react'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

import { 
    ContainerPrograms,
    ProgramsHeader,
    SpanText,
    ProgramCards,
    Card,
    CardImage,
    CardHeading,
    CardDesc,
    CardJoin,
    ImageArrow
} from './ProgramsStyle'




const Programs = () => {
  return (
    <ContainerPrograms id="programs">
        <ProgramsHeader>
            <SpanText className='stroke-text'>Expolre our</SpanText>
            <SpanText>Programs</SpanText>
            <SpanText className='stroke-text'>To shape you</SpanText>
        </ProgramsHeader>

        <ProgramCards>
        {programsData.map((program) =>(
            <Card key={program.heading}>
                {program.image}
                <CardHeading>{program.heading}</CardHeading>
                <CardDesc>{program.details}</CardDesc>
                <CardJoin>
                    <span>Join now</span>
                    <ImageArrow src={RightArrow}></ImageArrow>
                </CardJoin>
            </Card>
        ))}
        </ProgramCards>
    </ContainerPrograms>
  )
}

export default Programs