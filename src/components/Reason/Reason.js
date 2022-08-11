import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

import { 
    ContainerReason,
    ImageReason1,
    ImageReason2,
    ImageReason3,
    ImageReason4,
    LeftReason,
    RightReason,
    RightContent,
    Title,
    Details,
    DetailsItem,
    DetailsSpan,
    DetailsImage,
    PartnerText,
    Partners,
    PartnerImage
 } from './ReasonStyle'

const Reason = () => {
  return (
    <ContainerReason>
        <LeftReason>
            <ImageReason1 src={image1}></ImageReason1>
            <ImageReason2 src={image2}></ImageReason2>
            <ImageReason3 src={image3}></ImageReason3>
            <ImageReason4 src={image4}></ImageReason4>

        </LeftReason>

        <RightReason>
            <Title>Some Reasons</Title>
            <RightContent>
                <span className='stroke-text'>Why </span>
                <span>Choose us</span>
            </RightContent>

            <Details>
                <DetailsItem>
                    <DetailsImage src={tick}></DetailsImage>
                    <DetailsSpan>Over 140+ Expert Coaches</DetailsSpan>
                </DetailsItem>

                <DetailsItem>
                    <DetailsImage src={tick}></DetailsImage>
                    <DetailsSpan>Train Smarter and Faster than before</DetailsSpan>
                </DetailsItem>

                <DetailsItem>
                    <DetailsImage src={tick}></DetailsImage>
                    <DetailsSpan>1 Free program for new member </DetailsSpan>
                </DetailsItem>

                <DetailsItem>
                    <DetailsImage src={tick}></DetailsImage>
                    <DetailsSpan>Reliable Partners</DetailsSpan>
                </DetailsItem>
            </Details>
            <PartnerText>OUR PARTNERS</PartnerText>
            <Partners>
                <PartnerImage src={nb}></PartnerImage>
                <PartnerImage src={nike}></PartnerImage>
                <PartnerImage src={adidas}></PartnerImage>
            </Partners>
        </RightReason>
    </ContainerReason>
  )
}

export default Reason