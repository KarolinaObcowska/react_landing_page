import React from 'react'
import Icon1 from '../../images/svg-3.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-4.svg';


import {
    ServicesContainer,
    ServicesTitle,
    ServicesWrap,
    ServicesCard,
    ServicesIcon,
    ServicesSubtitle,
    ServicesP
} from './Services.styles';


const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesTitle>Our Services</ServicesTitle>
            <ServicesWrap>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesSubtitle>Dolore magna</ServicesSubtitle>
                    <ServicesP>Lorem ipsum dolor sit amet.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesSubtitle>Tempor incidi</ServicesSubtitle>
                    <ServicesP>Lorem ipsum dolor sit amet.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesSubtitle>Adipiscing elit</ServicesSubtitle>
                    <ServicesP>Lorem ipsum dolor sit amet.</ServicesP>
                </ServicesCard>
            </ServicesWrap>
        </ServicesContainer >
    )
}

export default Services
