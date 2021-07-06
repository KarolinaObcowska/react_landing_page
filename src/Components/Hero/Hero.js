import React from 'react';
import { HeroContainer, Video, HeroH1, HeroP, HeroBtn, Button, ArrowRight } from './Hero.styles';
import BackgroundVideo from './Video.mp4';

const Hero = () => {
    return (
        <HeroContainer>
            <Video as='video' autoPlay='autoplay' loop='loop' muted>
                <source src={BackgroundVideo} type='video/mp4'></source>
            </Video>
            <HeroH1>Let<span>'s</span> go into space!</HeroH1>
            <HeroP>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </HeroP>
            <HeroBtn>
                <Button to='signup'><span>Get started </span><ArrowRight /></Button>
            </HeroBtn>
        </HeroContainer>
    )
}

export default Hero
